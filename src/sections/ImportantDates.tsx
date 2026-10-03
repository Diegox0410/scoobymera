import { Reveal } from '../components/Reveal'
import { Paw } from '../components/Paw'
import { getContextualDateMessage } from '../utils/dates'

export function ImportantDates() {
  const contextual = getContextualDateMessage()
  return (
    <section className="section dates-section" aria-labelledby="dates-title">
      <Reveal className="section-heading">
        <span className="kicker">Dos fechas. Una misma historia.</span>
        <h2 id="dates-title">Entre la llegada y la huella</h2>
      </Reveal>
      {contextual && <Reveal className="date-now" role="status">{contextual}</Reveal>}
      <div className="dates-flow">
        <Reveal className="date-moment date-moment--arrival">
          <time dateTime="2016-10-04"><b>04</b><span>OCT · 2016</span></time>
          <p>El día en que llegaste<br />para cambiar nuestra historia.</p>
        </Reveal>
        <div className="dates-line" aria-hidden="true"><Paw /></div>
        <Reveal className="date-moment date-moment--farewell">
          <time dateTime="2026-07-03"><b>03</b><span>JUL · 2026</span></time>
          <p>El día en que tus patitas dejaron<br />de caminar a nuestro lado.</p>
        </Reveal>
      </div>
      <Reveal className="dates-reflection">
        Y aunque una fecha nos recuerda tu partida,<br />la otra siempre nos recordará<br /><em>la suerte de haberte conocido.</em>
      </Reveal>
    </section>
  )
}
