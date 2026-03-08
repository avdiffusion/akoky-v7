import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  isConcoursAdminAuthenticated,
  getAllConcours,
  deleteConcours,
  exportConcoursJSON,
  importConcoursJSON,
} from "@/lib/concours-store";
import { blogAdminLogout } from "@/lib/blog-store";
import {
  CONCOURS_LANGS,
  LANG_LABELS,
  STATUS_ICONS,
  getConcoursStatus,
  type ConcoursArticle,
  type ConcoursStatus,
} from "@/lib/concours-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Plus, LogOut, Trash2, Edit, Download, Upload, Search, Eye, Trophy, Globe, Calendar,
} from "lucide-react";
import { toast } from "sonner";

const ConcoursAdmin = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<ConcoursArticle[]>([]);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<ConcoursStatus | "">("");

  useEffect(() => {
    if (!isConcoursAdminAuthenticated()) {
      navigate("/admin/concours/login");
      return;
    }
    setArticles(getAllConcours());
  }, [navigate]);

  const refresh = () => setArticles(getAllConcours());

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Supprimer le concours "${title}" ?`)) {
      deleteConcours(id);
      refresh();
      toast.success("Concours supprimé");
    }
  };

  const handleExport = () => {
    const json = exportConcoursJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `akoky-concours-export-${new Date().toISOString().slice(0, 10)}.json`;
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
          const count = importConcoursJSON(ev.target?.result as string);
          refresh();
          toast.success(`${count} concours importés`);
        } catch {
          toast.error("Fichier JSON invalide");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const filtered = articles
    .filter((a) => !filterStatus || getConcoursStatus(a) === filterStatus)
    .filter((a) => {
      if (!search) return true;
      const s = search.toLowerCase();
      return Object.values(a.translations).some(
        (t) => t?.title.toLowerCase().includes(s) || t?.slug.toLowerCase().includes(s)
      );
    });

  const langCount = (a: ConcoursArticle) =>
    CONCOURS_LANGS.filter((l) => a.translations[l]?.published).length;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
        <div className="container max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6 text-primary" />
            <h1 className="text-lg font-bold text-foreground font-display">Concours Admin</h1>
            <Badge variant="secondary" className="text-xs">{articles.length} concours</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleExport}>
              <Download className="h-4 w-4 mr-1" /> Export
            </Button>
            <Button variant="outline" size="sm" onClick={handleImport}>
              <Upload className="h-4 w-4 mr-1" /> Import
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { blogAdminLogout(); navigate("/admin/concours/login"); }}>
              <LogOut className="h-4 w-4 mr-1" /> Déconnexion
            </Button>
          </div>
        </div>
      </header>

      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-9 w-64" />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as ConcoursStatus | "")}
              className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            >
              <option value="">Tous les statuts</option>
              <option value="active">🔥 En cours</option>
              <option value="upcoming">⏳ À venir</option>
              <option value="past">✅ Terminé</option>
            </select>
          </div>
          <Button onClick={() => navigate("/admin/concours/new")} className="bg-primary text-primary-foreground font-bold">
            <Plus className="h-4 w-4 mr-2" /> Nouveau concours
          </Button>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-card/50 rounded-2xl border border-border">
            <Trophy className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">Aucun concours</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((article) => {
              const frTitle = article.translations.fr?.title || article.translations.es?.title || "Sans titre";
              const status = getConcoursStatus(article);
              return (
                <div key={article.id} className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/30 transition-colors">
                  {article.image && (
                    <img src={article.image} alt="" className="w-16 h-16 rounded-lg object-cover shrink-0 bg-muted" />
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm">{STATUS_ICONS[status]}</span>
                      <h3 className="font-semibold text-foreground truncate">{frTitle}</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.startDate).toLocaleDateString("fr-FR")} → {new Date(article.endDate).toLocaleDateString("fr-FR")}
                      </span>
                      <div className="flex items-center gap-1">
                        <Globe className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{langCount(article)}/6</span>
                      </div>
                      {CONCOURS_LANGS.map((l) =>
                        article.translations[l]?.published ? (
                          <Badge key={l} variant="secondary" className="text-[10px] px-1.5 py-0">{l.toUpperCase()}</Badge>
                        ) : null
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    {article.translations.fr?.published && (
                      <Link to={`/fr/concours/${article.translations.fr.slug}`}>
                        <Button variant="ghost" size="sm" title="Voir"><Eye className="h-4 w-4" /></Button>
                      </Link>
                    )}
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/admin/concours/edit/${article.id}`)} title="Modifier">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(article.id, frTitle)} title="Supprimer" className="text-destructive hover:text-destructive">
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

export default ConcoursAdmin;
