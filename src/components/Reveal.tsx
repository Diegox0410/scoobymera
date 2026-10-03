import type { HTMLAttributes, ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export function Reveal({ children, className = '', ...props }: Props) {
  const ref = useReveal<HTMLDivElement>()
  return <div ref={ref} className={`reveal ${className}`} {...props}>{children}</div>
}
