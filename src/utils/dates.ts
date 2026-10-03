const calendarDate = (iso: string) => {
  const [year, month, day] = iso.split('-').map(Number)
  return new Date(year, month - 1, day, 12)
}

const sameCalendarDay = (date: Date, month: number, day: number, year?: number) =>
  date.getMonth() + 1 === month && date.getDate() === day && (year === undefined || date.getFullYear() === year)

export const calculateAge = (birthIso: string, onDate = new Date()) => {
  const birth = calendarDate(birthIso)
  let age = onDate.getFullYear() - birth.getFullYear()
  if (onDate.getMonth() < birth.getMonth() || (onDate.getMonth() === birth.getMonth() && onDate.getDate() < birth.getDate())) age--
  return Math.max(0, age)
}

export const isBirthday = (date = new Date()) => sameCalendarDay(date, 10, 4)
export const isPassingAnniversary = (date = new Date()) => sameCalendarDay(date, 7, 3)
export const isThreeMonthMemorial = (date = new Date()) => sameCalendarDay(date, 10, 3, 2026)

export const timeSincePassing = (passingIso: string, now = new Date()) => {
  const start = calendarDate(passingIso)
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12)
  if (end < start) return { years: 0, months: 0, days: 0, label: 'El tiempo compartido permanece aquí.' }

  let years = end.getFullYear() - start.getFullYear()
  let months = end.getMonth() - start.getMonth()
  let days = end.getDate() - start.getDate()
  if (days < 0) {
    months--
    days += new Date(end.getFullYear(), end.getMonth(), 0).getDate()
  }
  if (months < 0) { years--; months += 12 }

  const parts = [
    years ? `${years} ${years === 1 ? 'año' : 'años'}` : '',
    months ? `${months} ${months === 1 ? 'mes' : 'meses'}` : '',
    days || (!years && !months) ? `${days} ${days === 1 ? 'día' : 'días'}` : '',
  ].filter(Boolean)
  return { years, months, days, label: parts.join(', ') }
}

export const getBirthdayMessage = (date = new Date()) => {
  if (sameCalendarDay(date, 10, 4, 2026)) return 'Hoy cumplirías 10 años.'
  if (isBirthday(date)) return 'Hoy celebramos el día en que llegaste.'
  return 'Celebramos el día en que llegaste.'
}

export const getContextualDateMessage = (date = new Date()) => {
  if (isThreeMonthMemorial(date)) return 'Hoy se cumplen 3 meses desde que te fuiste.'
  if (sameCalendarDay(date, 10, 4, 2026)) return 'Hoy cumplirías 10 años. Feliz cumpleaños hasta el cielo, Scooby.'
  return ''
}
