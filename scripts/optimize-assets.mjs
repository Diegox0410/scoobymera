import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = (name) => resolve(root, name)
const output = resolve(root, 'public/media/scooby/photos')
await mkdir(output, { recursive: true })

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

await sharp(source('Coby (1).jpeg'))
  .resize(1200, 630, { fit: 'cover', position: 'center' })
  .modulate({ brightness: 0.88, saturation: 0.88 })
  .jpeg({ quality: 88, progressive: true })
  .toFile(resolve(root, 'public/og-scooby.jpg'))
