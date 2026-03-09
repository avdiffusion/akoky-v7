# 🚀 Système d'Import WordPress Automatisé

## Vue d'ensemble

Ce système permet d'importer automatiquement tous les articles du blog WordPress d'AKOKY vers le système de blog interne. Il a été conçu pour fonctionner en arrière-plan, avec gestion de la progression, détection des doublons et téléchargement automatique des images.

## 📁 Architecture

### Fichiers créés

1. **`src/lib/blog-importer.ts`** - Moteur d'import
   - Extraction des URLs depuis le sitemap XML
   - Gestion de la queue d'import
   - Détection de doublons
   - Scraping des articles
   - Conversion au format interne
   - Intégration avec le système d'images

2. **`src/lib/blog-image-downloader.ts`** - Gestionnaire d'images
   - Extraction des URLs d'images depuis le HTML
   - Génération de noms de fichiers locaux
   - Mapping WordPress → local
   - Export de scripts bash pour téléchargement en batch

3. **`src/pages/admin/BlogImporter.tsx`** - Interface admin
   - Visualisation de la progression
   - Contrôles pause/reprise/reset
   - Affichage des stats en temps réel
   - Liste des images à télécharger
   - Export du script de téléchargement

4. **`public/data/blog-sitemap.xml`** - Sitemap WordPress
   - Contient toutes les URLs des articles FR
   - Parsé automatiquement au démarrage

5. **`public/images/blog/`** - Dossier des images téléchargées
   - Format : `{slug}-{filename}.{ext}`
   - Référencé automatiquement dans les articles

## 🎯 Fonctionnalités

### ✅ Implémenté

- ✅ Extraction automatique des URLs depuis le sitemap XML
- ✅ Filtrage des URLs (uniquement `/blog/`, sans pagination, sans doublons)
- ✅ Détection des slugs existants pour éviter les doublons
- ✅ Système de queue avec persistance localStorage
- ✅ Tracking de progression en temps réel
- ✅ Pause/Reprise de l'import
- ✅ Reset complet de l'import
- ✅ Détection automatique de catégorie depuis l'URL et le contenu
- ✅ Nettoyage du HTML WordPress
- ✅ Génération automatique des meta tags SEO
- ✅ Interface admin complète avec stats
- ✅ **Extraction automatique des images**
- ✅ **Mapping URLs WordPress → chemins locaux**
- ✅ **Génération de script bash pour téléchargement en batch**
- ✅ **Compteur d'images dans les stats**

### 🔄 À finaliser

- 🔄 **Scraping réel des articles WordPress** (actuellement placeholder)

## 🚀 Utilisation

### Accès

1. Connectez-vous à l'admin : `/admin/blog/login`
2. Allez sur la liste des articles : `/admin/blog`
3. Cliquez sur **"Importer WP"** dans le header
4. Vous êtes redirigé vers : `/admin/blog/import`

### Processus complet

1. **Démarrage** : Cliquez sur "Démarrer l'import"
   - Le système extrait toutes les URLs du sitemap
   - Filtre les articles FR uniquement
   - Ignore les URLs déjà traitées

2. **En cours** : L'import traite les URLs une par une
   - Progression affichée en temps réel
   - Stats mises à jour en direct (incluant les images)
   - Possibilité de mettre en pause à tout moment

3. **Images** : Après l'import
   - La section "Images à télécharger" apparaît
   - Cliquez sur "Télécharger Script" pour obtenir le script bash
   - Exécutez le script dans votre terminal :
   
   ```bash
   chmod +x download-blog-images.sh
   ./download-blog-images.sh
   ```

4. **Terminé** : Une fois tous les articles traités
   - Récapitulatif complet des stats
   - Liste des erreurs éventuelles
   - Possibilité de reset pour un nouvel import

## 📷 Système d'images

### Comment ça marche

1. **Extraction** : Le système scanne le HTML de chaque article pour trouver :
   - Tags `<img src="...">`
   - Attributs `srcset`
   - Meta tags `og:image`
   - Backgrounds CSS `url(...)`

2. **Mapping** : Chaque URL WordPress est convertie en chemin local :
   - `https://akoky.com/wp-content/uploads/2024/01/image.jpg`
   - → `/images/blog/{article-slug}-image.jpg`

3. **Remplacement** : Le contenu HTML est mis à jour avec les chemins locaux

4. **Téléchargement** : Un script bash est généré pour télécharger toutes les images

### Format des noms de fichiers

```
{slug}-{original-filename}.{extension}
```

Exemples :
- `cap-d-agde-libertin-plage-naturiste.webp`
- `wyylde-vs-akoky-comparatif.jpg`

### Nettoyage automatique

Le système supprime automatiquement :
- Suffixes de taille WordPress (`-150x150`, `-300x200`, etc.)
- Caractères spéciaux
- Espaces (remplacés par des tirets)

## 📊 Données stockées

### localStorage

- `akoky_blog_import_job` : État actuel de l'import
- `akoky_blog_import_queue` : URLs restantes à traiter
- `akoky_blog_import_processed` : URLs déjà traitées (évite doublons)
- `akoky_blog_articles` : Articles importés (via blog-store)
- `akoky_blog_pending_images` : Images en attente de téléchargement

### Reset

Pour recommencer depuis zéro :
1. Cliquez sur "Reset" dans l'interface
2. Ou supprimez manuellement les clés localStorage

## 🔧 API JavaScript

```typescript
// Import d'articles
import { startImportJob, runImportJob } from "@/lib/blog-importer";
const job = await startImportJob();
await runImportJob((progress) => console.log(progress));

// Gestion des images
import { 
  getNotDownloadedImages, 
  exportDownloadScript,
  processContentImages 
} from "@/lib/blog-image-downloader";

const pending = getNotDownloadedImages();
const script = exportDownloadScript();

// Traitement manuel d'un contenu
const { content, featuredImage, images } = processContentImages(htmlContent, "article-slug");
```

## 🐛 Gestion des erreurs

Le système capture et enregistre toutes les erreurs :
- URL inaccessible
- Contenu non parsable
- Slug dupliqué
- Erreur de sauvegarde

Toutes les erreurs sont affichées dans l'interface avec l'URL concernée et le message d'erreur.

## 💡 Conseils

1. **Testez d'abord avec 10 articles** pour valider le scraping
2. **Lancez l'import complet la nuit** (peut prendre du temps)
3. **Vérifiez les erreurs** après l'import pour corriger manuellement
4. **Téléchargez les images** avant de publier
5. **Exportez le JSON** après l'import réussi (backup)

## 🔗 Routes

- `/admin/blog/import` - Interface d'import WordPress

## 📝 Notes techniques

- Délai de 1 seconde entre chaque article pour éviter de surcharger le serveur
- Détection automatique des slugs existants (évite écrasements)
- Nettoyage du HTML WordPress (suppression classes, inline styles, etc.)
- Génération auto des meta title (max 60 chars) et meta description (max 160 chars)
- Support multi-langue prêt (actuellement FR uniquement)
- Images mappées vers `/images/blog/` pour hébergement local

---

**Créé le** : 2026-03-09
**Mis à jour** : 2026-03-09
**Status** : ✅ Infrastructure complète avec images, 🔄 Scraping réel à finaliser
