#!/usr/bin/env python3
"""
Trilingual SEO audit for AI Strategy site.

For each Astro index page in fr/en/ar, extract:
  - title (string literal, template literal, or variable)
  - description (string literal, template literal, or variable)
  - first H1 inside body
And compute character length (NOT byte length) — properly handling Arabic UTF-8.

Output a markdown table per language, flagging pages that fall outside SEO ideals:
  - Title: 25-65 chars (ideal 50-60)
  - Description: 100-165 chars (ideal 120-160)
"""
from __future__ import annotations
import re
import sys
from pathlib import Path

ROOT = Path('src/pages')
TITLE_MIN, TITLE_MAX = 25, 65
DESC_MIN, DESC_MAX = 100, 165


def extract_attr(content: str, attr: str) -> str | None:
    """Extract title= or description= value, supporting:
       - attr="..."          (string literal)
       - attr={`...`}        (template literal, may span multiple lines)
       - attr={varname}      (variable lookup attempt)
       - attr={t('key', ...)} (i18n function call — return placeholder marker)

    For SEO purposes, prioritize the BaseLayout opening tag where SEO meta is set.
    """
    # Find the BaseLayout opening tag (where SEO title/description is set)
    bl_match = re.search(r'<BaseLayout\b([^>]*)>', content, re.DOTALL)
    if bl_match:
        # Restrict search to BaseLayout's attributes only — that's the SEO scope
        scope = bl_match.group(1)
    else:
        scope = content

    # 1. String literal: attr="..."
    m = re.search(rf'\b{attr}=\s*"([^"]+)"', scope)
    if m:
        return m.group(1)

    # 2. Template literal: attr={`...`}
    m = re.search(rf'\b{attr}=\{{`((?:[^`]|\\.)+?)`\}}', scope, re.DOTALL)
    if m:
        # Strip whitespace and JS expressions ${...} (count their literal text approx)
        val = m.group(1)
        # Replace ${expr} placeholders with rough estimate text — just keep the placeholder length stable
        val = re.sub(r'\$\{[^}]+\}', '~', val)
        return val.strip()

    # 3. i18n function call: attr={t('key', locale)} — treat as valid (i18n-managed)
    m = re.search(rf'\b{attr}=\{{t\([^)]+\)\}}', scope)
    if m:
        return '__I18N_MANAGED__'

    # 4. Variable: attr={varname}
    m = re.search(rf'\b{attr}=\{{(\w+)\}}', scope)
    if m:
        var = m.group(1)
        # Look up `const VAR = "..."`, `const VAR = '...'`, or `const VAR = \`...\`` in full content
        m2 = re.search(rf"""const\s+{var}\s*=\s*["']([^"']+)["']""", content)
        if m2:
            return m2.group(1)
        m2 = re.search(rf'const\s+{var}\s*=\s*`((?:[^`]|\\.)+?)`', content, re.DOTALL)
        if m2:
            val = re.sub(r'\$\{[^}]+\}', '~', m2.group(1))
            return val.strip()
    return None


def extract_h1(content: str) -> str | None:
    """Extract first <h1>...</h1> text content — strip tags and trim."""
    m = re.search(r'<h1[^>]*>(.+?)</h1>', content, re.DOTALL)
    if not m:
        # Try Astro's title prop on HeroSecondary or HeroPrimary
        m = re.search(r'<Hero(?:Primary|Secondary)\s+[^>]*?title="([^"]+)"', content, re.DOTALL)
        if m:
            return m.group(1).strip()
        m = re.search(r'<Hero(?:Primary|Secondary)\s+[^>]*?title=\{`((?:[^`]|\\.)+?)`\}', content, re.DOTALL)
        if m:
            return re.sub(r'\$\{[^}]+\}', '~', m.group(1)).strip()
        return None
    text = m.group(1)
    # Strip nested tags
    text = re.sub(r'<[^>]+>', '', text)
    return text.strip()


def char_len(s: str | None) -> int:
    """Unicode character count (graphemes — len() works fine in Python for code points)."""
    if s is None:
        return 0
    return len(s)


def audit(lang: str) -> tuple[int, int, int, list[dict]]:
    """Return (total_pages, stub_count, issue_count, list of issues)."""
    base = ROOT / lang
    issues: list[dict] = []
    total = 0
    stubs = 0
    for f in sorted(base.rglob('index.astro')):
        total += 1
        rel = f.relative_to(base).parent.as_posix() or '/'
        content = f.read_text(encoding='utf-8')
        # Detect TranslationPending stubs — these are intentional placeholders
        is_stub = 'TranslationPending' in content
        if is_stub:
            stubs += 1
            continue  # Skip stubs — they have known structural placeholders by design
        title = extract_attr(content, 'title')
        desc = extract_attr(content, 'description')
        h1 = extract_h1(content)
        # i18n-managed values are considered valid (managed via translation files)
        if title == '__I18N_MANAGED__':
            tlen = -1
        else:
            tlen = char_len(title)
        if desc == '__I18N_MANAGED__':
            dlen = -1
        else:
            dlen = char_len(desc)
        flags = []
        if title is None:
            flags.append('NO_TITLE')
        elif tlen >= 0 and tlen > TITLE_MAX:
            flags.append(f'T_LONG({tlen})')
        elif tlen >= 0 and tlen < TITLE_MIN:
            flags.append(f'T_SHORT({tlen})')
        if desc is None:
            flags.append('NO_DESC')
        elif dlen >= 0 and dlen > DESC_MAX:
            flags.append(f'D_LONG({dlen})')
        elif dlen >= 0 and dlen < DESC_MIN:
            flags.append(f'D_SHORT({dlen})')
        if h1 is None:
            flags.append('NO_H1')
        if flags:
            issues.append({
                'route': rel,
                'tlen': tlen,
                'dlen': dlen,
                'flags': flags,
                'title': title,
                'desc': desc,
                'h1': h1,
            })
    return total, stubs, len(issues), issues


def main():
    print('# Trilingual SEO Audit — AI Strategy')
    print()
    for lang in ('fr', 'en', 'ar'):
        total, stubs, n_issues, issues = audit(lang)
        clean = total - n_issues - stubs
        denom = total - stubs
        print(f'## {lang.upper()} — {clean}/{denom} translatable pages clean ({n_issues} issues, {stubs} intentional stubs)')
        print()
        if not issues:
            print('  ✅ All translatable pages meet SEO ideals.')
            print()
            continue
        # Print table
        print(f'  {"ROUTE":<32} {"T_LEN":>5} {"D_LEN":>5}  FLAGS')
        print(f'  {"-"*32} {"-"*5} {"-"*5}  -----')
        for i in issues:
            tlen_disp = 'i18n' if i['tlen'] == -1 else str(i['tlen'])
            dlen_disp = 'i18n' if i['dlen'] == -1 else str(i['dlen'])
            print(f'  {i["route"]:<32} {tlen_disp:>5} {dlen_disp:>5}  {", ".join(i["flags"])}')
        print()


if __name__ == '__main__':
    main()
