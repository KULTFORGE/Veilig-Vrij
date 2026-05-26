import { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  quote: string
}

export default function ValueCard({ icon: Icon, title, quote }: Props) {
  return (
    <div
      style={{
        background: 'var(--bg)',
        border: '1.5px solid var(--border)',
        borderRadius: '1rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{ color: 'var(--primary)' }}>
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <h3>{title}</h3>
      <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9375rem', fontStyle: 'italic' }}>{quote}</p>
    </div>
  )
}
