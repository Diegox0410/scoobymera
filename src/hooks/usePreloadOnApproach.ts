import { useEffect, useRef } from 'react'

export function usePreloadOnApproach<T extends HTMLElement>(sources: readonly string[]) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      sources.forEach((src) => { const image = new Image(); image.src = src })
      observer.disconnect()
    }, { rootMargin: '700px 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [sources])
  return ref
}
