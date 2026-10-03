import { useEffect, useRef, useState } from 'react'
import { ImageWithFallback } from '../components/ImageWithFallback'
import { Paw } from '../components/Paw'
import { Reveal } from '../components/Reveal'
import { memorial, type MemorialPhoto } from '../data/memorial'
import { usePreloadOnApproach } from '../hooks/usePreloadOnApproach'

export function TenMemories() {
  const memories: readonly MemorialPhoto[] = memorial.media.featuredMemories
  const [active, setActive] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const returnFocus = useRef<HTMLElement | null>(null)
  const sectionRef = usePreloadOnApproach<HTMLElement>(memories.slice(0, 3).map((memory) => memory.src))

  useEffect(() => {
    if (active === null) return
    const overflow = document.body.style.overflow
    returnFocus.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive((current) => current === null ? 0 : (current + 1) % memories.length)
      if (event.key === 'ArrowLeft') setActive((current) => current === null ? 0 : (current - 1 + memories.length) % memories.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
      returnFocus.current?.focus()
    }
  }, [active, memories.length])

  const move = (direction: number) => setActive((current) => current === null ? 0 : (current + direction + memories.length) % memories.length)

  return (
    <section ref={sectionRef} className="memories-chapter" aria-labelledby="memories-title">
      <Reveal className="memories-intro">
        <span className="kicker">Un capítulo para su vida</span>
        <h2 id="memories-title"><span>Una vida.</span><br />Tantos recuerdos.</h2>
        <p>No son años exactos. Son instantes que, juntos, se parecen a todo lo que dejó.</p>
      </Reveal>

      <div className="memory-sequence">
        {memories.map((memory, index) => (
          <div key={memory.id}>
            {index === 5 && (
              <Reveal className="joy-interlude">
                <Paw />
                <p>Porque recordarte<br /><em>también es sonreír.</em></p>
              </Reveal>
            )}
            <Reveal className={`cinema-memory cinema-memory--${memory.layout} cinema-memory--${index + 1}`}>
              <button type="button" onClick={() => setActive(index)} aria-label={`Ampliar recuerdo ${index + 1}: ${memory.caption}`}>
                <figure style={{ backgroundColor: memory.dominantColor }}>
                  <ImageWithFallback
                    src={memory.src} srcSet={memory.srcSet}
                    sizes={memory.layout === 'full' || memory.layout === 'wide' ? '100vw' : '(max-width: 700px) 88vw, 52vw'}
                    width={memory.width} height={memory.height} alt={memory.alt}
                    loading="lazy" decoding="async" style={{ objectPosition: memory.position }}
                  />
                  <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{memory.caption}</figcaption>
                </figure>
              </button>
            </Reveal>
          </div>
        ))}
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Recuerdo ${active + 1} de ${memories.length}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActive(null) }}>
          <button ref={closeRef} type="button" className="lightbox__close" onClick={() => setActive(null)} aria-label="Cerrar imagen">×</button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => move(-1)} aria-label="Recuerdo anterior">←</button>
          <figure>
            <ImageWithFallback src={memories[active].src} alt={memories[active].alt} />
            <figcaption><span>{active + 1} / {memories.length}</span>{memories[active].caption}</figcaption>
          </figure>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => move(1)} aria-label="Recuerdo siguiente">→</button>
        </div>
      )}
    </section>
  )
}
