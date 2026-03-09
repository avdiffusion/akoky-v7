# 🚀 Système d'Import WordPress Automatisé

## Vue d'ensemble

Ce système permet d'importer automatiquement tous les articles du blog WordPress d'AKOKY vers le système de blog interne. Il a été conçu pour fonctionner en arrière-plan, avec gestion de la progression, détection des doublons et gestion des erreurs.

## 📁 Architecture

### Fichiers créés

1. **`src/lib/blog-importer.ts`** - Moteur d'import
   - Extraction des URLs depuis le sitemap XML
   - Gestion de la queue d'import
   - Détection de doublons
   - Scraping des articles
   - Conversion au format interne

2. **`src/pages/admin/BlogImporter.tsx`** - Interface admin
   - Visualisation de la progression
   - Contrôles pause/reprise/reset
   - Affichage des stats en temps réel
   - Liste des erreurs

3. **`public/data/blog-sitemap.xml`** - Sitemap WordPress
   - Contient toutes les URLs des articles FR
   - Parsé automatiquement au démarrage

## 🎯 Fonctionnalités

### ✅ Implémenté

- ✅ Extraction automatique des URLs depuis le sitemap XML
- ✅ Filtrage des URLs (uniquement `/fr/blog/`, sans pagination, sans doublons)
- ✅ Détection des slugs existants pour éviter les doublons
- ✅ Système de queue avec persistance localStorage
- ✅ Tracking de progression en temps réel
- ✅ Pause/Reprise de l'import
- ✅ Reset complet de l'import
- ✅ Détection automatique de catégorie depuis l'URL et le contenu
- ✅ Nettoyage du HTML WordPress
- ✅ Génération automatique des meta tags SEO
- ✅ Interface admin complète avec stats

### 🔄 À finaliser

- 🔄 **Scraping réel des articles WordPress** (actuellement placeholder)
- 🔄 Téléchargement des images et stockage local
- 🔄 Extraction des métadonnées WordPress (date, auteur, etc.)
- 🔄 Gestion avancée des catégories WordPress

## 🚀 Utilisation

### Accès

1. Connectez-vous à l'admin : `/admin/blog/login`
2. Allez sur la liste des articles : `/admin/blog`
3. Cliquez sur **"Importer WP"** dans le header
4. Vous êtes redirigé vers : `/admin/blog/import`

### Processus

1. **Démarrage** : Cliquez sur "Démarrer l'import"
   - Le système extrait toutes les URLs du sitemap
   - Filtre les articles FR uniquement
   - Ignore les URLs déjà traitées

2. **En cours** : L'import traite les URLs une par une
   - Progression affichée en temps réel
   - Stats mises à jour en direct
   - Possibilité de mettre en pause à tout moment

3. **Pause/Reprise** : Utilisez les boutons de contrôle
   - La progression est sauvegardée dans localStorage
   - Vous pouvez fermer l'onglet et reprendre plus tard

4. **Terminé** : Une fois tous les articles traités
   - Récapitulatif complet des stats
   - Liste des erreurs éventuelles
   - Possibilité de reset pour un nouvel import

## 🔧 Prochaines étapes (pour vous, développeur)

### 1️⃣ Implémenter le scraping réel

Dans `src/lib/blog-importer.ts`, remplacer la fonction `scrapeWordPressArticle`:

```typescript
async function scrapeWordPressArticle(url: string): Promise<ScrapedContent | null> {
  try {
    // TODO: Utiliser lov-fetch-website ou une API WordPress REST
    const response = await fetch(url);
    const html = await response.text();
    
    // Parser le HTML pour extraire :
    // - Titre : <h1 class="entry-title">
    // - Contenu : <div class="entry-content">
    // - Image : <meta property="og:image">
    // - Date : <time class="entry-date">
    
    return {
      title: extractedTitle,
      content: extractedContent,
      excerpt: extractedExcerpt,
      imageUrl: extractedImageUrl,
      publishedDate: extractedDate,
    };
  } catch (error) {
    console.error("Scraping error:", error);
    return null;
  }
}
```

### 2️⃣ Améliorer la détection de catégorie

Affinez la fonction `detectCategory()` pour mieux classifier les articles selon leur contenu WordPress réel.

### 3️⃣ Ajouter le téléchargement d'images

```typescript
async function downloadImage(url: string): Promise<string> {
  // Télécharger l'image depuis WordPress
  // Sauvegarder dans /public/images/blog/
  // Retourner le chemin local
}
```

### 4️⃣ Tester avec quelques articles

Commencez par importer 5-10 articles pour valider le système avant de lancer l'import complet de ~200 articles.

## 📊 Données stockées

### localStorage

- `akoky_blog_import_job` : État actuel de l'import
- `akoky_blog_import_queue` : URLs restantes à traiter
- `akoky_blog_import_processed` : URLs déjà traitées (évite doublons)
- `akoky_blog_articles` : Articles importés (via blog-store)

### Reset

Pour recommencer depuis zéro :
1. Cliquez sur "Reset" dans l'interface
2. Ou supprimez manuellement les clés localStorage

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
4. **Exportez le JSON** après l'import réussi (backup)

## 🔗 Routes ajoutées

- `/admin/blog/import` - Interface d'import WordPress

## 📝 Notes techniques

- Délai de 1 seconde entre chaque article pour éviter de surcharger le serveur
- Détection automatique des slugs existants (évite écrasements)
- Nettoyage du HTML WordPress (suppression classes, inline styles, etc.)
- Génération auto des meta title (max 60 chars) et meta description (max 160 chars)
- Support multi-langue prêt (actuellement FR uniquement)

---

**Créé le** : 2026-03-09
**Status** : ✅ Infrastructure complète, 🔄 Scraping à finaliser
