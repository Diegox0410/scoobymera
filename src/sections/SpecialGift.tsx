import { Reveal } from '../components/Reveal'

export function SpecialGift() {
  return (
    <section className="section gift-section" aria-labelledby="gift-title">
      <div className="gift-copy">
        <Reveal><p id="gift-title">Si pudiera regalarte algo hoy...</p></Reveal>
        <Reveal><p>Te regalaría un día más.</p></Reveal>
        <Reveal><p>Una mirada más.</p></Reveal>
        <Reveal><p>Una de esas sonrisas<br />que solo él sabía provocar.</p></Reveal>
        <Reveal><p>Pero como no puedo devolverte el tiempo...</p></Reveal>
        <Reveal><p className="gift-copy__final">quise regalarte un lugar<br />donde siempre puedas volver a encontrarlo.</p></Reveal>
      </div>
    </section>
  )
}
