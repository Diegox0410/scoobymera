import { useEffect, useState } from 'react'

export function useNarrativeProgress(enabled: boolean) {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    if (!enabled) return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const total = document.documentElement.scrollHeight - window.innerHeight
        setProgress(total > 0 ? Math.min(1, window.scrollY / total) : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('resize', update) }
  }, [enabled])
  return progress
}
