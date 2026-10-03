import { Paw } from '../components/Paw'
import { memorial } from '../data/memorial'

export function IntroExperience({ onEnter, leaving }: { onEnter: () => void; leaving: boolean }) {
  return (
    <section className={`intro ${leaving ? 'intro--leaving' : ''}`} aria-label="Preludio">
      <div className="intro__trail" aria-hidden="true">
        <Paw /><Paw /><Paw />
      </div>
      <div className="intro__copy">
        <p>{memorial.copy.intro.first}</p>
        <p>{memorial.copy.intro.second}</p>
        <div className="intro__name"><Paw /><span>{memorial.pet.name}</span></div>
        <button type="button" className="quiet-button" onClick={onEnter}>Entrar a sus recuerdos <span aria-hidden="true">→</span></button>
      </div>
    </section>
  )
}
