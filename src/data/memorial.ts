export type MemorialPhoto = {
  src: string
  srcSet: string
  width: number
  height: number
  alt: string
  caption: string
  position?: string
}

export const memorial = {
  pet: {
    name: 'Scooby',
    birthDate: '2016-10-04',
    passingDate: '2026-07-03',
  },
  recipient: {
    name: '',
    message: '',
  },
  media: {
    hero: '/media/scooby/photos/scooby-01-1170.webp',
    photos: [
      {
        src: '/media/scooby/photos/scooby-01-1170.webp',
        srcSet: '/media/scooby/photos/scooby-01-720.webp 720w, /media/scooby/photos/scooby-01-1170.webp 1170w',
        width: 1170, height: 887,
        alt: 'Scooby sonriendo junto a dos globos', caption: 'Tu sonrisa.', position: '50% 42%',
      },
      {
        src: '/media/scooby/photos/scooby-02-591.webp',
        srcSet: '/media/scooby/photos/scooby-02-480.webp 480w, /media/scooby/photos/scooby-02-591.webp 591w',
        width: 591, height: 649,
        alt: 'Scooby mirando a la cámara con expresión alegre', caption: 'Esa alegría tan tuya.',
      },
      {
        src: '/media/scooby/photos/scooby-03-549.webp',
        srcSet: '/media/scooby/photos/scooby-03-480.webp 480w, /media/scooby/photos/scooby-03-549.webp 549w',
        width: 549, height: 1009,
        alt: 'Primer plano de la mirada alegre de Scooby', caption: 'Tu mirada.',
      },
      {
        src: '/media/scooby/photos/scooby-04-561.webp',
        srcSet: '/media/scooby/photos/scooby-04-480.webp 480w, /media/scooby/photos/scooby-04-561.webp 561w',
        width: 561, height: 908,
        alt: 'Scooby de perfil en un momento tranquilo', caption: 'Esos días.',
      },
      {
        src: '/media/scooby/photos/scooby-05-591.webp',
        srcSet: '/media/scooby/photos/scooby-05-480.webp 480w, /media/scooby/photos/scooby-05-591.webp 591w',
        width: 591, height: 648,
        alt: 'Scooby llevando su juguete naranja', caption: 'Tus travesuras.',
      },
    ] satisfies MemorialPhoto[],
    video: '/media/scooby/videos/scooby-memory.mp4',
    music: '',
  },
  copy: {
    intro: {
      first: 'Hay amores que no necesitan estar presentes para seguir acompañándonos.',
      second: 'Hoy quiero celebrar uno de ellos.',
    },
    hero: {
      line: 'Un amor que sigue dejando huellas.',
      years: '10 años de amor. Toda una vida de recuerdos.',
    },
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
  },
} as const
