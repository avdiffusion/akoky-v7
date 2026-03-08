import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  isBlogAdminAuthenticated,
  getArticleById,
  saveArticle,
  generateId,
} from "@/lib/blog-store";
import {
  BLOG_CATEGORIES,
  BLOG_LANGS,
  LANG_LABELS,
  CATEGORY_ICONS,
  type BlogArticle,
  type BlogCategory,
  type BlogLang,
  type BlogTranslation,
} from "@/lib/blog-types";
import RichTextEditor from "@/components/blog/RichTextEditor";
import ImageUploader from "@/components/admin/ImageUploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Save,
  Eye,
  Globe,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { toast } from "sonner";

const emptyTranslation = (): BlogTranslation => ({
  slug: "",
  metaTitle: "",
  metaDescription: "",
  title: "",
  content: "",
  published: false,
});

const BlogEditor = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const isNew = !id || id === "new";

  const [article, setArticle] = useState<BlogArticle>({
    id: generateId(),
    category: "guides",
    image: "",
    translations: { fr: emptyTranslation() },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  const [activeLang, setActiveLang] = useState<BlogLang>("fr");
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    if (!isBlogAdminAuthenticated()) {
      navigate("/admin/blog/login");
      return;
    }
    if (!isNew && id) {
      const existing = getArticleById(id);
      if (existing) {
        setArticle(existing);
      } else {
        toast.error("Article introuvable");
        navigate("/admin/blog");
      }
    }
  }, [id, isNew, navigate]);

  const getTranslation = (lang: BlogLang): BlogTranslation => {
    return article.translations[lang] || emptyTranslation();
  };

  const updateTranslation = (lang: BlogLang, updates: Partial<BlogTranslation>) => {
    setArticle((prev) => ({
      ...prev,
      translations: {
        ...prev.translations,
        [lang]: { ...getTranslation(lang), ...updates },
      },
    }));
  };

  const autoSlug = (title: string): string => {
    return title
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
      .slice(0, 80);
  };

  const handleTitleChange = (lang: BlogLang, title: string) => {
    const t = getTranslation(lang);
    const updates: Partial<BlogTranslation> = { title };
    // Auto-generate slug and meta title if empty
    if (!t.slug || t.slug === autoSlug(t.title)) {
      updates.slug = autoSlug(title);
    }
    if (!t.metaTitle || t.metaTitle === t.title) {
      updates.metaTitle = title;
    }
    updateTranslation(lang, updates);
  };

  const handleSave = () => {
    const hasContent = Object.values(article.translations).some(
      (t) => t && t.title && t.content
    );
    if (!hasContent) {
      toast.error("Ajoutez au moins un titre et du contenu");
      return;
    }
    saveArticle(article);
    toast.success(isNew ? "Article créé !" : "Article mis à jour !");
    navigate("/admin/blog");
  };

  const publishAll = () => {
    const updated = { ...article };
    BLOG_LANGS.forEach((l) => {
      if (updated.translations[l]?.title && updated.translations[l]?.content) {
        updated.translations[l]!.published = true;
      }
    });
    setArticle(updated);
    toast.success("Toutes les langues complètes ont été publiées");
  };

  const t = getTranslation(activeLang);
  const publishedCount = BLOG_LANGS.filter((l) => article.translations[l]?.published).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => navigate("/admin/blog")}>
              <ArrowLeft className="h-4 w-4 mr-1" /> Retour
            </Button>
            <h1 className="text-lg font-bold text-foreground font-display">
              {isNew ? "Nouvel article" : "Modifier l'article"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => setPreview(!preview)}>
              <Eye className="h-4 w-4 mr-1" /> {preview ? "Éditer" : "Aperçu"}
            </Button>
            <Button variant="outline" size="sm" onClick={publishAll}>
              <Globe className="h-4 w-4 mr-1" /> Publier tout ({publishedCount}/6)
            </Button>
            <Button onClick={handleSave} className="bg-primary text-primary-foreground font-bold">
              <Save className="h-4 w-4 mr-2" /> Enregistrer
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Category */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-3">
              <label className="text-sm font-medium text-foreground">Catégorie</label>
              <select
                value={article.category}
                onChange={(e) =>
                  setArticle((prev) => ({ ...prev, category: e.target.value as BlogCategory }))
                }
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
              >
                {BLOG_CATEGORIES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {CATEGORY_ICONS[c.value]} {c.label.fr}
                  </option>
                ))}
              </select>
            </div>

            {/* Image */}
            <ImageUploader
              value={article.image}
              onChange={(dataUrl) => setArticle((prev) => ({ ...prev, image: dataUrl }))}
              label="Image de couverture"
            />

            {/* Languages Status */}
            <div className="bg-card border border-border rounded-xl p-4 space-y-3">
              <label className="text-sm font-medium text-foreground">Langues</label>
              <div className="space-y-2">
                {BLOG_LANGS.map((l) => {
                  const tr = article.translations[l];
                  const hasContent = tr?.title && tr?.content;
                  return (
                    <div
                      key={l}
                      className="flex items-center justify-between text-sm cursor-pointer hover:bg-muted/50 rounded-lg px-2 py-1.5"
                      onClick={() => setActiveLang(l)}
                    >
                      <span className={activeLang === l ? "text-primary font-medium" : "text-muted-foreground"}>
                        {LANG_LABELS[l]}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {hasContent && (
                          <Badge variant="secondary" className="text-[10px]">✓</Badge>
                        )}
                        {tr?.published ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <XCircle className="h-4 w-4 text-muted-foreground/30" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Main Editor */}
          <div className="lg:col-span-3">
            <Tabs value={activeLang} onValueChange={(v) => setActiveLang(v as BlogLang)}>
              <TabsList className="mb-6">
                {BLOG_LANGS.map((l) => (
                  <TabsTrigger key={l} value={l} className="text-xs">
                    {l.toUpperCase()}
                    {article.translations[l]?.published && (
                      <span className="ml-1 w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {BLOG_LANGS.map((lang) => (
                <TabsContent key={lang} value={lang} className="space-y-6">
                  {preview ? (
                    /* Preview Mode */
                    <div className="bg-card border border-border rounded-2xl p-8">
                      <Badge className="mb-4">
                        {CATEGORY_ICONS[article.category]}{" "}
                        {BLOG_CATEGORIES.find((c) => c.value === article.category)?.label[lang]}
                      </Badge>
                      <h1 className="text-3xl font-bold text-foreground mb-4 font-display">
                        {getTranslation(lang).title || "Titre…"}
                      </h1>
                      {article.image && (
                        <img
                          src={article.image}
                          alt=""
                          className="w-full rounded-xl object-cover aspect-video mb-6"
                        />
                      )}
                      <div
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{
                          __html: getTranslation(lang).content || "<p>Contenu…</p>",
                        }}
                      />
                    </div>
                  ) : (
                    /* Edit Mode */
                    <>
                      {/* Title */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">
                          Titre ({LANG_LABELS[lang]})
                        </label>
                        <Input
                          value={getTranslation(lang).title}
                          onChange={(e) => handleTitleChange(lang, e.target.value)}
                          placeholder={`Titre de l'article en ${LANG_LABELS[lang]}`}
                          className="text-lg font-semibold"
                        />
                      </div>

                      {/* SEO Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-card/50 border border-border rounded-xl p-4">
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-muted-foreground">Slug SEO</label>
                          <Input
                            value={getTranslation(lang).slug}
                            onChange={(e) => updateTranslation(lang, { slug: e.target.value })}
                            placeholder="mon-article-seo"
                          />
                          <p className="text-[10px] text-muted-foreground/60">
                            URL : /{lang}/blog/{getTranslation(lang).slug || "slug"}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-muted-foreground">Meta Title</label>
                          <Input
                            value={getTranslation(lang).metaTitle}
                            onChange={(e) => updateTranslation(lang, { metaTitle: e.target.value })}
                            placeholder="Titre SEO < 60 caractères"
                          />
                          <p className="text-[10px] text-muted-foreground/60">
                            {getTranslation(lang).metaTitle.length}/60 caractères
                          </p>
                        </div>
                        <div className="md:col-span-2 space-y-2">
                          <label className="text-xs font-medium text-muted-foreground">Meta Description</label>
                          <Textarea
                            value={getTranslation(lang).metaDescription}
                            onChange={(e) => updateTranslation(lang, { metaDescription: e.target.value })}
                            placeholder="Description SEO < 160 caractères"
                            rows={2}
                          />
                          <p className="text-[10px] text-muted-foreground/60">
                            {getTranslation(lang).metaDescription.length}/160 caractères
                          </p>
                        </div>
                      </div>

                      {/* Rich Text Editor */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Contenu</label>
                        <RichTextEditor
                          value={getTranslation(lang).content}
                          onChange={(html) => updateTranslation(lang, { content: html })}
                        />
                      </div>

                      {/* Publish Toggle */}
                      <div className="flex items-center justify-between bg-card/50 border border-border rounded-xl p-4">
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Publication ({LANG_LABELS[lang]})
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {getTranslation(lang).published
                              ? "Cet article est visible publiquement"
                              : "Brouillon — non visible"}
                          </p>
                        </div>
                        <Button
                          variant={getTranslation(lang).published ? "default" : "outline"}
                          size="sm"
                          onClick={() =>
                            updateTranslation(lang, {
                              published: !getTranslation(lang).published,
                            })
                          }
                          className={
                            getTranslation(lang).published
                              ? "bg-green-600 hover:bg-green-700 text-white"
                              : ""
                          }
                        >
                          {getTranslation(lang).published ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-1" /> Publié
                            </>
                          ) : (
                            "Publier"
                          )}
                        </Button>
                      </div>
                    </>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
