# Prompts NotebookLM — série podcasts AI Strategy

> **10 prompts prêts à coller dans NotebookLM pour générer la série complète.**

Chaque fichier de ce dossier est **autonome** : il contient tout ce qu'il faut pour produire un épisode de la série en une session NotebookLM, sans avoir à consulter d'autres documents.

---

## Structure d'un fichier

Chaque prompt suit le même gabarit en 6 sections, dans un volume contraint à **moins de 5 200 caractères** :

| § | Section | Rôle |
|---|---|---|
| 1 | Documents à charger | Liste exacte des sources NotebookLM (3-5 PDFs + 1-2 URLs web) avec ce qu'il **ne faut pas** charger |
| 2 | Procédure NotebookLM | 7 étapes pas-à-pas dans l'interface |
| 3 | Prompt à coller | Bloc complet pour le champ "Custom instructions" : langue, public, durée, format, structure 6 chapitres, takeaways, instructions spécifiques, contraintes strictes |
| 4 | Grille qualité | 8 critères pour valider l'épisode (6/8 minimum sinon régénérer) |
| 5 | Publication | 7 étapes après validation jusqu'au commit Git |
| 6 | Plan B | 4 fallbacks adaptés à l'épisode si la génération échoue |

---

## Index des 10 prompts

| # | Slug | Thème | Durée cible | Public principal |
|---:|---|---|---:|---|
| 01 | [pourquoi-ia-pour-dirigeants](./ep-01-pourquoi-ia-pour-dirigeants.md) | Foundations | 12-15 min | Dirigeants COMEX |
| 02 | [machine-learning-au-quotidien](./ep-02-machine-learning-au-quotidien.md) | Technology | 12-15 min | Chefs de projet IA |
| 03 | [genai-morgan-stanley](./ep-03-genai-morgan-stanley.md) | Technology | 13-16 min | CIO, responsables data |
| 04 | [robotique-amazon-ur-pme](./ep-04-robotique-amazon-ur-pme.md) | Technology | 12-15 min | Dirigeants industrie |
| 05 | [ai-act-eu-qui-est-concerne](./ep-05-ai-act-eu-qui-est-concerne.md) | Governance | 14-17 min | Juristes, DPO, conformité |
| 06 | [nist-rmf-gouverner-sans-bureaucratiser](./ep-06-nist-rmf-gouverner-sans-bureaucratiser.md) | Governance | 13-16 min | Responsables data |
| 07 | [construire-roadmap-ia-capstone](./ep-07-construire-roadmap-ia-capstone.md) | Foundations | 15-18 min | Tous (consultants, dirigeants) |
| 08 | [intelligence-collective-takeda](./ep-08-intelligence-collective-takeda.md) | Application | 12-15 min | DRH, transformation |
| 09 | [ia-travail-augmenter-ou-remplacer](./ep-09-ia-travail-augmenter-ou-remplacer.md) | Application | 13-16 min | DRH, formation |
| 10 | [pieges-strategie-ia](./ep-10-pieges-strategie-ia.md) | Foundations | 14-17 min | Tous (épisode bilan) |

---

## Workflow recommandé

**Pour produire la série complète (~10-12h opérateur) :**

1. **Préparer les PDFs source une fois pour toutes**. Imprimer chaque page du site mentionnée dans les §1 via `Ctrl+P` → "Enregistrer en PDF". Les ranger dans un dossier local `~/ai-strategy-pdfs/`. Les mêmes PDFs sont réutilisés sur plusieurs épisodes (Module 1 sert aux ép. 1+8, Glossaire sert à 6 épisodes, etc.).

2. **Générer dans l'ordre 1 → 10**. L'ordre est conçu pour une progression cohérente. L'épisode 7 (capstone) et l'épisode 10 (pièges) sont les plus denses — prévoir une session dédiée.

3. **Pour chaque épisode** :
   - Créer un nouveau notebook (ne pas réutiliser un notebook existant — chaque épisode a son contexte)
   - Charger les sources du §1 dans l'ordre indiqué
   - Coller le prompt §3 dans Custom instructions
   - Générer (5-15 min) → écouter → valider avec grille §4
   - Si 3+ critères KO, appliquer le Plan B §6 et régénérer

4. **Publication groupée** : on peut publier les épisodes au fur et à mesure ou tout publier d'un coup. La publication suit le §5 de chaque fichier.

---

## Pourquoi 5 200 caractères max ?

Cette contrainte vise à garantir :
- **Lisibilité** : un prompt qui tient sur 1-2 écrans, pas 10
- **Concentration** : pas de remplissage, chaque ligne sert une décision
- **Compatibilité NotebookLM** : le champ "Custom instructions" tronque les prompts trop longs
- **Maintenance** : un fichier court est plus facile à mettre à jour quand le contenu du site évolue

---

## Liens connexes

- **Workflow technique général** : [`docs/podcasts/production-workflow.md`](../production-workflow.md)
- **Briefs éditoriaux complets** (longue version, références croisées) : [`docs/podcasts/briefs/`](../briefs/)
- **Données de la série** (codée) : [`src/content/podcasts.ts`](../../../src/content/podcasts.ts)
- **Page de transparence publique** : `/fr/podcasts/production/`

---

*Dossier créé en post-Phase 7. Il complète les briefs éditoriaux (volumineux) par des prompts opérationnels condensés. Les briefs restent la référence pour comprendre le pourquoi ; ces prompts sont l'outil pour faire.*
