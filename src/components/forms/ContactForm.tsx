
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Contact } from "lucide-react";
import { generateContactQR } from "@/lib/qrHelpers";

interface ContactFormProps {
  onGenerate: (value: string) => void;
}

const ContactForm = ({ onGenerate }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qrContent = generateContactQR(name, email, phone, company);
    onGenerate(qrContent);
  };

  return (
    <form onSubmit={handleSubmit} className="qr-form-container space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          placeholder="Nome Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          placeholder="email@exemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          placeholder="Ex: +5511999999999"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Empresa (opcional)</Label>
        <Input
          id="company"
          placeholder="Nome da Empresa"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <Contact size={20} />
        <span>Gerar QR Code de Contato</span>
      </Button>
    </form>
  );
};

export default ContactForm;
