import { Reveal } from '../components/Reveal'
import { Paw } from '../components/Paw'

const moments = [
  ['04 OCT 2016', 'Llegaste a nuestras vidas.'],
  ['2016 — 2026', 'Diez años de amor, compañía, travesuras y momentos que se quedaron para siempre.'],
  ['03 JUL 2026', 'Tus patitas dejaron de caminar aquí.'],
  ['AHORA', 'Pero tus huellas siguen con nosotros.'],
]

export function ScoobyTimeline() {
  return (
    <section className="section timeline-section" aria-labelledby="story-title">
      <Reveal className="section-heading"><span className="kicker">Su historia</span><h2 id="story-title">Una vida entera cabe en lo que dejó.</h2></Reveal>
      <div className="timeline">
        <div className="timeline__line" aria-hidden="true" />
        {moments.map(([date, text], index) => (
          <Reveal className="timeline__moment" key={date}>
            <span className="timeline__dot" aria-hidden="true">{index === moments.length - 1 && <Paw />}</span>
            <time>{date}</time><p>{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
