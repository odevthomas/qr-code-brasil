# QR Fácil Brasil

Um gerador de QR Code especializado para o padrão brasileiro Pix, permitindo a criação rápida e fácil de códigos QR para pagamentos instantâneos.
![Uploading QRCODEBR.png…]()



## 📋 Sobre o Projeto

O QR Fácil Brasil é uma ferramenta desenvolvida para simplificar a geração de QR Codes para o sistema Pix brasileiro. Com ele, você pode:

- Gerar QR Codes estáticos e dinâmicos para Pix
- Personalizar informações do recebedor
- Definir valores e mensagens
- Exportar QR Codes em diferentes formatos
- Validar dados conforme as especificações do Banco Central

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/QRCODE-BR.git
```

2. Entre no diretório:
```bash
cd QRCODE-BR
```

3. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

1. Crie um arquivo `.env` baseado no `.env.example`
2. Configure suas credenciais Pix
3. Ajuste as configurações conforme necessário

Para mais detalhes, consulte nossa [documentação de configuração](docs/configuracao.md).

## 💻 Como Usar

```javascript
const QRFacilBrasil = require('QRCODE-BR');

// Crie um novo QR Code Pix
const qrCode = new QRFacilBrasil({
  chavePix: 'sua-chave-pix',
  valor: '100.00',
  beneficiario: 'Nome do Beneficiário',
  cidade: 'São Paulo'
});

// Gere o QR Code
const qrCodeGerado = await qrCode.gerar();
```

## 📄 Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para detalhes.


## ⭐ Apoie o Projeto

Se este projeto te ajudou, considere dar uma estrela no GitHub!
