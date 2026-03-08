import { useRef, useCallback } from "react";
import { Bold, Italic, Heading2, Heading3, List, ListOrdered, Link, Image, Undo, Redo, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
}

const RichTextEditor = ({ value, onChange }: RichTextEditorProps) => {
  const editorRef = useRef<HTMLDivElement>(null);

  const exec = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  }, [onChange]);

  const insertLink = () => {
    const url = prompt("URL du lien :");
    if (url) exec("createLink", url);
  };

  const insertImage = () => {
    const url = prompt("URL de l'image (ex: /blog-images/mon-image.jpg) :");
    if (url) exec("insertImage", url);
  };

  const tools = [
    { icon: Bold, action: () => exec("bold"), title: "Gras" },
    { icon: Italic, action: () => exec("italic"), title: "Italique" },
    { icon: Heading2, action: () => exec("formatBlock", "h2"), title: "H2" },
    { icon: Heading3, action: () => exec("formatBlock", "h3"), title: "H3" },
    { icon: List, action: () => exec("insertUnorderedList"), title: "Liste" },
    { icon: ListOrdered, action: () => exec("insertOrderedList"), title: "Liste numérotée" },
    { icon: Quote, action: () => exec("formatBlock", "blockquote"), title: "Citation" },
    { icon: Link, action: insertLink, title: "Lien" },
    { icon: Image, action: insertImage, title: "Image" },
    { icon: Undo, action: () => exec("undo"), title: "Annuler" },
    { icon: Redo, action: () => exec("redo"), title: "Rétablir" },
  ];

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card">
      <div className="flex flex-wrap gap-1 p-2 border-b border-border bg-muted/30">
        {tools.map((tool, i) => (
          <Button
            key={i}
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={tool.action}
            title={tool.title}
          >
            <tool.icon className="h-4 w-4" />
          </Button>
        ))}
      </div>
      <div
        ref={editorRef}
        contentEditable
        className="min-h-[300px] p-4 text-foreground focus:outline-none prose prose-invert max-w-none
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-6 [&_h2]:mb-3
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-4 [&_h3]:mb-2
          [&_p]:mb-3 [&_p]:leading-relaxed
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-3
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-3
          [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
          [&_a]:text-primary [&_a]:underline
          [&_img]:max-w-full [&_img]:rounded-xl [&_img]:my-4"
        dangerouslySetInnerHTML={{ __html: value }}
        onInput={() => {
          if (editorRef.current) {
            onChange(editorRef.current.innerHTML);
          }
        }}
      />
    </div>
  );
};

export default RichTextEditor;
