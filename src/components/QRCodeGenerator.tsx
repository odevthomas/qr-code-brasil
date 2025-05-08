
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import WifiForm from "./forms/WifiForm";
import PixForm from "./forms/PixForm";
import WhatsAppForm from "./forms/WhatsAppForm";
import LinkForm from "./forms/LinkForm";
import ContactForm from "./forms/ContactForm";
import QRCodeDisplay from "./QRCodeDisplay";
import { Wifi, Link, Contact, WhatsApp } from "lucide-react";

const QRCodeGenerator = () => {
  const [qrContent, setQrContent] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("wifi");
  
  const handleGenerate = (content: string) => {
    setQrContent(content);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Tabs 
            defaultValue="wifi" 
            value={activeTab} 
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="w-full grid grid-cols-5">
              <TabsTrigger value="wifi" className="flex items-center gap-2">
                <Wifi size={16} />
                <span className="hidden sm:inline">Wi-Fi</span>
              </TabsTrigger>
              <TabsTrigger value="pix" className="flex items-center gap-2">
                <span>PIX</span>
              </TabsTrigger>
              <TabsTrigger value="whatsapp" className="flex items-center gap-2">
                <WhatsApp size={16} />
                <span className="hidden sm:inline">WhatsApp</span>
              </TabsTrigger>
              <TabsTrigger value="link" className="flex items-center gap-2">
                <Link size={16} />
                <span className="hidden sm:inline">Link</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Contact size={16} />
                <span className="hidden sm:inline">Contato</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="wifi">
              <WifiForm onGenerate={handleGenerate} />
            </TabsContent>
            <TabsContent value="pix">
              <PixForm onGenerate={handleGenerate} />
            </TabsContent>
            <TabsContent value="whatsapp">
              <WhatsAppForm onGenerate={handleGenerate} />
            </TabsContent>
            <TabsContent value="link">
              <LinkForm onGenerate={handleGenerate} />
            </TabsContent>
            <TabsContent value="contact">
              <ContactForm onGenerate={handleGenerate} />
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="flex flex-col justify-center items-center">
          {qrContent ? (
            <QRCodeDisplay content={qrContent} size={260} />
          ) : (
            <Card className="w-full max-w-md bg-card/50 border-dashed">
              <CardContent className="p-10 flex flex-col items-center justify-center text-center space-y-4 h-80">
                <div className="rounded-full bg-muted p-6">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <path d="M14 9V3.5a2.5 2.5 0 0 0-5 0v5.5" />
                    <path d="M16 10H8a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium">Gere seu QR Code</h3>
                <p className="text-sm text-muted-foreground px-6">
                  Preencha o formulário ao lado para gerar seu QR code.
                  Seu código aparecerá aqui para download.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
