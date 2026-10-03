type PawProps = { className?: string; label?: string }

export function Paw({ className = '', label }: PawProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      <g fill="currentColor">
        <ellipse cx="31" cy="42" rx="15" ry="12" />
        <ellipse cx="14" cy="27" rx="7" ry="9" transform="rotate(-25 14 27)" />
        <ellipse cx="27" cy="18" rx="7" ry="9" transform="rotate(-8 27 18)" />
        <ellipse cx="42" cy="19" rx="7" ry="9" transform="rotate(12 42 19)" />
        <ellipse cx="52" cy="29" rx="7" ry="9" transform="rotate(27 52 29)" />
      </g>
    </svg>
  )
}
