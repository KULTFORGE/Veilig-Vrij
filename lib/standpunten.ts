export type Categorie = 'veilig' | 'vrij' | 'voor-iedereen'

export type Standpunt = {
  id: number
  titel: string
  categorie: Categorie
  icoon: string
  wat: string
  hoe: string
}

export const standpunten: Standpunt[] = [
  {
    id: 1,
    titel: 'Veiligheid zonder privacy-inbreuk',
    categorie: 'veilig',
    icoon: 'ShieldCheck',
    wat: 'Een veilige samenleving waarin jouw privacy gerespecteerd wordt.',
    hoe: 'Duidelijke regels over wat de overheid wel en niet mag, plus onafhankelijke toezichthouders op dataverzameling.',
  },
  {
    id: 2,
    titel: 'Veilig op straat, dag en nacht',
    categorie: 'veilig',
    icoon: 'Lamp',
    wat: 'Dat jij je veilig voelt in je eigen buurt, ook in het donker.',
    hoe: 'Meer straatverlichting en cameratoezicht op grimmige plekken, plus een toegankelijk online hulpcentrum voor meldingen.',
  },
  {
    id: 3,
    titel: 'Strengere straffen voor zedendelicten',
    categorie: 'veilig',
    icoon: 'Gavel',
    wat: 'Een onvoorwaardelijke minimumstraf van 1 jaar voor ontuchtige handelingen, zowel bij minder- als meerderjarige slachtoffers.',
    hoe: 'Een wetsvoorstel indienen en steun zoeken bij andere partijen om een meerderheid te krijgen.',
  },
  {
    id: 4,
    titel: 'Jongeren van straat, in buurthuizen',
    categorie: 'veilig',
    icoon: 'Users',
    wat: 'Minder overlast en criminaliteit door jongeren een plek en een doel te geven.',
    hoe: 'Investeren in buurthuizen, jongerenwerkers en activiteiten in groepsverband.',
  },
  {
    id: 5,
    titel: 'Minder onnodige regels',
    categorie: 'vrij',
    icoon: 'Wind',
    wat: 'Zoveel mogelijk vrijheid in het dagelijks leven, zonder anderen te schaden.',
    hoe: 'Bestaande wetgeving regelmatig evalueren en schrappen wat niet meer nodig is.',
  },
  {
    id: 6,
    titel: 'Educatie tegen online en offline gevaar',
    categorie: 'vrij',
    icoon: 'BookOpen',
    wat: 'Kinderen en jongeren die weten hoe ze zichzelf veilig houden, online én op straat.',
    hoe: 'Verplichte informatieve lessen op scholen, met nieuw lesmateriaal en bijscholing voor docenten.',
  },
  {
    id: 7,
    titel: 'Einde aan discriminatie op de werkvloer',
    categorie: 'vrij',
    icoon: 'Scale',
    wat: 'Dat organisaties eerlijk en zonder vooroordelen handelen bij sollicitaties en in teams.',
    hoe: 'Verplichte trainingen voor personeel, diversiteitsdoelen voor teams, en strengere controle op ongelijke behandeling.',
  },
  {
    id: 8,
    titel: 'Gelijke kansen in het onderwijs',
    categorie: 'voor-iedereen',
    icoon: 'GraduationCap',
    wat: 'Dat het niet uitmaakt op welke school je zit — iedereen verdient dezelfde kansen.',
    hoe: 'Extra begeleiding voor wie het nodig heeft, kleinere klassen, en investeren in scholen in armere wijken.',
  },
  {
    id: 9,
    titel: 'Ondersteuning voor wie het zwaar heeft',
    categorie: 'voor-iedereen',
    icoon: 'HeartHandshake',
    wat: 'Betere hulp voor mensen met een beperking, slachtoffers van geweld, mensen in armoede en jongeren met thuisproblemen.',
    hoe: 'Meer geld voor jeugdzorg, gratis psychologische hulp, toegankelijke schuldhulp en veilige meldpunten.',
  },
  {
    id: 10,
    titel: 'Betaalbare en kwalitatieve zorg, overal',
    categorie: 'voor-iedereen',
    icoon: 'Stethoscope',
    wat: 'Dat de kwaliteit en wachttijd van zorg niet afhangen van waar je woont.',
    hoe: 'Investeren in zorgpersoneel, betere samenwerking tussen ziekenhuizen, en patiënten slim verdelen om wachttijden te verkorten.',
  },
]
