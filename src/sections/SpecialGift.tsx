import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'

export function SpecialGift() {
  return (
    <section className="section gift-section" aria-labelledby="gift-title">
      <div className="gift-copy">
        {memorial.copy.gift.map((line, index) => (
          <Reveal key={line}><p id={index === 0 ? 'gift-title' : undefined} className={index === memorial.copy.gift.length - 1 ? 'gift-copy__final' : undefined}>{line}</p></Reveal>
        ))}
      </div>
    </section>
  )
}
