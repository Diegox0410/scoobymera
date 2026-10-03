import { Reveal } from '../components/Reveal'
import { Paw } from '../components/Paw'
import { getContextualDateMessage } from '../utils/dates'

export function ImportantDates() {
  const contextual = getContextualDateMessage()
  return (
    <section className="section dates-section" aria-labelledby="dates-title">
      <Reveal className="section-heading">
        <span className="kicker">Dos fechas. Una misma historia.</span>
        <h2 id="dates-title">Una partida.<br />Una llegada.</h2>
      </Reveal>
      {contextual && <Reveal className="date-now" role="status">{contextual}</Reveal>}
      <div className="dates-flow">
        <Reveal className="date-moment date-moment--arrival">
          <time dateTime="2018-10-04"><b>04</b><span>OCT · 2018</span></time>
          <p>Y otra nos recuerda<br />la suerte de que llegaras.</p>
        </Reveal>
        <div className="dates-line" aria-hidden="true"><Paw /></div>
        <Reveal className="date-moment date-moment--farewell">
          <time dateTime="2026-07-03"><b>03</b><span>JUL · 2026</span></time>
          <p>Una fecha nos recuerda<br />que te fuiste.</p>
        </Reveal>
      </div>
      <Reveal className="dates-reflection">
        Y aunque una fecha nos recuerda tu partida,<br />la otra siempre nos recordará<br /><em>la suerte de haberte conocido.</em>
      </Reveal>
    </section>
  )
}
