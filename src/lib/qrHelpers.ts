
// Helper functions for generating QR codes

export type QRType = 'wifi' | 'pix' | 'whatsapp' | 'link' | 'contact';

// Generate WiFi QR code content
export const generateWifiQR = (
  ssid: string, 
  password: string, 
  encryption: 'WPA' | 'WEP' | 'nopass' = 'WPA'
): string => {
  // Format: WIFI:T:<encryption>;S:<ssid>;P:<password>;;
  return `WIFI:T:${encryption};S:${ssid};P:${password};;`;
};

// For PIX, we'll use a simplified format here
// In a real app, this should use a proper library like 'gerar-pix'
export const generatePixQR = (
  key: string,
  name: string,
  city: string,
  value?: number,
  message?: string
): string => {
  // This is a simplified version - in a real app use a proper BR Code library
  let pixCode = `${key}|${name}|${city}`;
  
  if (value) {
    pixCode += `|${value}`;
  }
  
  if (message) {
    pixCode += `|${message}`;
  }
  
  return pixCode;
};

// Generate WhatsApp QR code content
export const generateWhatsAppQR = (
  phone: string, 
  message: string
): string => {
  // Format: https://wa.me/<phone>?text=<message>
  const formattedPhone = phone.replace(/\D/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
};

// Generate URL QR code content
export const generateLinkQR = (url: string): string => {
  // URLs can be used directly
  return url;
};

// Generate vCard QR code content
export const generateContactQR = (
  name: string,
  email: string,
  phone: string,
  company?: string
): string => {
  // Format: BEGIN:VCARD\nVERSION:3.0\nFN:<name>\nTEL:<phone>\nEMAIL:<email>\nORG:<company>\nEND:VCARD
  let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
  vcard += `FN:${name}\n`;
  vcard += `TEL;TYPE=cell:${phone}\n`;
  vcard += `EMAIL:${email}\n`;
  
  if (company) {
    vcard += `ORG:${company}\n`;
  }
  
  vcard += 'END:VCARD';
  return vcard;
};

// Download the QR code as PNG
export const downloadQRCode = (elementId: string, filename: string = 'qrcode'): void => {
  const canvas = document.getElementById(elementId) as HTMLCanvasElement;
  if (canvas) {
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${filename}.png`;
    link.href = url;
    link.click();
  }
};
