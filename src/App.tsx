import { useEffect, useState } from 'react'
import { MusicControl } from './components/MusicControl'
import { NarrativeProgress } from './components/NarrativeProgress'
import { memorial } from './data/memorial'
import { useMemorialAudio } from './hooks/useMemorialAudio'
import { useNarrativeProgress } from './hooks/useNarrativeProgress'
import { BirthdayTribute } from './sections/BirthdayTribute'
import { FinalTribute } from './sections/FinalTribute'
import { HeroMemorial } from './sections/HeroMemorial'
import { ImportantDates } from './sections/ImportantDates'
import { IntroExperience } from './sections/IntroExperience'
import { LetterForScooby } from './sections/LetterForScooby'
import { RecipientMessage } from './sections/RecipientMessage'
import { SecretEpilogue } from './sections/SecretEpilogue'
import { SpecialGift } from './sections/SpecialGift'
import { TenMemories } from './sections/TenMemories'
import { TimeSince } from './sections/TimeSince'
import { VideoMemory } from './sections/VideoMemory'

function App() {
  const [entered, setEntered] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const audio = useMemorialAudio(memorial.media.audio.src)
  const progress = useNarrativeProgress(entered)

  useEffect(() => {
    document.body.classList.toggle('intro-active', !entered)
    return () => document.body.classList.remove('intro-active')
  }, [entered])

  const enter = () => {
    void audio.start()
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
        <TenMemories />
        <VideoMemory audio={audio} />
        <SpecialGift />
        <LetterForScooby />
        <RecipientMessage />
        <BirthdayTribute />
        <FinalTribute />
        <SecretEpilogue />
      </main>
      {entered && <NarrativeProgress progress={progress} />}
      <MusicControl src={memorial.media.audio.src} title={memorial.media.audio.title} audioRef={audio.audioRef} state={audio.state} playing={audio.playing} onToggle={audio.toggle} />
    </>
  )
}

export default App
