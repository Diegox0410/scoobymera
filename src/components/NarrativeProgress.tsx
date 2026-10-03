import { Paw } from './Paw'

export function NarrativeProgress({ progress }: { progress: number }) {
  return (
    <div className="narrative-progress" aria-hidden="true">
      <div className="narrative-progress__track"><span style={{ transform: `scaleY(${progress})` }} /></div>
      <Paw style={{ top: `${Math.max(2, Math.min(96, progress * 100))}%` }} />
    </div>
  )
}
