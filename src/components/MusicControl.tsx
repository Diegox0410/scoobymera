import { useEffect, useRef, useState } from 'react'

export function MusicControl({ src, enabled }: { src: string; enabled: boolean }) {
  const audio = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    if (!src || !enabled || !audio.current) return
    audio.current.volume = 0.24
    audio.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [enabled, src])

  if (!src) return null
  const toggle = async () => {
    if (!audio.current) return
    if (playing) { audio.current.pause(); setPlaying(false) }
    else { await audio.current.play(); setPlaying(true) }
  }
  return (
    <div className="music-control">
      <audio ref={audio} src={src} loop preload="none" />
      <button type="button" onClick={toggle} aria-label={playing ? 'Pausar música ambiental' : 'Reproducir música ambiental'}>
        <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span> Música
      </button>
    </div>
  )
}
