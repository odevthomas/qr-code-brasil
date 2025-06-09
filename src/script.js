export function formatPixData(key, value, description) {
  // Implemente a formatação dos dados PIX aqui
  return {
    keyType: key,
    value: value,
    description: description
  };
}

export function validatePixKey(key) {
  // Implemente a validação da chave PIX
  return true;
}

export function generateBRCode(pixData) {
  // Implemente a geração do BR Code
  return pixData;
}