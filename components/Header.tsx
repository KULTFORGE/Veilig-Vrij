'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Home' },
  { href: '/standpunten', label: 'Standpunten' },
  { href: '/over-ons', label: 'Over ons' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/miljoenennota', label: 'Miljoenennota', badge: 'snel' },
]

export default function Header() {
  const pathname = usePathname()
  return (
    <header
      style={{ background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
      className="sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)' }} />
          <span style={{ color: 'var(--text)', fontWeight: 800, fontSize: '1rem' }}>Veilig & Vrij</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 flex-1">
          {links.map(({ href, label, badge }) => {
            const active = pathname === href
            const isMuted = !!badge
            return (
              <Link
                key={href}
                href={href}
                style={{
                  color: isMuted ? 'var(--text-muted)' : active ? 'var(--primary)' : 'var(--text)',
                  fontWeight: active ? 600 : 400,
                  fontSize: '0.9375rem',
                  transition: 'color .15s',
                }}
                className="hover:text-[var(--accent)] flex items-center gap-1"
              >
                {label}
                {badge && (
                  <span style={{ background: 'var(--secondary)', color: '#fff', fontSize: '9px', fontWeight: 700, padding: '2px 5px', borderRadius: '99px', letterSpacing: '.04em', textTransform: 'uppercase' }}>
                    {badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <Link
          href="/quiz"
          style={{ background: 'var(--accent)', color: '#fff', fontWeight: 600, fontSize: '0.875rem', padding: '8px 18px', borderRadius: '999px', marginLeft: 'auto', whiteSpace: 'nowrap' }}
          className="hidden md:block hover:opacity-90 transition-opacity"
        >
          Doe mee
        </Link>
      </div>
    </header>
  )
}
