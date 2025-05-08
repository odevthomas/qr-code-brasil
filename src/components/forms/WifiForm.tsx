
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Wifi } from "lucide-react";
import { generateWifiQR } from "@/lib/qrHelpers";

interface WifiFormProps {
  onGenerate: (value: string) => void;
}

const WifiForm = ({ onGenerate }: WifiFormProps) => {
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [encryption, setEncryption] = useState<"WPA" | "WEP" | "nopass">("WPA");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const qrContent = generateWifiQR(ssid, password, encryption);
    onGenerate(qrContent);
  };

  return (
    <form onSubmit={handleSubmit} className="qr-form-container space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="ssid">Nome da Rede (SSID)</Label>
        <Input
          id="ssid"
          placeholder="Digite o nome da sua rede Wi-Fi"
          value={ssid}
          onChange={(e) => setSsid(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          placeholder="Digite a senha da rede"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="encryption">Tipo de Segurança</Label>
        <Select value={encryption} onValueChange={(value) => setEncryption(value as any)}>
          <SelectTrigger id="encryption">
            <SelectValue placeholder="Selecione o tipo de segurança" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="WPA">WPA/WPA2/WPA3</SelectItem>
            <SelectItem value="WEP">WEP</SelectItem>
            <SelectItem value="nopass">Nenhuma</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full qr-button qr-button-primary">
        <Wifi size={20} />
        <span>Gerar QR Code Wi-Fi</span>
      </Button>
    </form>
  );
};

export default WifiForm;
