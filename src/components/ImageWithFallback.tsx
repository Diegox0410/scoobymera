import { useState, type ImgHTMLAttributes } from 'react'

export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  if (failed) return <div className="image-fallback" role="img" aria-label={props.alt}>Este recuerdo sigue aquí.</div>
  return <img {...props} className={`${props.className ?? ''} image-reveal ${loaded ? 'image-reveal--loaded' : ''}`} onLoad={(event) => { setLoaded(true); props.onLoad?.(event) }} onError={() => setFailed(true)} />
}
