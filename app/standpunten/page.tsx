'use client'
import { useState } from 'react'
import { standpunten, Categorie } from '@/lib/standpunten'
import StandpuntCard from '@/components/StandpuntCard'
import CategoryFilter from '@/components/CategoryFilter'

type FilterValue = 'alle' | Categorie

export default function StandpuntenPage() {
  const [filter, setFilter] = useState<FilterValue>('alle')
  const filtered = filter === 'alle' ? standpunten : standpunten.filter(s => s.categorie === filter)

  return (
    <>
      <section style={{ background: 'var(--bg-alt)' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 style={{ marginBottom: '1rem' }}>Onze standpunten</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '640px' }}>
            Concreet, eerlijk en doelgericht. Zo bouwen wij aan een Nederland waarin veiligheid en vrijheid samen kunnen.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <CategoryFilter active={filter} onChange={setFilter} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map(s => <StandpuntCard key={s.id} standpunt={s} />)}
          </div>
        </div>
      </section>
    </>
  )
}
