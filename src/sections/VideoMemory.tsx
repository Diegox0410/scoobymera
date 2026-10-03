import { useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { memorial } from '../data/memorial'

export function VideoMemory() {
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const play = async () => { setStarted(true); await video.current?.play() }
  return (
    <section className="section video-section" aria-labelledby="video-title">
      <Reveal className="section-heading section-heading--wide">
        <span className="kicker">Un instante en movimiento</span>
        <h2 id="video-title">Hay momentos que una fotografía<br />no alcanza a guardar.</h2>
        <p>Por suerte, algunos todavía podemos volver a verlos.</p>
      </Reveal>
      <Reveal className={`video-frame ${started ? 'video-frame--started' : ''}`}>
        <video ref={video} src={memorial.media.video} poster={memorial.media.photos[0].src} preload="metadata" controls={started} playsInline aria-label="Video de Scooby" onError={(event) => event.currentTarget.closest('.video-frame')?.classList.add('video-frame--error')} />
        {!started && <button type="button" onClick={play}><span aria-hidden="true">▷</span> Volver a verlo</button>}
        <p className="video-error">El video no pudo cargarse, pero el recuerdo permanece.</p>
      </Reveal>
    </section>
  )
}
