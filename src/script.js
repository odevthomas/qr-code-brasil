import qrcode from 'qrcode-generator';

export function generatePixQRCode(pixData) {
  const qr = qrcode(0, 'L');
  qr.addData(pixData);
  qr.make();
  return qr.createSvgTag();
}

export function formatPixData({
  key,
  name,
  city,
  value,
  description = ''
}) {
  const data = {
    keyType: key,
    name: name,
    city: city,
    value: value.toString(),
    description: description
  };

  // Implementar formatação do Pix aqui
  return data;
}

export function validatePixKey(key) {
  // Regex para validar diferentes tipos de chave Pix
  const patterns = {
    cpf: /^\d{11}$/,
    cnpj: /^\d{14}$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\+55\d{11}$/,
    random: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
  };

  for (const [type, pattern] of Object.entries(patterns)) {
    if (pattern.test(key)) return true;
  }

  return false;
}

export function generateBRCode(pixData) {
  // Implemente a geração do BR Code
  return pixData;
}