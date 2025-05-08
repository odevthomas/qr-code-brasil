
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Share } from "lucide-react";
import { generateLinkQR } from "@/lib/qrHelpers";

interface CustomLinkFormProps {
  onGenerate: (value: string) => void;
}

const CustomLinkForm = ({ onGenerate }: CustomLinkFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  
  // Templates pré-definidos
  const templates = [
    { 
      name: "Portfolio Profissional", 
      url: "https://portfolio.exemplo.com.br", 
      title: "Meu Portfolio Profissional", 
      description: "Confira meus projetos e habilidades",
      slug: "portfolio"
    },
    { 
      name: "Cardápio Digital", 
      url: "https://menu.exemplo.com.br", 
      title: "Cardápio Digital", 
      description: "Escaneie para ver nosso cardápio completo",
      slug: "menu"
    },
    { 
      name: "Evento", 
      url: "https://evento.exemplo.com.br", 
      title: "Inscrição no Evento", 
      description: "Garanta já sua vaga no nosso evento",
      slug: "evento"
    },
  ];

  const handleSelectTemplate = (template: typeof templates[0]) => {
    setTitle(template.title);
    setDescription(template.description);
    setUrl(template.url);
    setCustomSlug(template.slug || "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Garante que a URL tenha protocolo
    let formattedUrl = url;
    if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
      formattedUrl = `https://${url}`;
    }
    
    // Codifica os parâmetros de título e descrição na URL
    const shareUrl = new URL(formattedUrl);
    if (title) {
      shareUrl.searchParams.append("title", title);
    }
    if (description) {
      shareUrl.searchParams.append("desc", description);
    }
    if (customSlug) {
      shareUrl.searchParams.append("slug", customSlug);
    }
    
    const qrContent = generateLinkQR(shareUrl.toString());
    onGenerate(qrContent);
  };

  return (
    <form onSubmit={handleSubmit} className="qr-form-container space-y-4">
      <div className="mb-4">
        <Label className="text-sm font-medium mb-1 block">Templates Prontos</Label>
        <div className="grid grid-cols-3 gap-2">
          {templates.map((template, index) => (
            <Button 
              key={index}
              type="button" 
              variant="outline"
              onClick={() => handleSelectTemplate(template)}
              className="text-xs h-auto py-2 whitespace-normal text-center"
            >
              {template.name}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="url">URL / Link</Label>
        <Input
          id="url"
          placeholder="Ex: www.exemplo.com.br"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="customSlug">URL Personalizada</Label>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">qrfacil.br/</span>
          <Input
            id="customSlug"
            placeholder="meu-link"
            value={customSlug}
            onChange={(e) => setCustomSlug(e.target.value)}
            className="flex-1"
          />
        </div>
        <span className="text-xs text-muted-foreground">
          Crie um link curto e personalizado para seu QR Code
        </span>
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          placeholder="Ex: Meu Site Pessoal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <Label htmlFor="description">Descrição</Label>
        <Textarea
          id="description"
          placeholder="Ex: Visite meu site para mais informações"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <Share size={20} />
        <span>Gerar QR Code Personalizado</span>
      </Button>
    </form>
  );
};

export default CustomLinkForm;
