import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'

export function RecipientMessage() {
  if (!memorial.recipient.message.trim()) return null
  return (
    <section className="section recipient-section" aria-labelledby="recipient-title">
      <Reveal>
        <span className="kicker">Para ti</span>
        <h2 id="recipient-title">{memorial.recipient.name ? `${memorial.recipient.name},` : 'Unas palabras para ti'}</h2>
        <p>{memorial.recipient.message}</p>
      </Reveal>
    </section>
  )
}
