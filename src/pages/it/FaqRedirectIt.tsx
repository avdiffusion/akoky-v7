import { useEffect } from "react";
const FaqRedirectIt = () => {
  useEffect(() => { window.location.replace("https://ask.akoky.com"); }, []);
  return <div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">Redirection...</p></div>;
};
export default FaqRedirectIt;
