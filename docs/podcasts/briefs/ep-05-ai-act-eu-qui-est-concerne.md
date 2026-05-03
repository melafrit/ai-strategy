# Brief de production — Épisode 05

## AI Act EU — qui est concerné, comment se préparer

> *Le règlement européen sur l'IA s'applique. Cet épisode décrypte qui doit faire quoi, et quand.*

| Méta | Valeur |
|---|---|
| Numéro | 05 |
| Thème | governance |
| Durée cible | 14-17 min |
| Statut | `planned` |
| Slug | `ep-05-ai-act-eu-qui-est-concerne` |

**Public visé** : Juristes, DPO, responsables conformité, dirigeants qui doivent comprendre concrètement leurs obligations sous l'AI Act.

---

## 1. Synopsis éditorial

L'AI Act EU (Règlement 2024/1689) est entré en application progressivement depuis février 2025. Cet épisode démystifie son architecture pour qui n'est pas juriste : quatre catégories de risque (interdit, haut, limité, minimal), trois rôles principaux (fournisseur, déployeur, importateur/distributeur), et un calendrier d'application qui s'étend jusqu'en août 2027.

Les animateurs s'appuient sur le cas pédagogique « AI Act EU haut risque » du parcours pour montrer concrètement quels usages business courants tombent en haut risque : recrutement et tri de CV, scoring de crédit, justice, services publics essentiels, infrastructures critiques, certains dispositifs médicaux. Pour ces usages, les obligations sont substantielles : système de gestion des risques, gouvernance des données, documentation technique, transparence, supervision humaine, exactitude/robustesse/cybersécurité, évaluation de conformité, registre.

L'épisode explique comment l'AI Act s'applique extraterritorialement (à l'image du RGPD) et donne 5 actions concrètes à engager dans les 6 prochains mois pour ne pas se retrouver en non-conformité.

---

## 2. À retenir (5-7 takeaways)

1. L'AI Act EU s'applique à tout système IA opéré dans l'UE, indépendamment du siège du fournisseur
2. 4 catégories : interdit / haut risque / risque limité / risque minimal — la classification est l'étape critique
3. De nombreux usages business « ordinaires » tombent en haut risque (RH, crédit, services publics)
4. Sanctions jusqu'à 35 M€ ou 7 % du CA mondial — comparable au RGPD
5. Calendrier progressif jusqu'en août 2027 — pas de luxe d'attendre
6. 5 actions à engager maintenant : inventaire, classification, documentation, gouvernance, formation

---

## 3. Chapitres prévisionnels

| Time (mm:ss) | Chapitre |
|---:|---|
| ~0:00 | Introduction — pourquoi l'AI Act maintenant |
| ~1:40 | Les 4 catégories de risque |
| ~5:00 | Les 3 rôles : fournisseur, déployeur, importateur |
| ~8:00 | Les usages business courants en haut risque |
| ~12:00 | Calendrier d'application et sanctions |
| ~14:30 | 5 actions concrètes pour les 6 prochains mois |

> *Ces timestamps sont prévisionnels. Ils seront ajustés après génération réelle pour correspondre aux durées effectives du MP3 NotebookLM.*

---

## 4. Sources principales pour NotebookLM

Charger ces sources dans le notebook (PDFs imprimés depuis le print stylesheet du site, voir `docs/podcasts/production-workflow.md` §2.1) :

1. **Module 5 — IA dans l'entreprise et la société**  
   Source : `/fr/modules/05-ia-societe/`

2. **Cas AI Act EU — système haut risque**  
   Source : `/fr/cas/ai-act-eu-haut-risque/`

3. **FAQ — Suis-je concerné par l'AI Act EU ?**  
   Source : `/fr/faq/`

4. **Glossaire — AI Act, gouvernance IA**  
   Source : `/fr/glossaire/`

---

## 5. Sources complémentaires recommandées

Sources externes vérifiables à ajouter en complément (limite stricte 8 sources totales) :

1. **EUR-Lex — Règlement (UE) 2024/1689 texte intégral FR**  
   URL : `eur-lex.europa.eu/legal-content/FR/TXT/PDF/?uri=OJ%3AL_202401689`  
   Usage : *référence légale primaire (à charger en partiel — articles 5, 6, 9, 10, 14)*

2. **Commission EU — page AI Act**  
   URL : `digital-strategy.ec.europa.eu/fr/policies/regulatory-framework-ai`  
   Usage : *calendrier d'application*

---

## 6. Notes de focus pour la génération

> Ton pédagogique mais précis. Citer les articles clés (10 sur la gouvernance des données, 14 sur la supervision humaine). Éviter le légalisme excessif, viser le décideur opérationnel.

**Instructions à coller dans le champ « Custom instructions » de NotebookLM** (template universel adapté à cet épisode) :

```
LANGUE : Français professionnel, accessible, sans anglicismes inutiles.

PUBLIC : Juristes, DPO, responsables conformité, dirigeants qui doivent comprendre concrètement leurs obligations sous l'AI Act.

DURÉE CIBLE : 14-17 min.

STRUCTURE NARRATIVE :
1. Introduction — pourquoi l'AI Act maintenant
2. Les 4 catégories de risque
3. Les 3 rôles : fournisseur, déployeur, importateur
4. Les usages business courants en haut risque
5. Calendrier d'application et sanctions
6. 5 actions concrètes pour les 6 prochains mois

À RETENIR (l'épisode doit faire ressortir ces points) :
- L'AI Act EU s'applique à tout système IA opéré dans l'UE, indépendamment du siège du fournisseur
- 4 catégories : interdit / haut risque / risque limité / risque minimal — la classification est l'étape critique
- De nombreux usages business « ordinaires » tombent en haut risque (RH, crédit, services publics)
- Sanctions jusqu'à 35 M€ ou 7 % du CA mondial — comparable au RGPD
- Calendrier progressif jusqu'en août 2027 — pas de luxe d'attendre
- 5 actions à engager maintenant : inventaire, classification, documentation, gouvernance, formation

INSTRUCTIONS SPÉCIFIQUES :
Ton pédagogique mais précis. Citer les articles clés (10 sur la gouvernance des données, 14 sur la supervision humaine). Éviter le légalisme excessif, viser le décideur opérationnel.

CONTRAINTES :
- Citer chaque source par son nom complet la première fois
- Ne pas inventer de chiffres précis — privilégier les ordres de grandeur
- Ne pas inventer d'études ou de chercheurs
- Si une affirmation n'est pas dans les sources, ne pas la formuler
```

---

## 7. Points de vigilance à la génération

- ÉPISODE LE PLUS SENSIBLE JURIDIQUEMENT. Toute affirmation sur les obligations doit être vérifiable dans le texte du règlement. Si NotebookLM invente une obligation, régénérer.
- Les sanctions (35 M€ ou 7% CA mondial) sont les plafonds maximaux pour les pratiques interdites. Les sanctions pour haut risque sont moindres (15 M€ ou 3%). NotebookLM peut confondre — vérifier.
- Le calendrier d'application (février 2025 pour les interdits, août 2027 pour le haut risque) est précis. À ne pas paraphraser avec « bientôt » ou « rapidement ».
- Ne pas faire de conseil juridique. L'épisode informe sur l'existence du règlement et ses grandes lignes, il ne se substitue pas à un avocat. Le mentionner explicitement à la fin.

---

## 8. Plan B en cas de résultat insatisfaisant

> Si le résultat est trop technique-juridique, simplifier en ne traitant que la classification des cas d'usage en haut risque (la décision la plus opérationnelle pour un dirigeant).

---

## 9. Références croisées du parcours

**Modules associés** : M5


**Études de cas** : ai-act-eu-haut-risque


**Termes du glossaire** : ai-act, gouvernance-ia, accountability

---

## 10. Checklist de publication

- [ ] Sources principales chargées dans NotebookLM
- [ ] Sources complémentaires chargées si applicable
- [ ] Custom instructions copiées et adaptées
- [ ] Audio Overview généré (5-15 min)
- [ ] 8 critères de qualité validés (voir workflow §4.1)
- [ ] Régénération si nécessaire
- [ ] MP3 sauvegardé en local
- [ ] Transcript Whisper généré
- [ ] MP3 copié dans `public/podcasts/ep-05-ai-act-eu-qui-est-concerne.mp3`
- [ ] Transcript copié dans `public/podcasts/ep-05-ai-act-eu-qui-est-concerne-transcript.md`
- [ ] `src/content/podcasts.ts` mis à jour : `status: 'published'`, `audioFile`, `transcriptFile`
- [ ] Chapters ajustés aux timestamps réels si différents
- [ ] Build local OK
- [ ] Commit avec message structuré

---

*Brief généré automatiquement à partir de `src/content/podcasts.ts` — Phase 6 sub-tour 2.*
*Voir aussi le workflow général : `docs/podcasts/production-workflow.md`.*
