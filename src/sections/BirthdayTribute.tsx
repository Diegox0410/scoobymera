import { Reveal } from '../components/Reveal'
import { getBirthdayMessage } from '../utils/dates'

export function BirthdayTribute() {
  return (
    <section className="section birthday-section" aria-labelledby="birthday-title">
      <div className="birthday-lights" aria-hidden="true">{Array.from({ length: 10 }, (_, index) => <i key={index} />)}</div>
      <Reveal className="birthday-copy">
        <span>04 de octubre</span>
        <h2 id="birthday-title">Hoy celebramos el día<br />en que llegaste.</h2>
        <p>{getBirthdayMessage()}</p>
        <strong>Feliz cumpleaños hasta el cielo,<br />Scooby.</strong>
      </Reveal>
    </section>
  )
}
