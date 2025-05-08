
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2 } from "lucide-react";
import { generateLinkQR } from "@/lib/qrHelpers";

interface LinkFormProps {
  onGenerate: (value: string) => void;
}

const LinkForm = ({ onGenerate }: LinkFormProps) => {
  const [url, setUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [useCustom, setUseCustom] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ensure URL has protocol, add https:// if missing
    let formattedUrl = url;
    if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
      formattedUrl = `https://${url}`;
    }
    
    // Add custom slug if needed
    if (useCustom && customSlug) {
      const shareUrl = new URL(formattedUrl);
      shareUrl.searchParams.append("slug", customSlug);
      formattedUrl = shareUrl.toString();
    }
    
    const qrContent = generateLinkQR(formattedUrl);
    onGenerate(qrContent);
  };

  return (
    <form onSubmit={handleSubmit} className="qr-form-container space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="url">URL / Link</Label>
        <Input
          id="url"
          placeholder="Ex: www.exemplo.com.br"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
        <span className="text-xs text-muted-foreground">
          Digite o link para sua página web ou perfil de rede social
        </span>
      </div>
      
      <div className="flex items-center gap-2 mt-2">
        <input
          type="checkbox"
          id="use-custom"
          checked={useCustom}
          onChange={(e) => setUseCustom(e.target.checked)}
          className="rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label htmlFor="use-custom" className="text-sm cursor-pointer">
          Usar URL personalizada
        </Label>
      </div>
      
      {useCustom && (
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
      )}

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <Link2 size={20} />
        <span>Gerar QR Code de Link</span>
      </Button>
    </form>
  );
};

export default LinkForm;
