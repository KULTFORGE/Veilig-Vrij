import {
  isInverted,
  invertScore,
  calculateScore,
  calculatePercentage,
  getInterpretation,
  getSliderLabel,
  getSliderEcho,
} from '../lib/quiz'

describe('invertScore', () => {
  it('inverts 3 to 0', () => expect(invertScore(3)).toBe(0))
  it('inverts 2 to 1', () => expect(invertScore(2)).toBe(1))
  it('inverts 1 to 2', () => expect(invertScore(1)).toBe(2))
  it('inverts 0 to 3', () => expect(invertScore(0)).toBe(3))
})

describe('calculateScore', () => {
  it('sums scores with stelling 4 inverted', () => {
    // answers: all "helemaal mee eens" (3) except stelling 4 gets inverted: 3→0
    const answers = [3, 3, 3, 3, 3, 3]
    // stelling 4 (index 3) is inverted: score becomes 0
    expect(calculateScore(answers)).toBe(15) // 3+3+3+0+3+3
  })
  it('returns 0 for all 0 answers', () => {
    // stelling 4 inverted: 0→3, rest 0
    expect(calculateScore([0, 0, 0, 0, 0, 0])).toBe(3)
  })
  it('returns max 18 when answers match V&V position', () => {
    // All "eens" except stelling 4 "helemaal niet mee eens" (0 → inverted to 3)
    expect(calculateScore([3, 3, 3, 0, 3, 3])).toBe(18)
  })
})

describe('calculatePercentage', () => {
  it('returns 100 for score 18', () => expect(calculatePercentage(18)).toBe(100))
  it('returns 0 for score 0', () => expect(calculatePercentage(0)).toBe(0))
  it('rounds to nearest integer', () => expect(calculatePercentage(9)).toBe(50))
  it('rounds 83.3... to 83', () => expect(calculatePercentage(15)).toBe(83))
})

describe('getInterpretation', () => {
  it('returns welkom for 80+', () => {
    expect(getInterpretation(80)).toContain('Welkom in de club')
    expect(getInterpretation(100)).toContain('Welkom in de club')
  })
  it('returns meeste punten for 60-79', () => {
    expect(getInterpretation(60)).toContain('meeste punten')
    expect(getInterpretation(79)).toContain('meeste punten')
  })
  it('returns sommige vlakken for 40-59', () => {
    expect(getInterpretation(40)).toContain('sommige vlakken')
    expect(getInterpretation(59)).toContain('sommige vlakken')
  })
  it('returns visies verschillen for 0-39', () => {
    expect(getInterpretation(0)).toContain('visies verschillen')
    expect(getInterpretation(39)).toContain('visies verschillen')
  })
})

describe('getSliderLabel', () => {
  it('returns veiligheid message for 0-30', () => {
    expect(getSliderLabel(0)).toContain('Veiligheid als basis')
    expect(getSliderLabel(30)).toContain('Veiligheid als basis')
  })
  it('returns balans message for 31-69', () => {
    expect(getSliderLabel(31)).toContain('Beide even belangrijk')
    expect(getSliderLabel(50)).toContain('Beide even belangrijk')
    expect(getSliderLabel(69)).toContain('Beide even belangrijk')
  })
  it('returns vrijheid message for 70-100', () => {
    expect(getSliderLabel(70)).toContain('Vrijheid als fundament')
    expect(getSliderLabel(100)).toContain('Vrijheid als fundament')
  })
})

describe('getSliderEcho', () => {
  it('echoes veiligheid for 0-30', () => {
    expect(getSliderEcho(0)).toContain('veiligheid')
    expect(getSliderEcho(30)).toContain('veiligheid')
  })
  it('echoes balans for 31-69', () => {
    expect(getSliderEcho(50)).toContain('balans')
  })
  it('echoes vrijheid for 70-100', () => {
    expect(getSliderEcho(70)).toContain('vrijheid')
    expect(getSliderEcho(100)).toContain('vrijheid')
  })
})

describe('isInverted', () => {
  it('returns true for index 3', () => expect(isInverted(3)).toBe(true))
  it('returns false for index 0', () => expect(isInverted(0)).toBe(false))
  it('returns false for index 5', () => expect(isInverted(5)).toBe(false))
})

describe('calculatePercentage clamping', () => {
  it('clamps to 100 for score above max', () => expect(calculatePercentage(20)).toBe(100))
  it('clamps to 0 for negative score', () => expect(calculatePercentage(-1)).toBe(0))
})
