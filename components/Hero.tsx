import Link from 'next/link'

export default function Hero() {
  return (
    <section style={{ background: 'var(--bg)', position: 'relative', overflow: 'hidden' }} className="py-20 md:py-28">
      <svg
        style={{ position: 'absolute', top: 0, right: 0, width: '60%', height: '100%', opacity: 0.08, pointerEvents: 'none' }}
        viewBox="0 0 600 600" fill="none"
      >
        <ellipse cx="400" cy="300" rx="350" ry="280" fill="var(--secondary)" />
      </svg>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
        <div>
          <h1 style={{ marginBottom: '1rem' }}>Veilig zijn.<br />Vrij blijven.</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '2rem', maxWidth: '480px' }}>
            Een Nederland waarin iedereen zich veilig genoeg voelt om écht zichzelf te zijn.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/standpunten"
              style={{ background: 'var(--accent)', color: '#fff', fontWeight: 600, padding: '12px 28px', borderRadius: '999px', fontSize: '1rem', display: 'inline-block' }}
              className="hover:opacity-90 transition-opacity"
            >
              Onze standpunten
            </Link>
            <Link
              href="/quiz"
              style={{ color: 'var(--primary)', border: '2px solid var(--primary)', fontWeight: 600, padding: '12px 28px', borderRadius: '999px', fontSize: '1rem', display: 'inline-block' }}
              className="hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Doe de quiz
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          {/* Logo placeholder — replace with <Image> if /public/logo.jpeg is added */}
          <div style={{ width: 320, height: 320, maxWidth: '100%', borderRadius: '1.5rem', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', textAlign: 'center', padding: '1rem' }}>Veilig & Vrij</span>
          </div>
        </div>
      </div>
    </section>
  )
}
