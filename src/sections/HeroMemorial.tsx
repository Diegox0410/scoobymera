import { ImageWithFallback } from '../components/ImageWithFallback'
import { Paw } from '../components/Paw'
import { memorial } from '../data/memorial'

export function HeroMemorial() {
  return (
    <header className="hero" id="inicio">
      <ImageWithFallback className="hero__image" src={memorial.media.hero.src} srcSet={memorial.media.hero.srcSet} sizes="100vw" alt={memorial.media.hero.alt} fetchPriority="high" decoding="async" style={{ objectPosition: memorial.media.hero.position }} />
      <div className="hero__veil" />
      <div className="film-grain" aria-hidden="true" />
      <div className="hero__content">
        <Paw className="hero__paw" />
        <h1>{memorial.pet.name}</h1>
        <p className="eyebrow">04.10.2018 — 03.07.2026</p>
        <p className="hero__line">{memorial.copy.hero.line}</p>
        <p className="hero__years">{memorial.copy.hero.years}</p>
      </div>
      <div className="scroll-cue" aria-hidden="true"><span />Descubre sus recuerdos</div>
    </header>
  )
}
