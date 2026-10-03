export type MemorialPhoto = {
  id: string
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
  caption: string
  layout: 'wide' | 'portrait' | 'detail' | 'offset' | 'full'
  dominantColor: string
  position?: string
}

export type MemorialVideo = {
  id: string
  src: string
  poster: string
  title: string
  ariaLabel: string
  aspectRatio: string
}

const original = {
  celebration: {
    id: 'celebration', src: '/media/scooby/photos/scooby-01-1170.webp',
    srcSet: '/media/scooby/photos/scooby-01-720.webp 720w, /media/scooby/photos/scooby-01-1170.webp 1170w',
    width: 1170, height: 887, alt: 'Scooby sonriendo junto a dos globos', caption: 'Nuestro Scooby.',
    layout: 'wide', dominantColor: '#28241f', position: '48% 43%',
  },
  smile: {
    id: 'smile', src: '/media/scooby/photos/scooby-02-591.webp',
    srcSet: '/media/scooby/photos/scooby-02-480.webp 480w, /media/scooby/photos/scooby-02-591.webp 591w',
    width: 591, height: 649, alt: 'Scooby mirando a la cámara con expresión alegre', caption: 'Tu alegría.',
    layout: 'portrait', dominantColor: '#8c8179',
  },
  closeup: {
    id: 'closeup', src: '/media/scooby/photos/scooby-03-549.webp',
    srcSet: '/media/scooby/photos/scooby-03-480.webp 480w, /media/scooby/photos/scooby-03-549.webp 549w',
    width: 549, height: 1009, alt: 'Primer plano de la mirada alegre de Scooby', caption: 'Tu mirada.',
    layout: 'portrait', dominantColor: '#302c29', position: '50% 40%',
  },
  profile: {
    id: 'profile', src: '/media/scooby/photos/scooby-04-561.webp',
    srcSet: '/media/scooby/photos/scooby-04-480.webp 480w, /media/scooby/photos/scooby-04-561.webp 561w',
    width: 561, height: 908, alt: 'Scooby de perfil en un momento tranquilo', caption: 'Tu forma de estar.',
    layout: 'offset', dominantColor: '#332a28', position: '50% 42%',
  },
  toy: {
    id: 'toy', src: '/media/scooby/photos/scooby-05-591.webp',
    srcSet: '/media/scooby/photos/scooby-05-480.webp 480w, /media/scooby/photos/scooby-05-591.webp 591w',
    width: 591, height: 648, alt: 'Scooby llevando su juguete naranja', caption: 'Esas pequeñas travesuras.',
    layout: 'wide', dominantColor: '#777068', position: '50% 43%',
  },
} satisfies Record<string, MemorialPhoto>

const v2 = {
  keepsake: {
    id: 'keepsake', src: '/media/scooby/v2/photos/memory-keepsake-1170.webp',
    srcSet: '/media/scooby/v2/photos/memory-keepsake-640.webp 640w, /media/scooby/v2/photos/memory-keepsake-960.webp 960w, /media/scooby/v2/photos/memory-keepsake-1170.webp 1170w',
    width: 1170, height: 1017, alt: 'Un retrato de Scooby junto a un recuerdo de madera', caption: 'Todo lo que permanece.',
    layout: 'full', dominantColor: '#7c7569', position: '50% 55%',
  },
  embrace: {
    id: 'embrace', src: '/media/scooby/v2/photos/memory-embrace-1018.webp',
    srcSet: '/media/scooby/v2/photos/memory-embrace-640.webp 640w, /media/scooby/v2/photos/memory-embrace-960.webp 960w, /media/scooby/v2/photos/memory-embrace-1018.webp 1018w',
    width: 1018, height: 1600, alt: 'Scooby recibiendo un beso mientras descansa', caption: 'Tu manera de querer.',
    layout: 'portrait', dominantColor: '#251d1b', position: '50% 48%',
  },
  paw: {
    id: 'paw', src: '/media/scooby/v2/photos/memory-paw-1058.webp',
    srcSet: '/media/scooby/v2/photos/memory-paw-640.webp 640w, /media/scooby/v2/photos/memory-paw-960.webp 960w, /media/scooby/v2/photos/memory-paw-1058.webp 1058w',
    width: 1058, height: 1280, alt: 'La patita de Scooby descansando sobre una mano', caption: 'Tu huella.',
    layout: 'detail', dominantColor: '#9b8c79', position: '50% 54%',
  },
  puppy: {
    id: 'puppy', src: '/media/scooby/v2/photos/memory-puppy-591.webp',
    srcSet: '/media/scooby/v2/photos/memory-puppy-480.webp 480w, /media/scooby/v2/photos/memory-puppy-591.webp 591w',
    width: 591, height: 1280, alt: 'Una fotografía antigua de Scooby cuando era pequeño, sostenido en brazos', caption: 'Desde tan pequeño.',
    layout: 'offset', dominantColor: '#b47779', position: '50% 46%',
  },
  joy: {
    id: 'joy', src: '/media/scooby/v2/photos/memory-joy-1170.webp',
    srcSet: '/media/scooby/v2/photos/memory-joy-640.webp 640w, /media/scooby/v2/photos/memory-joy-960.webp 960w, /media/scooby/v2/photos/memory-joy-1170.webp 1170w',
    width: 1170, height: 798, alt: 'Scooby y una persona compartiendo un momento alegre', caption: 'Las veces que nos hiciste reír.',
    layout: 'full', dominantColor: '#8d7666', position: '48% 50%',
  },
} satisfies Record<string, MemorialPhoto>

export const memorial = {
  pet: { name: 'Scooby', birthDate: '2018-10-03', passingDate: '2026-07-04' },
  recipient: { name: '', message: '' },
  media: {
    hero: original.celebration,
    featuredMemories: [
      original.closeup, v2.embrace, original.profile, v2.paw, original.celebration,
      v2.joy, original.toy, original.smile, v2.puppy, v2.keepsake,
    ] satisfies MemorialPhoto[],
    epilogue: v2.joy,
    timePortrait: v2.paw,
    videos: [
      { id: 'cerca', src: '/media/scooby/videos/scooby-memory.mp4', poster: original.closeup.src, title: 'Tan cerca.', ariaLabel: 'Video de Scooby descansando', aspectRatio: '784 / 480' },
      { id: 'celebracion', src: '/media/scooby/v2/videos/scooby-birthday-memory.mp4', poster: '/media/scooby/v2/videos/scooby-birthday-poster.jpg', title: 'Una luz para celebrar que llegaste.', ariaLabel: 'Recuerdo en video de una celebración para Scooby', aspectRatio: '736 / 480' },
    ] satisfies MemorialVideo[],
    audio: { src: '/media/scooby/v2/audio/scooby-theme.mp3', title: 'Música del recuerdo' },
  },
  birthday: { dateLabel: '03 de octubre', lights: 8 },
  copy: {
    intro: {
      first: 'Hay amores que no necesitan estar presentes para seguir acompañándonos.',
      second: 'Hoy quiero celebrar uno de ellos.',
    },
    hero: {
      line: 'Un amor que sigue dejando huellas.',
      years: '8 a\u00f1os de amor. Toda una vida de recuerdos.',
    },
    gift: [
      'Si pudiera regalarte algo hoy...', 'Te regalaría un día más.', 'Una mirada más.',
      'Una de esas sonrisas que solo él sabía provocar.', 'Pero como no puedo devolverte el tiempo...',
      'quise regalarte un lugar donde siempre puedas volver a encontrarlo.',
    ],
    letter: [
      'Scooby,',
      'gracias por cada mirada, cada ladrido, cada travesura, cada momento inesperado y cada día en el que hiciste todo un poquito más bonito.',
      'Fuiste compañía, alegría, familia y uno de esos amores que no necesitan palabras.',
      'Aunque ya no podamos abrazarte, sigues apareciendo en nuestras historias, en nuestras fotografías y en todos esos pequeños recuerdos que todavía nos hacen sonreír.',
      'Te extrañamos.',
      'Pero por encima de todo, agradecemos haber tenido la suerte de encontrarte.',
      'Feliz cumpleaños hasta el cielo.',
      'Siempre vas a ser nuestro Scooby.',
    ],
    epilogue: {
      first: 'No quería que el último recuerdo fuera triste.',
      second: 'Así que terminemos como él vivió...',
      final: 'haciéndonos sonreír.',
    },
  },
} as const
