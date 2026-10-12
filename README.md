# VRIA Frontend

VRIA es una aplicación web para gestionar el inventario, las ventas y las entregas de un negocio. Desde un mismo lugar el equipo puede consultar el catálogo, controlar el stock de cada producto, registrar salidas de bodega, organizar entregas a clientes y llevar el registro de las transferencias recibidas.

Este repositorio contiene la interfaz de usuario, construida con Angular 17 y Angular Material. Se comunica con el backend de VRIA a través de su API.

## ¿Qué se puede hacer?

- **Panel principal:** muestra un resumen del día, con un semáforo de stock que resalta los productos que se están agotando y la lista de entregas pendientes.
- **Catálogo:** permite explorar los productos disponibles con su precio, foto y descripción.
- **Productos:** sirve para crear, editar y eliminar productos, asignarles una categoría y subir su foto.
- **Categorías:** organiza los productos en grupos.
- **Salida de stock:** registra los productos que salen de la bodega y descuenta las cantidades del inventario.
- **Entregas:** lleva el seguimiento de cada pedido, desde que se prepara hasta que llega al cliente (en preparación, lista, enviada y entregada), junto con el medio de pago (efectivo o transferencia).
- **Transferencias:** guarda los pagos recibidos con su monto, banco, cliente y fecha.
- **Usuarios:** permite a los administradores crear cuentas y asignar roles.

La aplicación también ofrece modo claro y modo oscuro, y recuerda la preferencia de cada persona.

## Roles

Cada persona ve solo las secciones que corresponden a su trabajo:

| Sección          | Administrador | Encargado de bodega | Asesor comercial |
| ---------------- | :-----------: | :-----------------: | :--------------: |
| Panel principal  |       ✓       |          ✓          |        ✓         |
| Catálogo         |       ✓       |                     |        ✓         |
| Productos        |       ✓       |          ✓          |                  |
| Categorías       |       ✓       |          ✓          |                  |
| Salida de stock  |       ✓       |          ✓          |                  |
| Entregas         |       ✓       |                     |        ✓         |
| Transferencias   |       ✓       |                     |        ✓         |
| Usuarios         |       ✓       |                     |                  |

## Inicio de sesión

Los usuarios entran con sus credenciales y el sistema les entrega un token de acceso que identifica su sesión. Ese token se renueva automáticamente mientras la persona sigue trabajando, de modo que no tenga que volver a iniciar sesión a cada rato.

## Imágenes de productos

Las fotos de los productos no se guardan en el servidor de la aplicación: se suben a un servicio de almacenamiento en la nube y la aplicación solo conserva el enlace a cada imagen. Los datos de conexión con ese servicio se configuran mediante variables de entorno (ver la siguiente sección).

## Requisitos

- Node.js 18 o superior
- npm
- El backend de VRIA en ejecución (por defecto en `http://localhost:8080`)

## Puesta en marcha

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Crea tu archivo de configuración a partir del ejemplo y completa los valores:

   ```bash
   cp .env.example .env
   ```

   Allí se indican la dirección del backend (`API_URL`) y los datos del servicio de almacenamiento de imágenes (`STORAGE_CLOUD_NAME`, `STORAGE_UPLOAD_PRESET` y `STORAGE_FOLDER`). El archivo `.env` es personal y no debe subirse al repositorio.

3. Inicia el servidor de desarrollo:

   ```bash
   npm start
   ```

   Luego abre `http://localhost:4200/` en el navegador. La página se recarga sola cada vez que cambias el código.

Cada vez que ejecutas `start`, `build`, `watch` o `test`, se genera automáticamente la configuración de la aplicación a partir de tu `.env`. Si falta alguna variable, el comando te avisará cuál es antes de continuar.

## Comandos disponibles

| Comando                | Descripción                                                                                     |
| ---------------------- | ----------------------------------------------------------------------------------------------- |
| `npm start`            | Levanta la aplicación en modo desarrollo.                                                       |
| `npm run start:tunnel` | Levanta la aplicación accesible desde otros dispositivos o a través de un túnel, redirigiendo las peticiones al backend local. |
| `npm run build`        | Genera la versión lista para producción en la carpeta `dist/`.                                  |
| `npm run watch`        | Compila en modo desarrollo y vuelve a compilar con cada cambio.                                 |
| `npm test`             | Ejecuta las pruebas unitarias.                                                                  |

## Organización del proyecto

```
src/app/
├── core/       Servicios de comunicación con la API y modelos de datos
├── features/   Una carpeta por sección (catálogo, productos, entregas, etc.)
├── layout/     Estructura general: menú lateral, pantalla de inicio de sesión y pantalla de carga
└── shared/     Componentes, utilidades y estilos reutilizables
```

Cada sección se carga solo cuando el usuario entra en ella, lo que hace que la aplicación arranque más rápido.

## Tecnologías

- Angular 17
- Angular Material
- RxJS
- TypeScript
- SCSS
