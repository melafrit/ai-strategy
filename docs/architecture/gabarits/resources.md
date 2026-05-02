# Gabarit — Page Ressources

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Resources |
| **URL pattern** | `/{lang}/ressources/` (et sous-pages `/fiches/`, `/lectures/`, `/videos/`, `/standards/`) |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Centraliser **tous les contenus téléchargeables ou curés** du site (fiches PDF, lectures externes sourcées, vidéos YouTube, standards et frameworks) dans un hub navigable par filtres. C'est la page de référence pour le **consultant en mission** ou l'**enseignant en préparation de cours**.

## 2. Audience prioritaire

- **Consultant** (audience #1 ici) : besoin d'accès rapide aux templates et matrices.
- **Enseignant** : besoin de constituer un dossier pédagogique.
- **Apprenant** : besoin de retrouver une ressource déjà consultée.

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Ressources                          │
├──────────────────────────────────────────────────────────────────────┤
│ HÉRO RESSOURCES                                                      │
│ H1 : Ressources pédagogiques                                         │
│ Lead : ce que vous trouvez ici · approche éditoriale (sources)       │
│ Stats : N fiches · M lectures · K vidéos · L standards               │
├──────────────────────────────────────────────────────────────────────┤
│ NAVIGATION PAR TYPE                                                  │
│ [Fiches PDF] [Lectures] [Vidéos] [Standards] [Toutes]                │
├──────────────────────────────────────────────────────────────────────┤
│ FILTRES (4 dimensions de la taxonomie)                               │
│ [Module v]  [Tech v]  [Secteur v]  [Niveau v]   X Effacer            │
│ « N ressources correspondent »                                       │
├──────────────────────────────────────────────────────────────────────┤
│ GRILLE DE RESSOURCES (3 colonnes desktop, 1 mobile)                  │
│ Cartes <ResourceCard /> avec :                                       │
│   - icône type · titre · description courte                          │
│   - tags taxonomie · niveau de preuve                                │
│   - bouton télécharger / lire / écouter / regarder                   │
│ Tri : pertinence · date · alphabétique                               │
├──────────────────────────────────────────────────────────────────────┤
│ Pagination ou lazy load                                              │
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero ressources
- **H1** : « Ressources pédagogiques ».
- **Lead** : explication de la curation (4 types, hiérarchie des sources, licence ouverte).
- **Stats** : compteurs dynamiques par type.

### 4.2 Navigation par type
Tabs ou pills permettant de filtrer rapidement par type :
1. **Fiches PDF** : ~30 fiches générées en interne (Phase 5).
2. **Lectures** : articles, rapports, working papers externes sourcés.
3. **Vidéos** : embeds YouTube curés (chaînes officielles : MIT, NIST, OCDE…).
4. **Standards** : NIST AI RMF, OCDE Principles, AI Act EU…
5. **Toutes** : vue agrégée.

### 4.3 Barre de filtres
`<FiltersBar />` reprenant les 4 dimensions de la taxonomie. Filtres en `OR` au sein d'une dimension, en `AND` entre dimensions (cf. `taxonomy.md` section 7). Compteur dynamique de résultats.

### 4.4 Grille de ressources
`<ResourceCard />` avec :
- Icône Lucide selon le type (`FileText`, `BookOpen`, `Video`, `ShieldCheck`).
- Titre (lien vers ressource).
- Description courte (2 lignes max).
- 1-2 tags taxonomie majeurs.
- Niveau de preuve via `<SourceTag />` discret.
- Action : « Télécharger », « Lire la source », « Regarder », « Voir le standard ».

### 4.5 Tri
Dropdown : pertinence (défaut) · date de mise à jour · alphabétique.

## 5. Sous-pages thématiques (optionnelles)

Quatre sous-pages spécialisées (pour le SEO et la navigation) :

| URL | Contenu | Particularité |
| :--- | :--- | :--- |
| `/{lang}/ressources/fiches/` | Uniquement les ~30 fiches PDF internes | QR codes affichés |
| `/{lang}/ressources/lectures/` | Articles et rapports externes | Date d'accès systématique |
| `/{lang}/ressources/videos/` | Embeds YouTube + contexte éditorial | Embed privacy-friendly (no-cookie) |
| `/{lang}/ressources/standards/` | NIST, OCDE, AI Act, etc. | Mise en relief réglementaire |

## 6. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroSecondary />` | Hero ressources |
| `<TypeNavigation />` | Pills de filtre par type |
| `<FiltersBar />` | Barre de filtres taxonomie |
| `<ResourceCard />` | Carte de ressource |
| `<SortDropdown />` | Sélecteur de tri |
| `<EmptyState />` | État vide si aucun résultat |
| `<Pagination />` | Pagination accessible |

## 7. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| H1 | « Ressources pédagogiques » | "Pedagogical resources" | « موارد تربوية » |
| Tab fiches | « Fiches PDF » | "PDF handouts" | « ملخصات PDF » |
| Tab lectures | « Lectures » | "Readings" | « قراءات » |
| Tab vidéos | « Vidéos » | "Videos" | « فيديوهات » |
| Tab standards | « Standards » | "Standards" | « معايير » |
| Bouton télécharger | « Télécharger (PDF) » | "Download (PDF)" | « تنزيل (PDF) » |
| Compteur résultats | « N ressources correspondent » | "N resources match" | « N موارد متطابقة » |
| Effacer filtres | « Effacer les filtres » | "Clear filters" | « مسح المرشحات » |
| État vide | « Aucune ressource ne correspond. Essayez d'élargir vos filtres. » | "No matching resources. Try broadening your filters." | « لا توجد موارد متطابقة. حاول توسيع المرشحات. » |

## 8. Données nécessaires

```typescript
interface ResourceItem {
  id: string;
  type: 'pdf' | 'reading' | 'video' | 'standard';
  title: string;
  description: string;
  url: string; // local pour PDFs, externe pour autres
  language: 'fr' | 'en' | 'ar' | 'multi';
  taxonomy: TaxonomyTags;
  sourceLevel: SourceLevel;
  publishedAt?: string;
  accessedAt?: string; // pour ressources externes
  qrCode?: string; // pour les PDFs
}
```

## 9. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « Ressources pédagogiques · AI Strategy » |
| `<meta description>` | « Fiches PDF, lectures externes sourcées, vidéos curées, standards de gouvernance IA. Filtres par module, technologie, secteur, niveau. » |
| Schema.org | `CollectionPage` |

## 10. Accessibilité

- Filtres : groupés par `<fieldset>` + `<legend>`, navigation clavier.
- Compteur de résultats annoncé en `aria-live="polite"`.
- Cartes : `<article>` avec `<h3>` pour le titre.
- Pagination : conventions ARIA standard.

## 11. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Liens externes morts | Vérification automatique en CI (lien checker mensuel) |
| Vidéos YouTube qui disparaissent | Privilégier les chaînes officielles ; fallback texte si vidéo retirée |
| Pagination perdue lors d'un changement de filtre | URL state-driven (filters dans la query string) |
| Surcharge cognitive si 100+ ressources | Tri par défaut sur pertinence + virtual scroll si > 30 résultats |

---

## 📎 Documents associés

- [Taxonomie](../taxonomy.md) · [Sitemap](../sitemap.md)
- [Catalogue de composants](../../design-system/components.md)
