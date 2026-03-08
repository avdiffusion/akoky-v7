import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { adminCheckLockout, adminValidatePassword, adminValidateDob } from "@/lib/blog-store";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Lock, Calendar, AlertCircle, ShieldCheck } from "lucide-react";

interface AdminLoginFormProps {
  title: string;
  redirectTo: string;
}

const AdminLoginForm = ({ title, redirectTo }: AdminLoginFormProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [error, setError] = useState("");
  const [locked, setLocked] = useState(false);
  const [lockMinutes, setLockMinutes] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const check = adminCheckLockout();
    setLocked(check.locked);
    setLockMinutes(check.remainingMinutes);
    if (check.locked) {
      const interval = setInterval(() => {
        const c = adminCheckLockout();
        setLocked(c.locked);
        setLockMinutes(c.remainingMinutes);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [error]);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = adminValidatePassword(password);
    if (result.success) {
      setStep(2);
      setError("");
      setPassword("");
    } else {
      if (result.attemptsLeft <= 0) {
        setLocked(true);
        setLockMinutes(15);
        setError("");
      } else {
        setError(`Mot de passe incorrect. ${result.attemptsLeft} tentative${result.attemptsLeft > 1 ? "s" : ""} restante${result.attemptsLeft > 1 ? "s" : ""}.`);
      }
      setPassword("");
    }
  };

  const handleDobSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = adminValidateDob(dob);
    if (result.success) {
      navigate(redirectTo);
    } else {
      if (result.attemptsLeft <= 0) {
        setLocked(true);
        setLockMinutes(15);
        setError("");
      } else {
        setError(`Date de naissance incorrecte. ${result.attemptsLeft} tentative${result.attemptsLeft > 1 ? "s" : ""} restante${result.attemptsLeft > 1 ? "s" : ""}.`);
      }
      setDob("");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-4">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-display">{title}</h1>
          <p className="text-muted-foreground mt-2">Accès réservé à l'équipe éditoriale</p>
          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className={`h-2 w-8 rounded-full transition-colors ${step >= 1 ? "bg-primary" : "bg-muted"}`} />
            <div className={`h-2 w-8 rounded-full transition-colors ${step >= 2 ? "bg-primary" : "bg-muted"}`} />
          </div>
        </div>

        {locked ? (
          <div className="bg-card border border-destructive/30 rounded-2xl p-6 text-center space-y-3">
            <AlertCircle className="h-10 w-10 text-destructive mx-auto" />
            <h2 className="text-lg font-bold text-destructive">Accès temporairement bloqué</h2>
            <p className="text-muted-foreground text-sm">
              Trop de tentatives échouées. Réessayez dans <strong className="text-foreground">{lockMinutes} minute{lockMinutes > 1 ? "s" : ""}</strong>.
            </p>
          </div>
        ) : step === 1 ? (
          <form onSubmit={handlePasswordSubmit} className="space-y-4 bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <ShieldCheck className="h-4 w-4" />
              <span>Étape 1/2 — Mot de passe</span>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Mot de passe</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="Entrez le mot de passe admin"
                autoFocus
                maxLength={50}
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold">
              Continuer →
            </Button>
          </form>
        ) : (
          <form onSubmit={handleDobSubmit} className="space-y-4 bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              <span>Étape 2/2 — Vérification d'identité</span>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                <AlertCircle className="h-4 w-4 shrink-0" />
                {error}
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Date de naissance</label>
              <Input
                type="text"
                value={dob}
                onChange={(e) => {
                  let v = e.target.value.replace(/[^\d/]/g, "");
                  // Auto-insert slashes
                  if (v.length === 2 && !v.includes("/")) v += "/";
                  if (v.length === 5 && v.indexOf("/", 3) === -1) v += "/";
                  if (v.length > 10) v = v.slice(0, 10);
                  setDob(v);
                  setError("");
                }}
                placeholder="JJ/MM/AAAA"
                maxLength={10}
                autoFocus
              />
              <p className="text-xs text-muted-foreground mt-1">Format : jour/mois/année</p>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold">
              Accéder à l'admin
            </Button>

            <button type="button" onClick={() => { setStep(1); setError(""); }} className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors">
              ← Retour
            </button>
          </form>
        )}

        <p className="text-center text-muted-foreground/50 text-xs mt-6">
          © {new Date().getFullYear()} AKOKY — Interface admin protégée
        </p>
      </div>
    </div>
  );
};

export default AdminLoginForm;
