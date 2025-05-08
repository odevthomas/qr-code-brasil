
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ensure URL has protocol, add https:// if missing
    let formattedUrl = url;
    if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
      formattedUrl = `https://${url}`;
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

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <Link2 size={20} />
        <span>Gerar QR Code de Link</span>
      </Button>
    </form>
  );
};

export default LinkForm;
