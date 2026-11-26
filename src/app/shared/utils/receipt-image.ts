const MAX_EDGE_PX = 2560;
const JPEG_QUALITY = 0.85;

/**
 * Las fotos de cámara suelen superar el límite de subida: se reducen a JPEG solo en ese caso.
 * Si el navegador no puede procesarla, se devuelve el original para que la validación lo informe.
 */
export async function shrinkImage(file: File, maxBytes: number): Promise<File> {
  if (file.size <= maxBytes || !file.type.startsWith('image/')) {
    return file;
  }
  try {
    const bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' });
    const scale = Math.min(1, MAX_EDGE_PX / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    const context = canvas.getContext('2d')!;
    // JPEG no admite transparencia
    context.fillStyle = '#fff';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/jpeg', JPEG_QUALITY));
    return blob ? new File([blob], file.name.replace(/\.\w+$/, '') + '.jpg', { type: 'image/jpeg' }) : file;
  } catch {
    return file;
  }
}
