import { ImageWithFallback } from '../components/ImageWithFallback'
import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'
import { timeSincePassing } from '../utils/dates'

export function TimeSince() {
  const elapsed = timeSincePassing(memorial.pet.passingDate)
  const photo = memorial.media.timePortrait
  return (
    <section className="section time-section" aria-labelledby="time-title">
      <Reveal className="time-copy">
        <span className="kicker">Desde el 03 de julio</span>
        <h2 id="time-title">El tiempo sigue...</h2>
        <p className="time-count">{elapsed.label}</p>
        <p className="time-turn">El tiempo puede contar los días.</p>
        <p className="time-whisper">Pero no puede medir cuánto se extraña.<br /><em>Ni cuánto se quiso.</em></p>
      </Reveal>
      <Reveal className="time-photo">
        <ImageWithFallback src={photo.src} srcSet={photo.srcSet} sizes="(max-width: 700px) 92vw, 44vw" alt={photo.alt} loading="lazy" decoding="async" style={{ objectPosition: photo.position, backgroundColor: photo.dominantColor }} />
        <span>Hay huellas que el tiempo no sabe llevarse.</span>
      </Reveal>
    </section>
  )
}
