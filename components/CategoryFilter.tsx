'use client'
import { Categorie } from '@/lib/standpunten'

type FilterValue = 'alle' | Categorie

type Props = {
  active: FilterValue
  onChange: (value: FilterValue) => void
}

const tabs: { value: FilterValue; label: string }[] = [
  { value: 'alle', label: 'Alle' },
  { value: 'veilig', label: 'Veilig' },
  { value: 'vrij', label: 'Vrij' },
  { value: 'voor-iedereen', label: 'Voor iedereen' },
]

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
      {tabs.map(({ value, label }) => {
        const isActive = active === value
        return (
          <button
            key={value}
            onClick={() => onChange(value)}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              fontWeight: 600,
              fontSize: '0.9375rem',
              border: '1.5px solid',
              borderColor: isActive ? 'var(--primary)' : 'var(--border)',
              background: isActive ? 'var(--primary)' : 'transparent',
              color: isActive ? '#fff' : 'var(--text)',
              cursor: 'pointer',
              transition: 'all .15s',
              fontFamily: 'inherit',
            }}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
