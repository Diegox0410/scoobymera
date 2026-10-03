import { useState } from 'react'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { memorial } from '../data/memorial'
import { Paw } from '../components/Paw'

export function SecretEpilogue() {
  const [open, setOpen] = useState(false)
  const photo = memorial.media.epilogue
  return (
    <section className={`epilogue ${open ? 'epilogue--open' : ''}`} aria-label="Epílogo">
      {!open ? <button type="button" onClick={() => setOpen(true)}>Una última cosa...</button> : (
        <div className="epilogue__memory">
          <ImageWithFallback src={photo.src} srcSet={photo.srcSet} alt={photo.alt} loading="lazy" decoding="async" />
          <div><p>{memorial.copy.epilogue.first}</p><h2>{memorial.copy.epilogue.second}<br /><em>{memorial.copy.epilogue.final}</em></h2><Paw className="epilogue__paw" label="Una huella para Scooby" /></div>
        </div>
      )}
    </section>
  )
}
