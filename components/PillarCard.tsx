import { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  body: string
}

export default function PillarCard({ icon: Icon, title, body }: Props) {
  return (
    <div
      style={{
        background: 'var(--bg-alt)',
        border: '1.5px solid var(--border)',
        borderRadius: '1rem',
        padding: '2rem',
        transition: 'transform .2s, border-color .2s, box-shadow .2s',
      }}
      className="hover:shadow-md hover:-translate-y-1 hover:border-[var(--accent)]"
    >
      <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}>
        <Icon size={28} strokeWidth={1.75} />
      </div>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{body}</p>
    </div>
  )
}
