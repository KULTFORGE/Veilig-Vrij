'use client'
import { useState, useEffect, useRef } from 'react'
import { Shield, Bird } from 'lucide-react'
import Link from 'next/link'
import { calculateScore, calculatePercentage, getInterpretation, getSliderLabel, getSliderEcho } from '@/lib/quiz'

const stellingen = [
  "Op donkere plekken in mijn buurt zouden meer lantaarnpalen en camera's moeten komen.",
  "Scholen moeten verplicht lessen geven over online gevaren en respect.",
  "Bij ernstige zedendelicten horen strengere minimumstraffen.",
  "De overheid mag mijn data verzamelen als dat de veiligheid verhoogt.",
  "Iedereen verdient gelijke kansen, ook als dat de overheid extra geld kost.",
  "Nederland moet andere landen helpen, ook als wij het zelf moeilijk hebben.",
]

const antwoorden = [
  { label: 'Helemaal mee eens', value: 3 },
  { label: 'Mee eens', value: 2 },
  { label: 'Niet mee eens', value: 1 },
  { label: 'Helemaal niet mee eens', value: 0 },
]

type State = 'start' | 'slider' | 'question' | 'result'

export default function Quiz() {
  const [state, setState] = useState<State>('start')
  const [sliderValue, setSliderValue] = useState(50)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [visible, setVisible] = useState(true)
  const [displayPercent, setDisplayPercent] = useState(0)
  const finalPercent = useRef(0)

  function handleAnswer(value: number) {
    setVisible(false)
    setTimeout(() => {
      const next = [...answers, value]
      setAnswers(next)
      if (questionIndex < stellingen.length - 1) {
        setQuestionIndex(q => q + 1)
      } else {
        const score = calculateScore(next)
        finalPercent.current = calculatePercentage(score)
        setState('result')
      }
      setVisible(true)
    }, 200)
  }

  function handleReset() {
    setState('start')
    setSliderValue(50)
    setQuestionIndex(0)
    setAnswers([])
    setDisplayPercent(0)
    setVisible(true)
  }

  useEffect(() => {
    if (state !== 'result') return
    const target = finalPercent.current
    const start = Date.now()
    const duration = 1000
    function step() {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      setDisplayPercent(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [state])

  if (state === 'start') {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 1rem', maxWidth: '560px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '1rem' }}>Past Veilig &amp; Vrij bij jou?</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem' }}>
          6 stellingen. 2 minuten. Eerlijk antwoorden.
        </p>
        <button
          onClick={() => setState('slider')}
          style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '14px 36px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
          className="hover:opacity-90 transition-opacity"
        >
          Start
        </button>
      </div>
    )
  }

  if (state === 'slider') {
    return (
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '4rem 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Waar sta jij?</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Sleep de slider naar waar jij staat.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9375rem' }}>
              <Shield size={18} /> Veiligheid
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary)', fontWeight: 700, fontSize: '0.9375rem' }}>
              Vrijheid <Bird size={18} />
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={sliderValue}
            onChange={e => setSliderValue(Number(e.target.value))}
            style={{ width: '100%', accentColor: 'var(--primary)', height: '6px', cursor: 'pointer' }}
          />
        </div>

        <p style={{ textAlign: 'center', color: 'var(--text)', fontSize: '1rem', minHeight: '3rem', lineHeight: 1.6, marginBottom: '2.5rem' }}>
          {getSliderLabel(sliderValue)}
        </p>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setState('question')}
            style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '1rem', padding: '12px 32px', borderRadius: '999px', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
            className="hover:opacity-90 transition-opacity"
          >
            Volgende
          </button>
        </div>
      </div>
    )
  }

  if (state === 'question') {
    const progress = ((questionIndex + 1) / stellingen.length) * 100
    return (
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '4rem 1rem' }}>
        <div style={{ height: '6px', background: 'var(--border)', borderRadius: '999px', marginBottom: '2rem', overflow: 'hidden' }}>
          <div
            style={{ height: '100%', background: 'var(--primary)', borderRadius: '999px', width: `${progress}%`, transition: 'width 0.4s ease' }}
          />
        </div>

        <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Vraag {questionIndex + 1} van {stellingen.length}
        </p>

        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(16px)',
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
        >
          <h2 style={{ fontSize: '1.375rem', lineHeight: 1.4, marginBottom: '2rem' }}>
            &ldquo;{stellingen[questionIndex]}&rdquo;
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {antwoorden.map(({ label, value }) => (
              <button
                key={label}
                onClick={() => handleAnswer(value)}
                style={{
                  padding: '14px 18px',
                  border: '1.5px solid var(--border)',
                  borderRadius: '12px',
                  background: 'var(--bg)',
                  color: 'var(--text)',
                  fontWeight: 500,
                  fontSize: '1rem',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'border-color .15s, background .15s',
                  fontFamily: 'inherit',
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget
                  t.style.borderColor = 'var(--primary)'
                  t.style.background = 'var(--bg-alt)'
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget
                  t.style.borderColor = 'var(--border)'
                  t.style.background = 'var(--bg)'
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // state === 'result'
  const interpretation = getInterpretation(finalPercent.current)
  const echo = getSliderEcho(sliderValue)

  return (
    <div style={{ background: 'var(--primary)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 1rem' }}>
      <div style={{ textAlign: 'center', maxWidth: '520px' }}>
        <p style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Jouw match
        </p>
        <p style={{ fontSize: '5rem', fontWeight: 800, color: '#fff', lineHeight: 1, marginBottom: '0.25rem' }}>
          {displayPercent}<span style={{ fontSize: '2.5rem' }}>%</span>
        </p>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600, marginBottom: '1.5rem' }}>Veilig &amp; Vrij</p>

        <div style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '0.75rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{interpretation}</p>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', marginBottom: '2rem' }}>{echo}</p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/standpunten"
            style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700, fontSize: '0.9375rem', padding: '12px 24px', borderRadius: '999px', display: 'inline-block' }}
            className="hover:opacity-90 transition-opacity"
          >
            Lees onze standpunten
          </Link>
          <button
            onClick={handleReset}
            style={{ background: 'transparent', color: 'rgba(255,255,255,0.8)', border: '1.5px solid rgba(255,255,255,0.3)', fontWeight: 600, fontSize: '0.9375rem', padding: '12px 24px', borderRadius: '999px', cursor: 'pointer', fontFamily: 'inherit' }}
            className="hover:border-white transition-colors"
          >
            Doe opnieuw
          </button>
        </div>
      </div>
    </div>
  )
}
