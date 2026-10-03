import { useRef, useState } from 'react'
import { Reveal } from '../components/Reveal'
import { memorial, type MemorialVideo } from '../data/memorial'
import type { MemorialAudioController } from '../hooks/useMemorialAudio'

function VideoMoment({ item, register, audio }: {
  item: MemorialVideo
  register: (id: string, node: HTMLVideoElement | null) => void
  audio: MemorialAudioController
}) {
  const [started, setStarted] = useState(false)
  const [failed, setFailed] = useState(false)
  const play = async () => {
    setStarted(true)
    const video = document.querySelector<HTMLVideoElement>(`video[data-video-id="${item.id}"]`)
    await video?.play()
  }
  return (
    <Reveal className={`video-moment ${started ? 'video-moment--started' : ''} ${failed ? 'video-moment--error' : ''}`}>
      <div className="video-moment__frame" style={{ aspectRatio: item.aspectRatio }}>
        <video
          ref={(node) => register(item.id, node)} data-video-id={item.id}
          src={item.src} poster={item.poster} preload="metadata" controls={started}
          playsInline aria-label={item.ariaLabel}
          onPlay={audio.duck} onPause={audio.restore} onEnded={audio.restore}
          onError={() => setFailed(true)}
        />
        {!started && <button type="button" onClick={play} aria-label={`Reproducir: ${item.title}`}><span aria-hidden="true">▷</span></button>}
        <p className="video-error">Este recuerdo no pudo cargarse.</p>
      </div>
      <p className="video-moment__caption">{item.title}</p>
    </Reveal>
  )
}

export function VideoMemory({ audio }: { audio: MemorialAudioController }) {
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})
  const register = (id: string, node: HTMLVideoElement | null) => {
    videoRefs.current[id] = node
    if (!node) return
    node.onplay = () => {
      Object.entries(videoRefs.current).forEach(([otherId, video]) => { if (otherId !== id && video && !video.paused) video.pause() })
      audio.duck()
    }
  }

  return (
    <section className="section video-section" aria-labelledby="video-title">
      <Reveal className="section-heading section-heading--wide">
        <span className="kicker">Instantes en movimiento</span>
        <h2 id="video-title">Hay recuerdos que<br />todavía se mueven.</h2>
        <p>Y por unos segundos, vuelven a sentirse cerca.</p>
      </Reveal>
      <div className="video-reel">
        {memorial.media.videos.map((video) => <VideoMoment key={video.id} item={video} register={register} audio={audio} />)}
      </div>
    </section>
  )
}
