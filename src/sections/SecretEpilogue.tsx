import { useState } from 'react'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { memorial } from '../data/memorial'

export function SecretEpilogue() {
  const [open, setOpen] = useState(false)
  const photo = memorial.media.photos[4]
  return (
    <section className={`epilogue ${open ? 'epilogue--open' : ''}`} aria-label="Epílogo">
      {!open ? <button type="button" onClick={() => setOpen(true)}>Una última cosa...</button> : (
        <div className="epilogue__memory">
          <ImageWithFallback src={photo.src} srcSet={photo.srcSet} alt={photo.alt} loading="lazy" decoding="async" />
          <div><p>No quería que el último recuerdo fuera triste.</p><h2>Así que terminemos como él vivió:<br /><em>haciéndonos sonreír.</em></h2></div>
        </div>
      )}
    </section>
  )
}
