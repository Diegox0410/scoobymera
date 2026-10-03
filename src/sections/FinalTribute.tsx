import { Paw } from '../components/Paw'
import { Reveal } from '../components/Reveal'

export function FinalTribute() {
  return (
    <section className="final-section" aria-labelledby="final-title">
      <div className="horizon" aria-hidden="true"><div className="horizon__sun" /><div className="mountain mountain--back" /><div className="mountain mountain--front" /></div>
      <Reveal className="final-copy">
        <Paw className="final-copy__paw" />
        <p>Aunque tus patitas ya no caminen a nuestro lado...</p>
        <h2 id="final-title">tu huella siempre seguirá<br />formando parte de nuestro camino.</h2>
        <div className="final-name">Scooby <span>2018 \u2014 2026</span><b aria-label="Para siempre">∞</b></div>
        <p className="final-thanks">Gracias por haber existido.</p>
        <p className="final-birthday">Feliz cumpleaños hasta el cielo.</p>
      </Reveal>
    </section>
  )
}
