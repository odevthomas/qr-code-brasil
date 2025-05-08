
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import WifiForm from "./forms/WifiForm";
import PixForm from "./forms/PixForm";
import WhatsAppForm from "./forms/WhatsAppForm";
import LinkForm from "./forms/LinkForm";
import CustomLinkForm from "./forms/CustomLinkForm";
import ContactForm from "./forms/ContactForm";
import QRCodeDisplay from "./QRCodeDisplay";
import { Wifi, Link2, UserRound, MessageSquare, Share, QrCode } from "lucide-react";

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
            <TabsList className="w-full grid grid-cols-6">
              <TabsTrigger value="wifi" className="flex items-center gap-2">
                <Wifi size={16} />
                <span className="hidden sm:inline">Wi-Fi</span>
              </TabsTrigger>
              <TabsTrigger value="pix" className="flex items-center gap-2">
                <span>PIX</span>
              </TabsTrigger>
              <TabsTrigger value="whatsapp" className="flex items-center gap-2">
                <MessageSquare size={16} />
                <span className="hidden sm:inline">WhatsApp</span>
              </TabsTrigger>
              <TabsTrigger value="link" className="flex items-center gap-2">
                <Link2 size={16} />
                <span className="hidden sm:inline">Link</span>
              </TabsTrigger>
              <TabsTrigger value="custom" className="flex items-center gap-2">
                <Share size={16} />
                <span className="hidden sm:inline">Personalizado</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <UserRound size={16} />
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
            <TabsContent value="custom">
              <CustomLinkForm onGenerate={handleGenerate} />
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
                  <QrCode size={40} className="text-muted-foreground" />
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
