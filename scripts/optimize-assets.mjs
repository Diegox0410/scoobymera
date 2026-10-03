import sharp from 'sharp'
import { copyFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = (name) => resolve(root, name)
const output = resolve(root, 'public/media/scooby/photos')
const v2Output = resolve(root, 'public/media/scooby/v2/photos')
const v2Audio = resolve(root, 'public/media/scooby/v2/audio')
await mkdir(output, { recursive: true })
await mkdir(v2Output, { recursive: true })
await mkdir(v2Audio, { recursive: true })

const photos = [
  ['Coby (1).jpeg', 'scooby-01', [720, 1170]],
  ['Coby (2).jpeg', 'scooby-02', [480, 591]],
  ['Coby (3).jpeg', 'scooby-03', [480, 549]],
  ['Coby (4).jpeg', 'scooby-04', [480, 561]],
  ['Coby (5).jpeg', 'scooby-05', [480, 591]],
]

for (const [input, base, widths] of photos) {
  for (const width of widths) {
    await sharp(source(input))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 84, effort: 5 })
      .toFile(resolve(output, `${base}-${width}.webp`))
  }
}

const v2Photos = [
  ['V2/WhatsApp Image 2026-10-03 at 4.25.01 PM (1).jpeg', 'memory-keepsake', [640, 960, 1170]],
  ['V2/WhatsApp Image 2026-10-03 at 4.25.15 PM.jpeg', 'memory-embrace', [640, 960, 1018]],
  ['V2/WhatsApp Image 2026-10-03 at 4.39.38 PM (1).jpeg', 'memory-paw', [640, 960, 1058]],
  ['V2/WhatsApp Image 2026-10-03 at 4.39.38 PM (2).jpeg', 'memory-puppy', [480, 591]],
  ['V2/WhatsApp Image 2026-10-03 at 4.39.38 PM.jpeg', 'memory-joy', [640, 960, 1170]],
]

for (const [input, base, widths] of v2Photos) {
  for (const width of widths) {
    await sharp(source(input))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 5 })
      .toFile(resolve(v2Output, `${base}-${width}.webp`))
  }
}

const overlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#07111d" stop-opacity=".9"/>
        <stop offset=".58" stop-color="#07111d" stop-opacity=".2"/>
        <stop offset="1" stop-color="#07111d" stop-opacity=".06"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#shade)"/>
    <text x="82" y="390" fill="#f7f0e5" font-size="116" font-family="Georgia, serif">Scooby</text>
    <text x="89" y="445" fill="#f3c879" font-size="22" font-family="Arial, sans-serif" letter-spacing="8">SIEMPRE CONTIGO</text>
  </svg>
`)

await sharp(source('Coby (1).jpeg'))
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .modulate({ brightness: 0.9, saturation: 0.9 })
  .composite([{ input: overlay }])
  .jpeg({ quality: 88, progressive: true })
  .toFile(resolve(root, 'public/og-scooby-v2.jpg'))

await copyFile(
  source('V2/Voy A Extrañarte - Andrés Cepeda.mp3'),
  resolve(v2Audio, 'scooby-theme.mp3'),
)
