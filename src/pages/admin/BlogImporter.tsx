import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isBlogAdminAuthenticated } from "@/lib/blog-store";
import {
  getImportJob,
  startImportJob,
  runImportJob,
  pauseImportJob,
  resumeImportJob,
  resetImportJob,
  extractUrlsFromSitemap,
  type ImportJob,
} from "@/lib/blog-importer";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Loader2,
  FileText,
  Download,
  ArrowLeft,
} from "lucide-react";
import { toast } from "sonner";

const BlogImporter = () => {
  const navigate = useNavigate();
  const [job, setJob] = useState<ImportJob | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [urlCount, setUrlCount] = useState<number | null>(null);

  useEffect(() => {
    if (!isBlogAdminAuthenticated()) {
      navigate("/admin/blog/login");
      return;
    }
    
    // Load current job
    const currentJob = getImportJob();
    setJob(currentJob);
    
    // Count URLs in sitemap
    extractUrlsFromSitemap().then(urls => setUrlCount(urls.length));
  }, [navigate]);

  const handleStart = async () => {
    try {
      toast.info("🚀 Initialisation de l'import...");
      const newJob = await startImportJob();
      setJob(newJob);
      setIsRunning(true);
      
      toast.success(`Import démarré : ${newJob.totalUrls} articles à traiter`);
      
      // Start processing
      await runImportJob((updatedJob) => {
        setJob(updatedJob);
      });
      
      setIsRunning(false);
      toast.success("✅ Import terminé !");
    } catch (error) {
      console.error("Error starting import:", error);
      toast.error("Erreur lors du démarrage de l'import");
      setIsRunning(false);
    }
  };

  const handlePause = () => {
    pauseImportJob();
    setIsRunning(false);
    const updatedJob = getImportJob();
    setJob(updatedJob);
    toast.info("⏸️ Import mis en pause");
  };

  const handleResume = async () => {
    resumeImportJob();
    setIsRunning(true);
    toast.info("▶️ Reprise de l'import...");
    
    await runImportJob((updatedJob) => {
      setJob(updatedJob);
    });
    
    setIsRunning(false);
    toast.success("✅ Import terminé !");
  };

  const handleReset = () => {
    if (confirm("Réinitialiser l'import ? Toutes les données de progression seront perdues.")) {
      resetImportJob();
      setJob(null);
      setIsRunning(false);
      toast.success("Import réinitialisé");
    }
  };

  const progress = job ? (job.processedUrls / job.totalUrls) * 100 : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur border-b border-border">
        <div className="container max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/admin/blog")}
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Retour
            </Button>
            <div className="h-6 w-px bg-border" />
            <Download className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-bold text-foreground font-display">
              Import WordPress
            </h1>
          </div>
        </div>
      </header>

      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Info Card */}
        <Card className="p-6 mb-6 border-primary/20">
          <div className="flex items-start gap-4">
            <div className="shrink-0">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold mb-2">Import automatisé WordPress</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Ce système récupère automatiquement tous les articles du blog WordPress
                d'AKOKY et les importe dans le nouveau système de blog interne.
                Les doublons sont détectés et ignorés automatiquement.
              </p>
              {urlCount !== null && (
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    {urlCount} articles détectés dans le sitemap
                  </Badge>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Job Status */}
        {job ? (
          <Card className="p-6">
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                {job.status === "running" && (
                  <Loader2 className="h-5 w-5 text-primary animate-spin" />
                )}
                {job.status === "completed" && (
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                )}
                {job.status === "paused" && (
                  <Pause className="h-5 w-5 text-muted-foreground" />
                )}
                {job.status === "error" && (
                  <AlertCircle className="h-5 w-5 text-destructive" />
                )}
                <div>
                  <h3 className="font-semibold">
                    {job.status === "running" && "Import en cours..."}
                    {job.status === "completed" && "Import terminé"}
                    {job.status === "paused" && "Import en pause"}
                    {job.status === "pending" && "Prêt à démarrer"}
                    {job.status === "error" && "Erreur"}
                  </h3>
                  {job.currentUrl && (
                    <p className="text-xs text-muted-foreground truncate max-w-md">
                      {job.currentUrl}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {(job.status === "running" || job.status === "pending") && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={isRunning ? handlePause : handleResume}
                    disabled={job.status === "pending"}
                  >
                    {isRunning ? (
                      <>
                        <Pause className="h-4 w-4 mr-1" /> Pause
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-1" /> Reprendre
                      </>
                    )}
                  </Button>
                )}
                <Button variant="ghost" size="sm" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-1" /> Reset
                </Button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Progression</span>
                <span className="text-sm text-muted-foreground">
                  {job.processedUrls} / {job.totalUrls}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-1">
                {progress.toFixed(1)}% terminé
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-primary">
                  {job.successCount}
                </div>
                <div className="text-xs text-muted-foreground">Importés</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-muted-foreground">
                  {job.duplicateCount}
                </div>
                <div className="text-xs text-muted-foreground">Doublons</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-destructive">
                  {job.errorCount}
                </div>
                <div className="text-xs text-muted-foreground">Erreurs</div>
              </div>
              <div className="text-center p-3 bg-muted/50 rounded-lg">
                <div className="text-2xl font-bold text-muted-foreground">
                  {job.totalUrls - job.processedUrls}
                </div>
                <div className="text-xs text-muted-foreground">Restants</div>
              </div>
            </div>

            {/* Errors */}
            {job.errors.length > 0 && (
              <div className="border border-destructive/20 rounded-lg p-4">
                <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  Erreurs ({job.errors.length})
                </h4>
                <div className="space-y-1 max-h-40 overflow-y-auto">
                  {job.errors.map((err, i) => (
                    <div key={i} className="text-xs text-muted-foreground">
                      <span className="text-destructive">•</span> {err.url}
                      <br />
                      <span className="ml-3 text-[10px]">{err.error}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timestamps */}
            <div className="text-xs text-muted-foreground mt-4 space-y-1">
              {job.startedAt && (
                <div>Démarré : {new Date(job.startedAt).toLocaleString("fr-FR")}</div>
              )}
              {job.completedAt && (
                <div>Terminé : {new Date(job.completedAt).toLocaleString("fr-FR")}</div>
              )}
            </div>
          </Card>
        ) : (
          /* Start Import */
          <Card className="p-8 text-center">
            <FileText className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Prêt à importer</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Cliquez sur le bouton ci-dessous pour démarrer l'import automatique
              de tous les articles WordPress.
            </p>
            <Button
              onClick={handleStart}
              disabled={isRunning || urlCount === 0}
              className="font-bold"
            >
              {isRunning ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Import en cours...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Démarrer l'import
                </>
              )}
            </Button>
            {urlCount === 0 && (
              <p className="text-xs text-destructive mt-2">
                Aucune URL détectée dans le sitemap
              </p>
            )}
          </Card>
        )}

        {/* Instructions */}
        <div className="mt-6 text-sm text-muted-foreground">
          <h4 className="font-semibold mb-2">ℹ️ Comment ça marche ?</h4>
          <ol className="list-decimal list-inside space-y-1">
            <li>Le système analyse le sitemap XML pour extraire toutes les URLs</li>
            <li>Chaque URL est visitée et le contenu est récupéré</li>
            <li>Les articles existants sont ignorés (pas de doublons)</li>
            <li>Le contenu est nettoyé et adapté au format interne</li>
            <li>Les articles sont sauvegardés automatiquement</li>
          </ol>
          <p className="mt-4 text-xs">
            ⚠️ L'import peut prendre plusieurs minutes selon le nombre d'articles.
            Vous pouvez mettre en pause et reprendre à tout moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogImporter;
