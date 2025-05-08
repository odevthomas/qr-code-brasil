
import QRCodeGenerator from "@/components/QRCodeGenerator";
import { MessageSquare, Wifi as WifiIcon, Link2, UserRound, DownloadIcon, QrCode, Share } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-qrDark text-qrLight flex flex-col">
      {/* Header Section */}
      <header className="py-10 px-4 bg-gradient-to-r from-qrDark to-qrDark/90">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex justify-center items-center gap-3">
            <div className="bg-qrOrange p-3 rounded-lg">
              <QrCode size={28} className="text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              QRCode Fácil BR
            </h1>
          </div>
          <p className="text-qrLight/80 max-w-2xl mx-auto text-lg">
            Gere e compartilhe conexões, pagamentos e contatos com um único clique.
            Simples, rápido e sem complicação.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4">
        <QRCodeGenerator />
        
        {/* Features Section */}
        <section className="max-w-6xl mx-auto mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">
            <span className="text-qrOrange">Funcionalidades</span> Disponíveis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrOrange/20 p-4 rounded-full mb-4">
                <WifiIcon size={24} className="text-qrOrange" />
              </div>
              <h3 className="text-lg font-medium mb-2">Wi-Fi</h3>
              <p className="text-sm text-muted-foreground">
                Crie QR codes para conexão rápida em redes Wi-Fi sem precisar digitar a senha.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrGreen/20 p-4 rounded-full mb-4">
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="text-qrGreen"
                >
                  <path d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51 10.94 9.51 10.02C9.51 9.18 10.16 8.49 10.96 8.49H12.84C13.76 8.49 14.51 9.27 14.51 10.24" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7.5V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2" 
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 3V7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">PIX</h3>
              <p className="text-sm text-muted-foreground">
                Gere QR codes para pagamentos PIX compatíveis com o padrão BR Code do Banco Central.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrOrange/20 p-4 rounded-full mb-4">
                <MessageSquare size={24} className="text-qrOrange" />
              </div>
              <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">
                Crie QR codes que iniciam conversas no WhatsApp com mensagens pré-definidas.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrGreen/20 p-4 rounded-full mb-4">
                <Link2 size={24} className="text-qrGreen" />
              </div>
              <h3 className="text-lg font-medium mb-2">Links</h3>
              <p className="text-sm text-muted-foreground">
                Compartilhe links para sites e redes sociais de forma rápida e prática.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrGreen/20 p-4 rounded-full mb-4">
                <Share size={24} className="text-qrGreen" />
              </div>
              <h3 className="text-lg font-medium mb-2">Links Personalizados</h3>
              <p className="text-sm text-muted-foreground">
                Crie links personalizados com templates prontos para compartilhamento profissional.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrOrange/20 p-4 rounded-full mb-4">
                <UserRound size={24} className="text-qrOrange" />
              </div>
              <h3 className="text-lg font-medium mb-2">Contato</h3>
              <p className="text-sm text-muted-foreground">
                Crie QR codes para compartilhar contatos no formato vCard compatível com smartphones.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border border-border flex flex-col items-center text-center">
              <div className="bg-qrGreen/20 p-4 rounded-full mb-4">
                <DownloadIcon size={24} className="text-qrGreen" />
              </div>
              <h3 className="text-lg font-medium mb-2">Download</h3>
              <p className="text-sm text-muted-foreground">
                Baixe seus QR codes em alta resolução para imprimir ou compartilhar.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QRCode Fácil BR. Todos os direitos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 mt-4 sm:mt-0">
            <span className="text-sm text-muted-foreground">
              Feito com ♥ para o Brasil
            </span>
            <a 
              href="https://github.com/odevthomas" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-qrOrange hover:text-qrOrange/80 transition-colors flex items-center gap-1"
            >
              <span>Desenvolvido por</span>
              <span className="font-semibold">@odevthomas</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
