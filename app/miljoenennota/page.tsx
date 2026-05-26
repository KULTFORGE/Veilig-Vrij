import Link from 'next/link'

export default function MiljoenennotaPage() {
  return (
    <section style={{ background: 'var(--bg)', minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Miljoenennota</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2rem' }}>
          Komt binnenkort — wij werken aan ons financieel plan.
        </p>
        <Link
          href="/"
          style={{ color: 'var(--primary)', fontWeight: 600, border: '2px solid var(--primary)', padding: '10px 24px', borderRadius: '999px', display: 'inline-block' }}
          className="hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
        >
          Terug naar home
        </Link>
      </div>
    </section>
  )
}
