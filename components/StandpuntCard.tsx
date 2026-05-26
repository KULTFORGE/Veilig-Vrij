import * as LucideIcons from 'lucide-react'
import { LucideProps } from 'lucide-react'
import { Standpunt, Categorie } from '@/lib/standpunten'

const categoryColors: Record<Categorie, string> = {
  veilig: 'var(--primary)',
  vrij: 'var(--secondary)',
  'voor-iedereen': 'var(--accent)',
}

const categoryLabels: Record<Categorie, string> = {
  veilig: 'Veilig',
  vrij: 'Vrij',
  'voor-iedereen': 'Voor iedereen',
}

type Props = { standpunt: Standpunt }

export default function StandpuntCard({ standpunt }: Props) {
  const color = categoryColors[standpunt.categorie]
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<LucideProps>>)[standpunt.icoon]

  return (
    <div
      style={{
        background: 'var(--bg-alt)',
        border: '1.5px solid var(--border)',
        borderRadius: '1rem',
        padding: '1.75rem',
        transition: 'transform .2s, border-color .2s, box-shadow .2s',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
      className="hover:shadow-md hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {IconComponent && <IconComponent size={22} strokeWidth={1.75} style={{ color }} />}
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color, textTransform: 'uppercase', letterSpacing: '.06em' }}>
          {categoryLabels[standpunt.categorie]}
        </span>
      </div>
      <h3 style={{ fontSize: '1.125rem', marginBottom: 0 }}>{standpunt.titel}</h3>
      <div>
        <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '2px' }}>Wat wij willen</p>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{standpunt.wat}</p>
      </div>
      <div>
        <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '2px' }}>Hoe</p>
        <p style={{ fontSize: '0.9375rem', lineHeight: 1.6 }}>{standpunt.hoe}</p>
      </div>
    </div>
  )
}
