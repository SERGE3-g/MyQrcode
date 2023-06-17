import * as QRCode from 'qrcode';
import * as fs from 'fs';

// Funzione per generare il QR code e salvarlo come immagine
async function generateQRCode(menuUrl: string, outputPath: string): Promise<void> {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(menuUrl);

    // Rimuovi l'intestazione dei dati del QR code
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');

    // Salva l'immagine del QR code
    fs.writeFileSync(outputPath, base64Data, 'base64');
    console.log('QR code generato correttamente.');
  } catch (error) {
    console.error('Si è verificato un errore durante la generazione del QR code:', error);
  }
}

// URL del menu del ristorante
const menuUrl = 'https://www.linkedin.com/in/serge-guea-40b9801bb/?originalSubdomain=it';
// Percorso in cui salvare l'immagine del QR code
const outputPath = 'qr_code.png';

// Genera il QR code
generateQRCode(menuUrl, outputPath);
