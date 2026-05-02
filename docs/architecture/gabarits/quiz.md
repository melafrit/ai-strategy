# Gabarit — Page Quiz

| Métadonnée | Valeur |
| :--- | :--- |
| **Gabarit** | Quiz |
| **URL pattern** | `/{lang}/quiz/` (index) |
| **Version** | 1.0 |
| **Statut** | Ratifié |

---

## 1. Objectif

Donner un **point d'entrée unique** vers tous les quiz du site, afficher la **progression** de l'utilisateur (basée sur `localStorage`, cf. ADR-009), et permettre la **révision** ciblée par module ou par dimension.

## 2. Audience prioritaire

- **Apprenant** (étudiant, manager en autoformation) : vérifier ses connaissances, mesurer sa progression.
- **Enseignant** : récupérer la liste des questions pour un cours.

⚠️ Les quiz formatifs **vivent à l'intérieur des pages module** (cf. gabarit module). Cette page est un **hub de navigation et de progression**, pas la page de prise de quiz elle-même.

## 3. Wireframe textuel

```
┌──────────────────────────────────────────────────────────────────────┐
│ HEADER + BREADCRUMB :  Accueil > Quiz                                │
├──────────────────────────────────────────────────────────────────────┤
│ HÉRO QUIZ                                                            │
│ H1 : Quiz et auto-évaluation                                         │
│ Lead : explication du dispositif (~50 questions, formatif, RGPD)     │
├──────────────────────────────────────────────────────────────────────┤
│ TABLEAU DE PROGRESSION                                               │
│ Visuel <ProgressDashboard /> :                                       │
│   - badges débloqués                                                 │
│   - score moyen                                                      │
│   - modules complétés                                                │
│   - bouton "Réinitialiser ma progression"                            │
├──────────────────────────────────────────────────────────────────────┤
│ QUIZ DIAGNOSTIC INITIAL (capstone preview)                           │
│ « Êtes-vous prêt pour la roadmap finale ? »                          │
│ → Bouton démarrer (10 questions transversales)                       │
├──────────────────────────────────────────────────────────────────────┤
│ GRILLE DES QUIZ PAR MODULE                                           │
│ 6 cartes <QuizCard /> :                                              │
│   - module · titre · 7 questions · niveau                            │
│   - statut : non commencé · en cours · complété                      │
│   - score si complété                                                │
│   - bouton commencer / continuer / refaire                           │
├──────────────────────────────────────────────────────────────────────┤
│ QUIZ TÉLÉCHARGEABLES                                                 │
│ Liens vers les fiches PDF "quiz imprimables" (Phase 5)               │
├──────────────────────────────────────────────────────────────────────┤
│ MENTION LÉGALE LOCALE                                                │
│ Stockage en local · pas de tracking serveur · effacable à tout moment│
└──────────────────────────────────────────────────────────────────────┘
```

## 4. Sections obligatoires

### 4.1 Hero quiz
- **H1** : « Quiz et auto-évaluation ».
- **Lead** : ~50 questions au total + 1 quiz capstone diagnostic, scoring local, sans inscription, RGPD-safe.

### 4.2 Tableau de progression
Composant `<ProgressDashboard />` lisant `localStorage` :
- Pourcentage global de complétion.
- Score moyen (cumul des bonnes réponses sur l'ensemble).
- Badges débloqués (1 par module + 1 « capstone-ready »).
- Modules complétés à 100 %.
- Bouton « Réinitialiser ma progression » avec confirmation.

⚠️ Si `localStorage` est vide ou désactivé : afficher un message neutre invitant à commencer + une note explicative sur la persistance locale.

### 4.3 Quiz diagnostic capstone
Encart distinctif :
- Titre : « Êtes-vous prêt pour la roadmap finale ? ».
- 10 questions transversales couvrant les 6 modules.
- Affiche un score + un diagnostic (« Vous maîtrisez X — révisez Y »).
- Lien vers la page Capstone.

### 4.4 Grille des 6 quiz module
6 cartes `<QuizCard />`, chacune avec :
- Numéro et titre du module.
- Nombre de questions (7 par défaut).
- Niveau cible (taxonomie).
- Statut : non commencé / en cours / complété (lecture `localStorage`).
- Score si complété.
- CTA dynamique : « Commencer » / « Continuer » / « Refaire ».

### 4.5 Quiz téléchargeables
Lien vers les fiches PDF de quiz imprimables (produites en Phase 5). Format : 1 PDF quiz par module, avec corrigés en deuxième partie.

### 4.6 Mention légale locale
Encart `<PrivacyNotice />` rappelant :
- Toutes les données restent dans le navigateur (localStorage).
- Aucun envoi serveur.
- Effacement disponible à tout moment.
- Cookies non utilisés pour le scoring.

## 5. Composants utilisés

| Composant | Usage |
| :--- | :--- |
| `<HeroSecondary />` | Hero quiz |
| `<ProgressDashboard />` | Tableau de progression |
| `<DiagnosticBanner />` | Encart capstone preview |
| `<QuizCard />` | Carte de quiz module |
| `<DownloadableQuizList />` | Lien fiches imprimables |
| `<PrivacyNotice />` | Encart RGPD |
| `<ResetProgressDialog />` | Modale de confirmation reset |

## 6. Microcopies clés (FR / EN / AR)

| Élément | FR | EN | AR |
| :--- | :--- | :--- | :--- |
| H1 | « Quiz et auto-évaluation » | "Quizzes & self-assessment" | « اختبارات وتقييم ذاتي » |
| Bouton commencer | « Commencer » | "Start" | « ابدأ » |
| Bouton continuer | « Continuer » | "Continue" | « تابع » |
| Bouton refaire | « Refaire le quiz » | "Retake quiz" | « أعد الاختبار » |
| Bouton réinitialiser | « Réinitialiser ma progression » | "Reset my progress" | « إعادة تعيين تقدّمي » |
| Statut non commencé | « Non commencé » | "Not started" | « لم يبدأ » |
| Statut en cours | « En cours » | "In progress" | « قيد التقدّم » |
| Statut complété | « Complété — score : N % » | "Completed — score: N%" | « مكتمل — النتيجة: N٪ » |
| Privacy notice | « Vos réponses sont stockées dans votre navigateur. Aucun envoi serveur. » | "Your answers are stored in your browser. No server upload." | « يتم تخزين إجاباتك في متصفحك. لا يتم الإرسال إلى أي خادم. » |

## 7. Données nécessaires

```typescript
interface QuizIndexPage {
  lang: 'fr' | 'en' | 'ar';
  diagnosticQuiz: QuizMetadata;
  moduleQuizzes: QuizMetadata[]; // 6 entrées
  downloadableQuizzes: DownloadableQuiz[]; // 6 PDFs
}

interface QuizMetadata {
  slug: string;
  moduleNumber?: number;
  title: string;
  questionsCount: number;
  level: 'level-discovery' | 'level-applicable' | 'level-advanced';
  estimatedMinutes: number;
}
```

## 8. SEO

| Balise | Valeur (FR) |
| :--- | :--- |
| `<title>` | « Quiz et auto-évaluation · AI Strategy » |
| `<meta description>` | « ~50 questions sur l'IA, le machine learning, l'IA générative, la robotique et la gouvernance. Sans inscription. RGPD. » |
| Schema.org | `Quiz` (un par module) + `WebPage` |

## 9. Accessibilité

- Tableau de progression annoncé via `aria-live="polite"` lors d'un changement.
- Boutons « Commencer / Continuer / Refaire » à libellés explicites (pas de duplication ambiguë).
- Modale de reset : focus trap, escape close, message d'avertissement.
- Quiz scoring : disponible en lecture d'écran (« Score actuel : 5 sur 7 »).

## 10. Points de vigilance

| Piège | Mitigation |
| :--- | :--- |
| Utilisateur perd sa progression en changeant de navigateur | Mention claire dans la `<PrivacyNotice />` |
| Mode privé du navigateur qui désactive localStorage | Détection + dégradation gracieuse (« Mode sans persistance ») |
| Reset accidentel de la progression | Modale de confirmation obligatoire |
| Score « parfait » qui ne reflète pas l'apprentissage | Encourager la révision via les feedbacks personnalisés (« vous maîtrisez X mais Y reste à approfondir ») |

---

## 📎 Documents associés

- [Gabarit Module](./module.md) (où vivent les quiz formatifs réels)
- [Gabarit Capstone](./capstone.md)
- [ADR-009](../../cadrage/decisions-log.md#adr-009--quiz-interactifs-avec-persistance-locale)
