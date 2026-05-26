export const INVERTED_INDICES = new Set([3]) // stelling 4 (index 3) is inverted
export function isInverted(index: number): boolean {
  return INVERTED_INDICES.has(index)
}

export const MAX_SCORE = 18 // 6 questions × 3 max points

export function invertScore(score: number): number {
  return 3 - score
}

export function calculateScore(answers: number[]): number {
  return answers.reduce((total, answer, index) => {
    const score = isInverted(index) ? invertScore(answer) : answer
    return total + score
  }, 0)
}

export function calculatePercentage(score: number): number {
  return Math.min(100, Math.max(0, Math.round((score / MAX_SCORE) * 100)))
}

export function getInterpretation(percentage: number): string {
  if (percentage >= 80) return "Je en V&V zitten op één lijn. Welkom in de club."
  if (percentage >= 60) return "Op de meeste punten zijn we het eens. Lees vooral verder."
  if (percentage >= 40) return "Op sommige vlakken denken we hetzelfde. Misschien verandert dat als je onze standpunten leest."
  return "Onze visies verschillen — maar lees gerust verder. Misschien valt er meer overlap dan je denkt."
}

export function getSliderLabel(value: number): string {
  if (value <= 30) return "Veiligheid als basis — zonder veiligheid is vrijheid leeg."
  if (value <= 69) return "Beide even belangrijk — precies zoals V&V het ziet."
  return "Vrijheid als fundament — een vrije samenleving is vanzelf veiliger."
}

export function getSliderEcho(value: number): string {
  if (value <= 30) return "Jij begon met veiligheid als prioriteit."
  if (value <= 69) return "Jij begon met een balans als prioriteit."
  return "Jij begon met vrijheid als prioriteit."
}
