// Genera src/environments/env.generated.ts a partir de .env (o de variables del sistema).
// Se ejecuta automaticamente antes de start/build/watch/test.
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const envFile = path.join(root, '.env');
const outFile = path.join(root, 'src/environments/env.generated.ts');

const REQUIRED = ['API_URL', 'CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_UPLOAD_PRESET', 'CLOUDINARY_FOLDER'];

function parseEnvFile(file) {
  if (!fs.existsSync(file)) {
    return {};
  }
  const vars = {};
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match) {
      vars[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
    }
  }
  return vars;
}

// Las variables del sistema (CI / despliegue) tienen prioridad sobre .env
const fileVars = parseEnvFile(envFile);
const value = (key) => process.env[key] ?? fileVars[key];

const missing = REQUIRED.filter((key) => !value(key));
if (missing.length) {
  console.error(`\n[set-env] Faltan variables de entorno: ${missing.join(', ')}`);
  console.error('[set-env] Copia .env.example a .env y completa los valores.\n');
  process.exit(1);
}

const content = `// Archivo generado por scripts/set-env.js. No editar ni subir a git.
export const env = {
  apiUrl: ${JSON.stringify(value('API_URL'))},
  cloudinary: {
    cloudName: ${JSON.stringify(value('CLOUDINARY_CLOUD_NAME'))},
    uploadPreset: ${JSON.stringify(value('CLOUDINARY_UPLOAD_PRESET'))},
    folder: ${JSON.stringify(value('CLOUDINARY_FOLDER'))},
  },
};
`;

fs.writeFileSync(outFile, content);
console.log('[set-env] src/environments/env.generated.ts generado.');
