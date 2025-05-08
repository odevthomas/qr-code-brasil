
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare } from "lucide-react";
import { generateWhatsAppQR } from "@/lib/qrHelpers";

interface WhatsAppFormProps {
  onGenerate: (value: string) => void;
}

const WhatsAppForm = ({ onGenerate }: WhatsAppFormProps) => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qrContent = generateWhatsAppQR(phone, message);
    onGenerate(qrContent);
  };

  return (
    <form onSubmit={handleSubmit} className="qr-form-container space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Número de Telefone (com DDD)</Label>
        <Input
          id="phone"
          placeholder="Ex: 5511999999999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <span className="text-xs text-muted-foreground">
          Digite o número com código do país (55 para Brasil) + DDD + número
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Mensagem Automática</Label>
        <Textarea
          id="message"
          placeholder="Digite a mensagem que será enviada automaticamente"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <MessageSquare size={20} />
        <span>Gerar QR Code WhatsApp</span>
      </Button>
    </form>
  );
};

export default WhatsAppForm;
