import Image from 'next/image'

const ministeries = [
  {
    naam: 'Justitie & Veiligheid',
    budget: '~€26 miljard',
    richting: 'omhoog',
    label: 'Verhoogd',
    uitleg:
      'Veiligheid is veruit het belangrijkste thema van onze partij. Het extra geld gaat naar meer politiecapaciteit, uitbreiding van cameratoezicht, strengere aanpak van online criminaliteit door nieuwere technieken, betere en toegankelijkere hulpcentra, meer straatverlichting en onafhankelijke toezichthouders voor privacybescherming rondom dataverzamelingen.',
  },
  {
    naam: 'Volksgezondheid, Welzijn & Sport',
    budget: '~€127 miljard',
    richting: 'omhoog',
    label: 'Verhoogd',
    uitleg:
      'Goede zorg moet voor iedereen beschikbaar zijn. Het extra geld gaat vooral naar jeugdzorg, psychologische hulp, meer zorgpersoneel en het verkorten van wachtlijsten. We willen dat mensen sneller de juiste hulp krijgen en dat zorgmedewerkers genoeg tijd en middelen hebben om hun werk goed te doen.',
  },
  {
    naam: 'Sociale Zaken & Werkgelegenheid',
    budget: '~€128 miljard',
    richting: 'omhoog',
    label: 'Verhoogd',
    uitleg:
      'Wij willen kwetsbare mensen beter ondersteunen. Het extra geld gaat naar hulp bij schulden, ondersteuning van jongeren met problemen thuis, begeleiding van slachtoffers van geweld en betere hulp tegen armoede. Door meer te investeren in sociale ondersteuning hopen we dat mensen sneller hulp krijgen en minder lang met problemen blijven zitten.',
  },
  {
    naam: 'Onderwijs, Cultuur & Wetenschap',
    budget: '~€58 miljard',
    richting: 'omhoog',
    label: 'Verhoogd',
    uitleg:
      'Onderwijs speelt een belangrijke rol in het voorkomen van problemen en het bevorderen van kansengelijkheid. Het extra geld gaat naar kleinere klassen, gratis begeleiding voor leerlingen die dat nodig hebben, lessen over online veiligheid en discriminatie, en trainingen voor docenten.',
  },
  {
    naam: 'Binnenlandse Zaken & Koninkrijksrelaties',
    budget: '~€7 miljard',
    richting: 'omhoog',
    label: 'Licht verhoogd',
    uitleg:
      'Wij vinden veilige buurten en meer sociale veiligheid erg belangrijk. Het extra geld gaat vooral naar gemeenten, wijkprojecten zoals buurtpreventieteams en jongerenontmoetingsplekken, en het verbeteren van de leefbaarheid in buurten waar veel overlast is, denk aan achterstandswijken.',
  },
  {
    naam: 'Infrastructuur & Waterstaat',
    budget: '~€17 miljard',
    richting: 'omhoog',
    label: 'Licht verhoogd',
    uitleg:
      'Veilige openbare ruimtes dragen bij aan een veiliger gevoel in de samenleving. Het extra geld gaat naar betere straatverlichting, veiligere stations en het aanpakken van onveilige plekken in steden en wijken. Zo voelen mensen zich fijner en veiliger op straat en hebben gemeenten genoeg middelen om hun buurt te verbeteren.',
  },
  {
    naam: 'Defensie',
    budget: '~€22 miljard',
    richting: 'omlaag',
    label: 'Verlaagd',
    uitleg:
      'Wij richten ons meer op veiligheid binnen Nederland dan op militaire uitbreiding. Daarom willen wij minder investeren in nieuw militair materieel en internationale missies.',
  },
  {
    naam: 'Buitenlandse Zaken',
    budget: '~€10 miljard',
    richting: 'omlaag',
    label: 'Verlaagd',
    uitleg:
      'Onze partij richt zich vooral op problemen binnen Nederland. Hoewel wij ons kosmopolitisch opstellen, past minder uitgeven aan ontwikkelingshulp en internationale projecten die minder direct invloed hebben op de veiligheid in Nederland simpelweg beter in het budget.',
  },
  {
    naam: 'Economische Zaken & Klimaat',
    budget: '~€3 miljard',
    richting: 'omlaag',
    label: 'Verlaagd',
    uitleg:
      'Wij vinden veiligheid en zorg belangrijker dan economische groei. Daarom willen wij minder subsidies geven aan grote bedrijven en meer investeren in sociale zekerheid. Grote bedrijven hebben zelf genoeg middelen om te investeren, terwijl sociale voorzieningen extra steun nodig hebben.',
  },
  {
    naam: 'Landbouw, Visserij, Voedselzekerheid & Natuur',
    budget: '~€2 miljard',
    richting: 'omlaag',
    label: 'Verlaagd',
    uitleg:
      'Dit onderwerp staat minder centraal binnen onze partij. Door minder geld te steken in grote landbouwprojecten komt er meer ruimte voor investeringen die mensen direct helpen, zoals goede zorg en veilige buurten. Zo proberen we het geld eerlijker te verdelen en beter aan te sluiten op wat nu het meest nodig is.',
  },
]

export default function MiljoenennotaPage() {
  return (
    <>
      <section style={{ background: 'var(--bg-alt)' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 style={{ marginBottom: '1rem' }}>Miljoenennota 2026</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '640px' }}>
            Onze financiële keuzes per ministerie — wat gaat omhoog, wat omlaag en waarom.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--bg)' }} className="py-10">
        <div className="max-w-6xl mx-auto px-4">
          <Image
            src="/Miljoenennota 2026.png"
            alt="Miljoenennota 2026 overzicht"
            width={1454}
            height={1025}
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
            priority
          />
        </div>
      </section>

      <section style={{ background: 'var(--bg-alt)' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 style={{ marginBottom: '0.5rem' }}>Toelichting per ministerie</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '3rem', maxWidth: '600px' }}>
            Hieronder lees je per ministerie waarom wij voor deze budgetkeuze hebben gekozen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ministeries.map((m) => {
              const omhoog = m.richting === 'omhoog'
              return (
                <div
                  key={m.naam}
                  style={{
                    background: 'var(--bg)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    borderLeft: `4px solid ${omhoog ? 'var(--secondary)' : '#E05A3A'}`,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, margin: 0 }}>{m.naam}</h3>
                    <span
                      style={{
                        flexShrink: 0,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '0.8rem',
                        fontWeight: 700,
                        padding: '3px 10px',
                        borderRadius: '999px',
                        background: omhoog ? 'rgba(43,168,136,0.12)' : 'rgba(224,90,58,0.12)',
                        color: omhoog ? 'var(--secondary)' : '#E05A3A',
                      }}
                    >
                      {omhoog ? '▲' : '▼'} {m.label}
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      color: omhoog ? 'var(--secondary)' : '#E05A3A',
                    }}
                  >
                    {m.budget}
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.65, margin: 0 }}>
                    {m.uitleg}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
