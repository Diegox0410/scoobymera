import type { AudioState } from '../hooks/useMemorialAudio'
import type { RefObject } from 'react'

export function MusicControl({ src, title, audioRef, state, playing, onToggle }: {
  src: string
  title: string
  audioRef: RefObject<HTMLAudioElement | null>
  state: AudioState
  playing: boolean
  onToggle: () => Promise<void>
}) {
  if (!src) return null
  return (
    <div className={`music-control music-control--${state}`}>
      <audio ref={audioRef} src={src} loop preload="metadata" aria-label={title} />
      <button type="button" onClick={onToggle} aria-label={playing ? 'Pausar música ambiental' : 'Reproducir música ambiental'} aria-pressed={playing}>
        <span className="sound-bars" aria-hidden="true"><i /><i /><i /></span>
        <span className="music-control__label">{playing ? 'Pausar' : 'Música'}</span>
      </button>
    </div>
  )
}
