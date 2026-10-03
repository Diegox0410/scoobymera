import { useState, type ImgHTMLAttributes } from 'react'

export function ImageWithFallback(props: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false)
  if (failed) return <div className="image-fallback" role="img" aria-label={props.alt}>Este recuerdo sigue aquí.</div>
  return <img {...props} onError={() => setFailed(true)} />
}
