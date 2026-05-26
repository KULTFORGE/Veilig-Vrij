import Link from 'next/link'

export default function CTABanner() {
  return (
    <section style={{ background: 'var(--primary)' }} className="py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Past Veilig & Vrij bij jou?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.125rem', marginBottom: '2rem' }}>
          Doe de quiz van 6 vragen en kom erachter.
        </p>
        <Link
          href="/quiz"
          style={{ background: 'var(--accent)', color: '#fff', fontWeight: 700, padding: '14px 32px', borderRadius: '999px', fontSize: '1rem', display: 'inline-block' }}
          className="hover:opacity-90 transition-opacity"
        >
          Start de quiz
        </Link>
      </div>
    </section>
  )
}
