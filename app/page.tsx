import { Shield, Bird, Users } from 'lucide-react'
import Hero from '@/components/Hero'
import PillarCard from '@/components/PillarCard'
import StatCard from '@/components/StatCard'
import CTABanner from '@/components/CTABanner'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section style={{ background: 'var(--bg)' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Waar wij voor staan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PillarCard icon={Shield} title="Veilig" body="Veiligheid op straat, thuis en online. Voor iedereen." />
            <PillarCard icon={Bird} title="Vrij" body="Zelf keuzes maken. Zichzelf zijn. Zonder anderen te schaden." />
            <PillarCard icon={Users} title="Gelijk" body="Gelijke kansen, ongeacht waar je vandaan komt of wie je bent." />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-alt)' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Waarom een nieuwe partij?</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.8 }}>
              In een samenleving waarin niet iedereen zich veilig voelt, kan niemand helemaal vrij zijn. Jongeren ervaren groepsdruk. Vrouwen voelen zich onveilig op straat. Mensen die anders zijn, krijgen niet altijd dezelfde kansen. Wij willen het anders. Niet door strenger straffen, maar door problemen te voorkomen.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <StatCard stat="1 op de 3" label="jongeren ervaart wekelijks groepsdruk" />
            <StatCard stat="62%" label="van de vrouwen voelt zich 's avonds onveilig op straat" />
            <StatCard stat="1 op de 5" label="jongeren met migratieachtergrond ervaart discriminatie" />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
