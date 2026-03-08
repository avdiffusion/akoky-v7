import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogAdminLogin } from "@/lib/blog-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, AlertCircle } from "lucide-react";

const BlogLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (blogAdminLogin(password)) {
      navigate("/admin/blog");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-display">Admin Blog AKOKY</h1>
          <p className="text-muted-foreground mt-2">Accès réservé à l'équipe éditoriale</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 bg-card border border-border rounded-2xl p-6">
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
              <AlertCircle className="h-4 w-4 shrink-0" />
              Mot de passe incorrect
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Mot de passe</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(false); }}
              placeholder="Entrez le mot de passe admin"
              autoFocus
            />
          </div>

          <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold">
            Connexion
          </Button>
        </form>

        <p className="text-center text-muted-foreground/50 text-xs mt-6">
          © {new Date().getFullYear()} AKOKY — Interface admin protégée
        </p>
      </div>
    </div>
  );
};

export default BlogLogin;
