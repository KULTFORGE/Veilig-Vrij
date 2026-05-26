import { Shield, Bird, Scale, HeartHandshake } from 'lucide-react'
import ValueCard from '@/components/ValueCard'

export default function OverOnsPage() {
  return (
    <>
      <section style={{ background: 'var(--bg-alt)' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 style={{ marginBottom: '3rem' }}>Wie wij zijn</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                In een samenleving waarin niet iedereen zich veilig voelt, kan niemand helemaal vrij zijn. Jongeren ervaren groepsdruk. Vrouwen voelen zich onveilig op straat. Mensen die anders zijn, krijgen niet altijd dezelfde kansen.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Wij zijn Veilig & Vrij. Een nieuwe partij die gelooft dat veiligheid en vrijheid niet tegenover elkaar staan — maar hand in hand horen te gaan. Niet door harder te straffen, maar door problemen te voorkomen. Niet door mensen uit te sluiten, maar door iedereen mee te nemen.
              </p>
            </div>
            <div>
              <p style={{ lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Onze partij staat voor jongeren die niet weten waar ze terecht kunnen. Voor vrouwen die zich onveilig voelen op straat. Voor mensen die zich buitengesloten voelen. En voor iedereen die gelooft dat een rechtvaardige samenleving mogelijk is.
              </p>
              <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
                Dat vraagt om een actieve overheid die kansen creëert en ongelijkheid aanpakt. Niet met lege beloftes, maar met concrete plannen en eerlijk beleid.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg)' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Waar wij in geloven</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ValueCard icon={Shield} title="Veiligheid" quote="Vrijheid is niet mogelijk zonder veiligheid. Iedereen verdient een leven zonder angst — op straat, thuis en online." />
            <ValueCard icon={Bird} title="Vrijheid" quote="Jij moet zelf kunnen kiezen wie je bent en hoe je leeft, zolang je daarmee niemand anders schaadt." />
            <ValueCard icon={Scale} title="Gelijkheid" quote="Gelijke kansen voor iedereen — ongeacht afkomst, geslacht, geaardheid of beperking. Verschillen maken de samenleving sterker, niet zwakker." />
            <ValueCard icon={HeartHandshake} title="Solidariteit" quote="We staan voor elkaar klaar. Binnen Nederland én internationaal. Wie kan helpen, helpt — en mag rekenen op hulp wanneer het zelf nodig is." />
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--bg-alt)' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Waar wij staan</h2>
            <p style={{ lineHeight: 1.8, marginBottom: '1rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Links:</strong> Wij geloven in een actieve overheid die kansen creëert en ongelijkheid aanpakt. Niet de markt, maar de samenleving als geheel bepaalt wat eerlijk is.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: '1rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Progressief:</strong> Wij streven naar een betere en eerlijkere samenleving. De wereld van morgen hoeft niet op die van gisteren te lijken.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text)' }}>Kosmopolitisch:</strong> Problemen kennen geen grenzen. Daarom werken wij samen met andere landen en staan wij voor internationale solidariteit.
            </p>
          </div>
          <div>
            <h2 style={{ marginBottom: '1.5rem' }}>Onze doelgroep</h2>
            <p style={{ lineHeight: 1.8, color: 'var(--text-muted)' }}>
              Wij zijn er voor jongeren die te maken hebben met groepsdruk en niet weten waar ze terecht kunnen. Voor vrouwen die zich onveilig voelen op straat, zeker als het donker wordt. Voor mensen die zich buitengesloten voelen vanwege hun afkomst, geaardheid of identiteit. En voor iedereen die gelooft dat veiligheid en vrijheid hand in hand horen te gaan — niet ten koste van elkaar.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
