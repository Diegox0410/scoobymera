import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'

export type AudioState = 'idle' | 'playing' | 'paused' | 'fading' | 'ducked'

export type MemorialAudioController = {
  audioRef: RefObject<HTMLAudioElement | null>
  state: AudioState
  playing: boolean
  start: () => Promise<void>
  toggle: () => Promise<void>
  duck: () => void
  restore: () => void
}

const NORMAL_VOLUME = 0.22
const DUCKED_VOLUME = 0.045

export function useMemorialAudio(src: string): MemorialAudioController {
  const audioRef = useRef<HTMLAudioElement>(null)
  const animationRef = useRef<number | null>(null)
  const wasPlayingBeforeDuck = useRef(false)
  const [state, setState] = useState<AudioState>('idle')

  const fadeTo = useCallback((target: number, duration: number, nextState: AudioState) => {
    const audio = audioRef.current
    if (!audio) return
    if (animationRef.current) cancelAnimationFrame(animationRef.current)
    const initial = audio.volume
    const started = performance.now()
    setState('fading')
    const step = (now: number) => {
      const progress = Math.min(1, (now - started) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      audio.volume = initial + (target - initial) * eased
      if (progress < 1) animationRef.current = requestAnimationFrame(step)
      else { animationRef.current = null; setState(nextState) }
    }
    animationRef.current = requestAnimationFrame(step)
  }, [])

  const start = useCallback(async () => {
    const audio = audioRef.current
    if (!audio || !src) return
    audio.volume = 0
    try {
      await audio.play()
      fadeTo(NORMAL_VOLUME, 3000, 'playing')
    } catch { setState('paused') }
  }, [fadeTo, src])

  const toggle = useCallback(async () => {
    const audio = audioRef.current
    if (!audio) return
    if (!audio.paused) {
      audio.pause()
      setState('paused')
      return
    }
    try {
      audio.volume = Math.min(audio.volume, NORMAL_VOLUME)
      await audio.play()
      fadeTo(NORMAL_VOLUME, 1200, 'playing')
    } catch { setState('paused') }
  }, [fadeTo])

  const duck = useCallback(() => {
    const audio = audioRef.current
    wasPlayingBeforeDuck.current = Boolean(audio && !audio.paused)
    if (wasPlayingBeforeDuck.current) fadeTo(DUCKED_VOLUME, 700, 'ducked')
  }, [fadeTo])

  const restore = useCallback(() => {
    if (wasPlayingBeforeDuck.current) fadeTo(NORMAL_VOLUME, 1400, 'playing')
  }, [fadeTo])

  useEffect(() => () => {
    if (animationRef.current) cancelAnimationFrame(animationRef.current)
  }, [])

  return { audioRef, state, playing: state === 'playing' || state === 'fading' || state === 'ducked', start, toggle, duck, restore }
}
