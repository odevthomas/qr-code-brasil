
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generatePixQR } from "@/lib/qrHelpers";

interface PixFormProps {
  onGenerate: (value: string) => void;
}

const PixForm = ({ onGenerate }: PixFormProps) => {
  const [keyType, setKeyType] = useState("email");
  const [keyValue, setKeyValue] = useState("");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const amount = value ? parseFloat(value) : undefined;
    const qrContent = generatePixQR(keyValue, name, city, amount, message);
    onGenerate(qrContent);
  };

  return (
    <form onSubmit={handleSubmit} className="qr-form-container space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="keyType">Tipo de Chave</Label>
        <Select value={keyType} onValueChange={setKeyType}>
          <SelectTrigger id="keyType">
            <SelectValue placeholder="Selecione o tipo de chave" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">E-mail</SelectItem>
            <SelectItem value="cpf">CPF</SelectItem>
            <SelectItem value="cnpj">CNPJ</SelectItem>
            <SelectItem value="phone">Telefone</SelectItem>
            <SelectItem value="random">Aleatória</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="keyValue">Chave PIX</Label>
        <Input
          id="keyValue"
          placeholder={keyType === "email" ? "seu@email.com" : 
                     keyType === "cpf" ? "123.456.789-00" : 
                     keyType === "cnpj" ? "12.345.678/0001-00" :
                     keyType === "phone" ? "+55 (11) 98765-4321" : 
                     "Chave aleatória"}
          value={keyValue}
          onChange={(e) => setKeyValue(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="name">Nome do Recebedor</Label>
        <Input
          id="name"
          placeholder="Nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="city">Cidade</Label>
        <Input
          id="city"
          placeholder="Sua cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="value">Valor (opcional)</Label>
        <Input
          id="value"
          type="number"
          step="0.01"
          min="0"
          placeholder="R$ 0.00"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Mensagem/Identificador (opcional)</Label>
        <Input
          id="message"
          placeholder="Pagamento referente a..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <span>Gerar QR Code PIX</span>
      </Button>
    </form>
  );
};

export default PixForm;
