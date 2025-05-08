
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DownloadIcon } from "lucide-react";
import { downloadQRCode } from "@/lib/qrHelpers";
import QRCode from "qrcode";

interface QRCodeDisplayProps {
  content: string;
  size?: number;
}

const QRCodeDisplay = ({ content, size = 200 }: QRCodeDisplayProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (content && canvasRef.current) {
      QRCode.toCanvas(
        canvasRef.current,
        content,
        {
          width: size,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff"
          }
        },
        (error) => {
          if (error) console.error("Error generating QR code:", error);
        }
      );
    }
  }, [content, size]);

  if (!content) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-card animate-fade-in">
      <CardContent className="p-6 flex flex-col items-center gap-4">
        <div className="bg-white p-4 rounded-lg shadow-inner">
          <canvas ref={canvasRef} id="qr-canvas" />
        </div>
        
        <Button 
          onClick={() => downloadQRCode("qr-canvas", "qrcode-facil-br")}
          className="qr-button qr-button-secondary"
        >
          <DownloadIcon size={18} />
          <span>Baixar QR Code</span>
        </Button>
      </CardContent>
    </Card>
  );
};

export default QRCodeDisplay;
