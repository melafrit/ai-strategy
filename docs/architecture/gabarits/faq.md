# Gabarit — FAQ

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | FAQ |
| **URL pattern** | `/{lang}/faq/` |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Répondre de manière **transparente et concise** aux questions fréquentes sur le site, son indépendance, son contenu, ses licences, sa méthodologie, et ses prochaines évolutions. Un visiteur doit pouvoir lever ses doutes en moins de 5 minutes.

## 2. Audience prioritaire

Tout visiteur en **phase d'évaluation** ou en **doute légitime** sur la nature du site (« Est-ce un cours MIT ? Combien ça coûte ? Mon usage est-il autorisé ? »).

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB                                                  │
├──────────────────────────────────────────────────────────────────────┤
│ HÉRO FAQ                                                             │
│ H1 : Foire aux questions                                             │
│ Lead : posez une question via [GitHub Issue]                         │
├──────────────────────────────────────────────────────────────────────┤
│ NAVIGATION PAR THÈME (sticky)                                        │
│ • À propos du site                                                   │
│ • Indépendance et MIT                                                │
│ • Contenu et sources                                                 │
│ • Usage pédagogique                                                  │
│ • Usage en mission de conseil                                        │
│ • Licence et droits                                                  │
│ • Aspects techniques                                                 │
│ • Multilinguisme                                                     │
├──────────────────────────────────────────────────────────────────────┤
│ ACCORDÉON DE QUESTIONS PAR THÈME                                     │
│ Q1 — Question                                                        │
│ ↓ Réponse claire et sourcée                                          │
│ Q2 — ...                                                             │
│ ...                                                                  │
├──────────────────────────────────────────────────────────────────────┤
│ AUCUNE RÉPONSE ?                                                     │
│ Bouton : « Poser une question sur GitHub »                           │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero FAQ
- **H1** : « Foire aux questions ».
- **Lead** : invitation à poser une question via GitHub Issues si la réponse manque.

### 4.2 Navigation par thème
8 thèmes en sticky (desktop) ou en accordéon principal (mobile) :

1. À propos du site
2. Indépendance et MIT
3. Contenu et sources
4. Usage pédagogique
5. Usage en mission de conseil
6. Licence et droits
7. Aspects techniques
8. Multilinguisme

### 4.3 Liste des questions (inventaire initial)

#### Thème 1 — À propos du site

- À qui s'adresse ce site ?
- Combien coûte l'accès ?
- Faut-il s'inscrire ?
- Le site est-il actualisé ?

#### Thème 2 — Indépendance et MIT

- Ce site est-il un cours officiel MIT ?
- Êtes-vous affilié à MIT ou MIT Sloan ?
- Pourquoi mentionner MIT alors ?
- Le contenu est-il identique à celui de MIT ?

#### Thème 3 — Contenu et sources

- D'où viennent les informations ?
- Que signifient les étiquettes « Source officielle » / « Complément recommandé » / « Reconstruction pédagogique » ?
- Pourquoi certains éléments sont-ils marqués « À vérifier » ?
- Les études de cas sont-elles inventées ?

#### Thème 4 — Usage pédagogique

- Puis-je utiliser le contenu pour mon cours ?
- Puis-je télécharger les fiches pour mes étudiants ?
- Puis-je modifier le contenu ?
- Puis-je publier des extraits dans un manuel ?

#### Thème 5 — Usage en mission de conseil

- Puis-je utiliser les templates pour des clients ?
- Puis-je revendre des contenus modifiés à un client ?
- Comment citer le site dans une présentation client ?
- Puis-je en faire une formation interne payante en entreprise ?

#### Thème 6 — Licence et droits

- Quelles sont les licences exactes ?
- Quelle est la différence entre MIT et CC BY-NC-SA 4.0 ?
- Que signifie « non commercial » dans CC BY-NC-SA ?
- Que signifie « partage à l'identique » ?

#### Thème 7 — Aspects techniques

- Le site fonctionne-t-il sans JavaScript ?
- Mes données de quiz sont-elles envoyées quelque part ?
- Comment télécharger l'ensemble du site (offline) ?
- Le site est-il accessible aux utilisateurs en situation de handicap ?

#### Thème 8 — Multilinguisme

- Pourquoi trois langues ?
- Toutes les pages sont-elles disponibles dans les trois langues ?
- Comment changer la langue ?
- Pourquoi l'arabe en mode RTL ?

### 4.4 Réponses : règles éditoriales

Chaque réponse doit :
- Tenir en **2-5 phrases** maximum (sauf exception justifiée).
- Citer des sources lorsque pertinent (`<SourceTag />`).
- Renvoyer vers la page la plus pertinente (« Voir aussi : … »).
- Éviter le ton commercial.

⚠️ Notamment pour le thème 2 (Indépendance et MIT) : être **explicite** sur l'absence d'affiliation.

### 4.5 Aucune réponse ? CTA GitHub
Bloc final invitant à poser une question via GitHub Issues, avec lien direct.

## 5. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroSecondary />` | Hero FAQ |
| `<ThemeNav />` | Navigation par thème sticky |
| `<FaqAccordion />` | Accordéon de questions |
| `<FaqItem />` | Question/réponse individuelle |
| `<SourceTag />` | Niveau de preuve si réponse sourcée |
| `<CtaPair />` | CTA final (GitHub + Issue tracker) |

## 6. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| H1 | « Foire aux questions » | "Frequently Asked Questions" | « الأسئلة الشائعة » |
| Texte expand | « Afficher la réponse » | "Show the answer" | « عرض الإجابة » |
| CTA fin | « Poser une question sur GitHub » | "Ask a question on GitHub" | « اطرح سؤالاً على GitHub » |
| Voir aussi | « Voir aussi » | "See also" | « انظر أيضاً » |

## 7. Données nécessaires

```typescript
interface FaqPage {
  lang: 'fr' | 'en' | 'ar';
  themes: FaqTheme[];
}

interface FaqTheme {
  id: string;
  title: string;
  questions: FaqItem[];
}

interface FaqItem {
  id: string;
  question: string;
  answer: string; // markdown autorisé
  source?: Source;
  seeAlso?: { label: string; href: string }[];
}
```

## 8. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « FAQ · AI Strategy » |
| `<meta description>` | « Réponses à 30+ questions : indépendance MIT, sources, usage pédagogique, licences, aspects techniques, multilinguisme. » |
| Schema.org | `FAQPage` avec `mainEntity` = liste des `Question` / `Answer` |

⚠️ Schema.org `FAQPage` est très bien indexé par les moteurs de recherche : potentiel fort en featured snippet.

## 9. Accessibilité

- Accordéon : pattern ARIA standard (`aria-expanded`, `aria-controls`).
- Navigation par thème : ancres internes accessibles au clavier.
- Tous les liens « Voir aussi » : libellés explicites incluant la destination.

## 10. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| FAQ qui devient un substitut au support utilisateur | CTA GitHub Issues clair pour les questions hors FAQ |
| Réponses trop longues, FAQ qui devient un blog | Limite de 5 phrases par défaut |
| FAQ obsolète (réponses non à jour avec le contenu) | Audit éditorial à chaque fin de phase |
| Réponses ambiguës sur l'indépendance MIT | Tester chaque réponse du thème 2 sur un lecteur tiers naïf |

---

## 📎 Documents associés

- [Charte de cadrage](../../cadrage/charte-de-cadrage.md) — section 6 (principes éditoriaux)
- [License Content (CC BY-NC-SA 4.0)](../../../LICENSE-CONTENT)
- [Sitemap](../sitemap.md)
