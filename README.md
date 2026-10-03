# Scooby — Siempre contigo

Experiencia digital conmemorativa creada como un recorrido cinematográfico por las fotografías, el video y la memoria de Scooby.

## Desarrollo local

Requiere Node.js 20 o posterior.

```bash
npm install
npm run dev
```

Vite mostrará la URL local. Para comprobar la versión de producción:

```bash
npm run lint
npm run build
npm run preview
```

## Configuración

Todo el contenido editable está centralizado en `src/data/memorial.ts`:

- `pet`: nombre y fechas de calendario.
- `recipient`: nombre y mensaje privado opcionales. Si `message` está vacío, la sección completa no aparece. Si solo `name` está vacío, no se inventa ningún nombre.
- `media.photos`: rutas, variantes responsive, dimensiones, textos alternativos y frases.
- `media.video`: ruta del video.
- `media.music`: ruta opcional de audio.
- `copy`: textos del preludio, hero y carta.

## Cambiar fotografías

1. Conserva los originales fuera de `public`.
2. Añade copias optimizadas en `public/media/scooby/photos/`.
3. Actualiza las rutas y dimensiones en `src/data/memorial.ts`.
4. Mantén textos alternativos literales y no inventes detalles.

El script `npm run assets` regenera las versiones actuales y la imagen social a partir de los originales `Coby (1).jpeg` a `Coby (5).jpeg`. Nunca modifica esos originales.

## Cambiar video

Coloca una copia web compatible en `public/media/scooby/videos/` y actualiza `media.video`. Se recomienda MP4 con H.264/AAC. El reproductor usa `preload="metadata"` y `playsInline`.

## Agregar música

Coloca un archivo propio o autorizado en `public/media/scooby/audio/` y asigna su ruta a `media.music`, por ejemplo:

```ts
music: '/media/scooby/audio/scooby-ambient.mp3'
```

La música intentará empezar únicamente después del clic de entrada. El control permite pausar y reanudar. No se incluye audio por defecto.

## Mensaje privado

Edita:

```ts
recipient: {
  name: '',
  message: '',
}
```

No es necesario modificar componentes.

## Desplegar en Vercel

1. Sube la carpeta a un repositorio Git.
2. En Vercel, selecciona **Add New → Project** e importa el repositorio.
3. Vercel detectará Vite. Confirma `npm run build` como Build Command y `dist` como Output Directory.
4. Despliega. No se requieren variables de entorno ni backend.
5. Comparte primero la URL en un chat de prueba para comprobar la vista previa de WhatsApp. La imagen social es `public/og-scooby.jpg`.

## Privacidad

El proyecto es estático. No incluye analítica, cookies, formularios, rastreadores ni llamadas a servicios externos.
