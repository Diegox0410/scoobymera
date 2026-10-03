import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'

export function MemoryGallery() {
  const [active, setActive] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (active === null) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive((current) => current === null ? 0 : (current + 1) % memorial.media.photos.length)
      if (event.key === 'ArrowLeft') setActive((current) => current === null ? 0 : (current - 1 + memorial.media.photos.length) % memorial.media.photos.length)
    }
    window.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey) }
  }, [active])

  const move = (direction: number) => setActive((current) => current === null ? 0 : (current + direction + memorial.media.photos.length) % memorial.media.photos.length)

  return (
    <section className="section gallery-section" aria-labelledby="gallery-title">
      <Reveal className="section-heading section-heading--wide">
        <span className="kicker">Lo que permanece</span>
        <h2 id="gallery-title">Hay recuerdos que todavía se sienten cerca.</h2>
      </Reveal>
      <div className="gallery" role="list">
        {memorial.media.photos.map((photo, index) => (
          <Reveal className={`memory memory--${index + 1}`} key={photo.src} role="listitem">
            <button type="button" onClick={() => setActive(index)} aria-label={`Ampliar: ${photo.caption}`}>
              <ImageWithFallback src={photo.src} srcSet={photo.srcSet} sizes="(max-width: 700px) 78vw, 32vw" width={photo.width} height={photo.height} alt={photo.alt} loading="lazy" decoding="async" style={{ objectPosition: photo.position }} />
              <span>{photo.caption}</span>
            </button>
          </Reveal>
        ))}
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Recuerdo ampliado" onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null) }}>
          <button ref={closeRef} type="button" className="lightbox__close" onClick={() => setActive(null)} aria-label="Cerrar imagen">×</button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => move(-1)} aria-label="Imagen anterior">←</button>
          <figure>
            <ImageWithFallback src={memorial.media.photos[active].src} alt={memorial.media.photos[active].alt} />
            <figcaption>{memorial.media.photos[active].caption}</figcaption>
          </figure>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => move(1)} aria-label="Imagen siguiente">→</button>
        </div>
      )}
    </section>
  )
}
