import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', color: 'var(--text)' }}>
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--primary)' }} />
            <span style={{ fontWeight: 800 }}>Veilig & Vrij</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
            Een Nederland waarin iedereen zich veilig genoeg voelt om écht zichzelf te zijn.
          </p>
        </div>

        <div>
          <p style={{ fontWeight: 700, marginBottom: '12px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-muted)' }}>Navigatie</p>
          <div className="flex flex-col gap-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/standpunten', label: 'Standpunten' },
              { href: '/over-ons', label: 'Over ons' },
              { href: '/quiz', label: 'Quiz' },
              { href: '/miljoenennota', label: 'Miljoenennota' },
            ].map(({ href, label }) => (
              <Link key={href} href={href} style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }} className="hover:text-[var(--primary)] transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontWeight: 700, marginBottom: '12px', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '.05em', color: 'var(--text-muted)' }}>Blijf op de hoogte</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', marginBottom: '12px' }}>Ontvang updates over onze standpunten en campagne.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="jouw@email.nl"
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1.5px solid var(--border)', background: 'var(--bg)', color: 'var(--text)', fontSize: '0.875rem' }}
            />
            <button style={{ background: 'var(--primary)', color: '#fff', fontWeight: 600, fontSize: '0.875rem', padding: '8px 14px', borderRadius: '8px' }}>
              Meld aan
            </button>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)', textAlign: 'center', padding: '16px', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        © 2026 Veilig & Vrij · Fictieve partij voor schoolopdracht
      </div>
    </footer>
  )
}
