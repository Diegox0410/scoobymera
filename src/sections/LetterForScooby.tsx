import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'

export function LetterForScooby() {
  return (
    <section className="section letter-section" aria-labelledby="letter-title">
      <Reveal className="letter-paper">
        <span className="letter-paper__label">Una carta para ti</span>
        <h2 id="letter-title">Scooby</h2>
        <div className="letter-paper__body">
          {memorial.copy.letter.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <span className="letter-paper__signature">Siempre contigo</span>
      </Reveal>
    </section>
  )
}
