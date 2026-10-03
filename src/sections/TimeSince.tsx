import { ImageWithFallback } from '../components/ImageWithFallback'
import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'
import { timeSincePassing } from '../utils/dates'

export function TimeSince() {
  const elapsed = timeSincePassing(memorial.pet.passingDate)
  return (
    <section className="section time-section" aria-labelledby="time-title">
      <Reveal className="time-copy">
        <span className="kicker">Desde el 03 de julio</span>
        <h2 id="time-title">El tiempo sigue...</h2>
        <p className="time-count">{elapsed.label}</p>
        <p className="time-turn">Pero hay cosas que el tiempo<br /><em>no sabe llevarse.</em></p>
      </Reveal>
      <Reveal className="time-photo">
        <ImageWithFallback src={memorial.media.photos[2].src} srcSet={memorial.media.photos[2].srcSet} sizes="(max-width: 700px) 82vw, 38vw" alt={memorial.media.photos[2].alt} loading="lazy" decoding="async" />
      </Reveal>
    </section>
  )
}
