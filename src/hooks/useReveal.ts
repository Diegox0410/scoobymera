import { useEffect, useRef } from 'react'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        element.dataset.visible = 'true'
        observer.unobserve(element)
      }
    }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])
  return ref
}
