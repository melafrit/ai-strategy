# public/podcasts/ — fichiers audio et transcripts

Ce dossier contient les fichiers livrés des épisodes de la série podcast AI Strategy. Il est versionné via Git LFS (à activer si les MP3 dépassent 100 MB cumulés).

## Format attendu par épisode

Pour chaque épisode publié, deux fichiers sont déposés ici :

- `{slug}.mp3` — fichier audio MP3 généré par Google NotebookLM puis téléchargé
- `{slug}-transcript.md` — transcript Markdown structuré (généré via Whisper local)

Le `{slug}` correspond exactement au champ `slug` de l'épisode dans `src/content/podcasts.ts`. Par exemple :

```
public/podcasts/
├── ep-01-pourquoi-ia-pour-dirigeants.mp3
├── ep-01-pourquoi-ia-pour-dirigeants-transcript.md
├── ep-02-machine-learning-au-quotidien.mp3
├── ep-02-machine-learning-au-quotidien-transcript.md
└── ...
```

## Spécifications techniques

### MP3

- **Format** : MP3 (codec MPEG-1 Audio Layer 3)
- **Bitrate** : 128 kbps suffit (l'audio NotebookLM est de la voix, pas de la musique)
- **Sample rate** : 44.1 kHz ou 48 kHz au choix
- **Mono ou stéréo** : stéréo recommandé (meilleure perception de dialogue à 2 voix)
- **Taille typique** : 12-18 MB pour 12-18 minutes
- **Métadonnées ID3** : optionnelles. Si renseignées, recommandé :
  - `TIT2` (Title) : « Épisode {NN} — {titre court} »
  - `TPE1` (Artist) : « AI Strategy »
  - `TALB` (Album) : « AI Strategy — Série narrative »
  - `TYER` (Year) : année de publication

NotebookLM produit nativement du MP3. Téléchargez le fichier via le bouton de téléchargement de l'Audio Overview, déposez-le ici directement.

### Transcript

- **Format** : Markdown (.md)
- **Encodage** : UTF-8
- **Structure** : utiliser le template `docs/podcasts/transcript-template.md`

## Procédure de publication

Voir `docs/podcasts/production-workflow.md` §5 pour la procédure complète de publication d'un épisode. En résumé :

1. Déposer les deux fichiers ici (MP3 + transcript)
2. Mettre à jour `src/content/podcasts.ts` :
   - `status: 'planned'` → `status: 'published'`
   - Ajouter `audioFile: '/podcasts/{slug}.mp3'`
   - Ajouter `transcriptFile: '/podcasts/{slug}-transcript.md'`
   - Ajuster `chapters[].time` aux timestamps réels du MP3 si différents
3. Lancer un build local et vérifier que le lecteur audio s'affiche
4. Commit avec message structuré : `feat(podcasts): publish episode {NN} — {short title}`

## Git LFS

Si la taille cumulée des MP3 dépasse 100 MB, activer Git LFS :

```bash
git lfs install
git lfs track "public/podcasts/*.mp3"
git add .gitattributes
git commit -m "chore(podcasts): track MP3s with Git LFS"
```

À l'échelle de la série complète (10 épisodes × ~15 MB) on est autour de **150 MB**, donc Git LFS deviendra utile dès le 6e ou 7e épisode publié.

Alternative : héberger les MP3 sur un CDN externe (Cloudinary, Bunny, S3) et utiliser des URLs absolues dans `audioFile`. À envisager si la taille devient un problème ou si vous voulez des statistiques d'écoute.
