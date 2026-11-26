/** Conserva la clave mientras se reintentan los mismos datos y la renueva si cambian. */
export class IdempotencyKey {
  private key = '';
  private fingerprint = '';

  for(payload: unknown): string {
    const fingerprint = JSON.stringify(payload);
    if (fingerprint !== this.fingerprint) {
      this.fingerprint = fingerprint;
      this.key = randomKey();
    }
    return this.key;
  }
}

// randomUUID solo existe en contextos seguros (HTTPS o localhost)
function randomKey(): string {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (b) => b.toString(16).padStart(2, '0')).join('');
}
