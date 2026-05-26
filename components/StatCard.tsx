type Props = { stat: string; label: string }

export default function StatCard({ stat, label }: Props) {
  return (
    <div style={{ textAlign: 'center', padding: '1.5rem', borderLeft: '3px solid var(--primary)' }}>
      <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>{stat}</p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>{label}</p>
    </div>
  )
}
