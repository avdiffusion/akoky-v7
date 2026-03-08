import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  isBlogAdminAuthenticated,
  blogAdminLogout,
  getAllArticles,
  deleteArticle,
  exportArticlesJSON,
  importArticlesJSON,
} from "@/lib/blog-store";
import {
  BLOG_CATEGORIES,
  BLOG_LANGS,
  LANG_LABELS,
  CATEGORY_ICONS,
  type BlogArticle,
  type BlogCategory,
} from "@/lib/blog-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  LogOut,
  Trash2,
  Edit,
  Download,
  Upload,
  Search,
  Eye,
  FileText,
  Globe,
} from "lucide-react";
import { toast } from "sonner";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [search, setSearch] = useState("");
  const [filterCat, setFilterCat] = useState<BlogCategory | "">("");
  const [filterLang, setFilterLang] = useState<string>("");

  useEffect(() => {
    if (!isBlogAdminAuthenticated()) {
      navigate("/admin/blog/login");
      return;
    }
    setArticles(getAllArticles());
  }, [navigate]);

  const refresh = () => setArticles(getAllArticles());

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Supprimer l'article "${title}" ?`)) {
      deleteArticle(id);
      refresh();
      toast.success("Article supprimé");
    }
  };

  const handleExport = () => {
    const json = exportArticlesJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `akoky-blog-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success("Export JSON téléchargé");
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const count = importArticlesJSON(ev.target?.result as string);
          refresh();
          toast.success(`${count} articles importés`);
        } catch {
          toast.error("Fichier JSON invalide");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // Get the best title for an article based on language filter or first available
  const getArticleTitle = (a: BlogArticle): string => {
    if (filterLang && a.translations[filterLang as keyof typeof a.translations]?.title) {
      return a.translations[filterLang as keyof typeof a.translations]!.title;
    }
    // Try each lang in order
    for (const l of BLOG_LANGS) {
      if (a.translations[l]?.title) return a.translations[l]!.title;
    }
    return "Sans titre";
  };

  // Get first published lang for "View" button
  const getViewLang = (a: BlogArticle): string | null => {
    if (filterLang && a.translations[filterLang as keyof typeof a.translations]?.published) {
      return filterLang;
    }
    for (const l of BLOG_LANGS) {
      if (a.translations[l]?.published) return l;
    }
    return null;
  };

  // Count articles per language
  const langCounts = BLOG_LANGS.reduce((acc, l) => {
    acc[l] = articles.filter((a) => a.translations[l]?.published).length;
    return acc;
  }, {} as Record<string, number>);

  const filtered = articles
    .filter((a) => !filterCat || a.category === filterCat)
    .filter((a) => !filterLang || a.translations[filterLang as keyof typeof a.translations]?.published)
    .filter((a) => {
      if (!search) return true;
      const s = search.toLowerCase();
      return Object.values(a.translations).some(
        (t) => t?.title.toLowerCase().includes(s) || t?.slug.toLowerCase().includes(s)
      );
    });

  const langCount = (a: BlogArticle) =>
    BLOG_LANGS.filter((l) => a.translations[l]?.published).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground font-display">Blog Admin</h1>
            <Badge variant="secondary" className="text-xs">{articles.length} articles</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport} title="Exporter JSON">
              <Download className="h-4 w-4 mr-1" /> Export
            </Button>
            <Button variant="outline" size="sm" onClick={handleImport} title="Importer JSON">
              <Upload className="h-4 w-4 mr-1" /> Import
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => { blogAdminLogout(); navigate("/admin/blog/login"); }}
            >
              <LogOut className="h-4 w-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Language filter tabs */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <button
            onClick={() => setFilterLang("")}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              !filterLang
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            🌍 Toutes ({articles.length})
          </button>
          {BLOG_LANGS.map((l) => (
            <button
              key={l}
              onClick={() => setFilterLang(filterLang === l ? "" : l)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterLang === l
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {LANG_LABELS[l]} ({langCounts[l] || 0})
            </button>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 w-64"
              />
            </div>
            <select
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value as BlogCategory | "")}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="">Toutes catégories</option>
              {BLOG_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {CATEGORY_ICONS[c.value]} {c.label.fr}
                </option>
              ))}
            </select>
          </div>

          <Button onClick={() => navigate("/admin/blog/new")} className="bg-primary text-primary-foreground font-bold">
            <Plus className="h-4 w-4 mr-2" /> Nouvel article
          </Button>
        </div>

        {/* Articles List */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-card/50 rounded-2xl border border-border">
            <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Aucun article</p>
            <p className="text-muted-foreground/60 text-sm mt-1">
              {filterLang
                ? `Aucun article publié en ${LANG_LABELS[filterLang as keyof typeof LANG_LABELS]}`
                : "Créez votre premier article pour commencer"}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((article) => {
              const displayTitle = getArticleTitle(article);
              const viewLang = getViewLang(article);
              return (
                <div
                  key={article.id}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  {/* Thumbnail */}
                  {article.image && (
                    <img
                      src={article.image}
                      alt=""
                      className="w-16 h-16 rounded-lg object-cover shrink-0 bg-muted"
                    />
                  )}

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{CATEGORY_ICONS[article.category]}</span>
                      <h3 className="font-semibold text-foreground truncate">{displayTitle}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground">
                        {new Date(article.updatedAt).toLocaleDateString("fr-FR")}
                      </span>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {langCount(article)}/6 langues
                        </span>
                      </div>
                      {BLOG_LANGS.map((l) =>
                        article.translations[l]?.published ? (
                          <Badge
                            key={l}
                            variant={filterLang === l ? "default" : "secondary"}
                            className="text-[10px] px-1.5 py-0"
                          >
                            {l.toUpperCase()}
                          </Badge>
                        ) : null
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    {viewLang && article.translations[viewLang as keyof typeof article.translations]?.slug && (
                      <Link to={`/${viewLang}/blog/${article.translations[viewLang as keyof typeof article.translations]!.slug}`}>
                        <Button variant="ghost" size="sm" title={`Voir (${viewLang.toUpperCase()})`}>
                          <Eye className="h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate(`/admin/blog/edit/${article.id}`)}
                      title="Modifier"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(article.id, displayTitle)}
                      title="Supprimer"
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
