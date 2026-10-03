import { useEffect, useState } from 'react'
import { MusicControl } from './components/MusicControl'
import { memorial } from './data/memorial'
import { BirthdayTribute } from './sections/BirthdayTribute'
import { FinalTribute } from './sections/FinalTribute'
import { HeroMemorial } from './sections/HeroMemorial'
import { ImportantDates } from './sections/ImportantDates'
import { IntroExperience } from './sections/IntroExperience'
import { LetterForScooby } from './sections/LetterForScooby'
import { MemoryGallery } from './sections/MemoryGallery'
import { RecipientMessage } from './sections/RecipientMessage'
import { ScoobyTimeline } from './sections/ScoobyTimeline'
import { SecretEpilogue } from './sections/SecretEpilogue'
import { SpecialGift } from './sections/SpecialGift'
import { TimeSince } from './sections/TimeSince'
import { VideoMemory } from './sections/VideoMemory'

function App() {
  const [entered, setEntered] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('intro-active', !entered)
    return () => document.body.classList.remove('intro-active')
  }, [entered])

  const enter = () => {
    setLeaving(true)
    window.setTimeout(() => setEntered(true), 950)
  }

  return (
    <>
      {!entered && <IntroExperience onEnter={enter} leaving={leaving} />}
      <main aria-hidden={!entered || undefined}>
        <HeroMemorial />
        <ImportantDates />
        <TimeSince />
        <MemoryGallery />
        <ScoobyTimeline />
        <VideoMemory />
        <SpecialGift />
        <LetterForScooby />
        <RecipientMessage />
        <BirthdayTribute />
        <FinalTribute />
        <SecretEpilogue />
      </main>
      <MusicControl src={memorial.media.music} enabled={entered} />
    </>
  )
}

export default App
