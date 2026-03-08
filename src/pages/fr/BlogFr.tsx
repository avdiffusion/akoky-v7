import { useEffect } from "react";
const BlogFr = () => {
  useEffect(() => { window.location.replace("https://blog.akoky.com"); }, []);
  return <div className="min-h-screen flex items-center justify-center"><p className="text-muted-foreground">Redirection...</p></div>;
};
export default BlogFr;
