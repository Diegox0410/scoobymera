import { Reveal } from '../components/Reveal'
import { getBirthdayMessage } from '../utils/dates'
import { memorial } from '../data/memorial'

export function BirthdayTribute() {
  return (
    <section className="section birthday-section" aria-labelledby="birthday-title">
      <div className="birthday-lights" aria-hidden="true">{Array.from({ length: memorial.birthday.lights }, (_, index) => <i key={index} />)}</div>
      <Reveal className="birthday-copy">
        <span>{memorial.birthday.dateLabel}</span>
        <h2 id="birthday-title">El día en que llegaste.</h2>
        <p>{getBirthdayMessage()}</p>
        <strong>Feliz cumpleaños hasta el cielo,<br />Scooby.</strong>
      </Reveal>
    </section>
  )
}
