// ============================================================
// SKIPINTRO COACHING – TARTALOM
// ------------------------------------------------------------
// Ez a fájl gyűjti össze az oldal ÖSSZES szövegét, árát és
// elérhetőségét egy helyen. A [szögletes zárójelben] lévő
// részeket mindenképp cseréld ki valós adatra – a többi csak
// példaszöveg, bármikor átírható.
// ============================================================

export const site = {
  brandName: 'Skipintro',
  brandSuffix: 'Coaching',
  // Ez az email jelenik meg a láblécben (nem a Formspree-hez kell)
  contactEmail: '[email cím]',
  // Cseréld ki a saját Formspree űrlap-azonosítódra:
  // https://formspree.io/ -> New Form -> "Your form endpoint"
  // pl. 'https://formspree.io/f/abcdwxyz'
  formspreeEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',
  facebookUrl: '#',
  privacyPolicyUrl: '#',
}

// ------------------------------------------------------------
// KÉPEK
// ------------------------------------------------------------
// Illeszd be ide a saját Unsplash (vagy egyéb) képlinkjeidet –
// amíg egy 'url' üres, addig a helyén egy szép szaggatott keretes
// helykitöltő látszik, hogy tudd, hova kerül majd a kép.
// Unsplash linkelés menete: keress egy képet unsplash.com-on ->
// "Copy image address" -> illeszd be ide a url mezőbe.
export const images = {
  hero: {
    url: '',
    alt: 'A coach portréja természetes környezetben',
  },
  about: {
    url: '',
    alt: 'Rólam fotó természetes fényben',
  },
  divider1: {
    url: '',
    alt: 'Panorámás természetkép – erdő vagy hegyvidék',
    quote: 'A csend is tud válasz lenni.',
  },
  divider2: {
    url: '',
    alt: 'Panorámás természetkép – víz vagy horizont',
    quote: 'Minden nagy út egyetlen lépéssel kezdődik.',
  },
}

export const nav = [
  { label: 'Kezdőlap', href: '#hero' },
  { label: 'Kinek szól', href: '#kineknek' },
  { label: 'Szolgáltatások', href: '#szolgaltatasok' },
  { label: 'Rólam', href: '#rolam' },
  { label: 'GYIK', href: '#gyik' },
]

export const hero = {
  eyebrow: 'SKIP INTRO',
  eyebrowTime: '00:00',
  title: 'Hagyjuk a bevezetőt.\nVágjunk bele abba, ami tényleg számít.',
  paragraph:
    'A Skipintro Coaching abban segít, hogy ne csak beszélj a változásról, hanem meg is történjen. Személyre szabott coaching azoknak, akik készen állnak túllépni a felszínes megoldásokon, és valódi elmozdulást szeretnének a mindennapjaikban.',
  primaryCta: { label: 'Időpontfoglalás', href: '#kapcsolat' },
  secondaryCta: { label: 'Ismerd meg a folyamatot', href: '#szolgaltatasok' },
  photoCaption: '[Ide kerül a fotód]',
  coachName: '[Név]',
  coachRole: 'a Skipintro Coaching megalkotója',
}

export const audience = {
  chapterMark: '01:12',
  title: 'Kinek szól a Skipintro Coaching?',
  intro:
    'A coaching nem csodaszer, és nem mindenkinek ugyanaz kell. Nézzük meg őszintén, kinek segíthet valóban ez a program.',
  forTitle: 'Kinek szól',
  for: [
    'Akik szeretnének könnyebben, tudatosabban élni a mindennapjaikat',
    'Akik éreznek egy visszatérő elakadást, de nem tudják, honnan induljanak el',
    'Akik nyitottak arra, hogy kérdéseket kapjanak megoldás helyett, és maguk találjanak rá a válaszra',
    'Akik szeretnék jobban megérteni a saját reakcióikat és döntéseiket',
    'Akik hajlandóak tenni is a változásért, nem csak beszélni róla',
  ],
  notForTitle: 'Kinek nem javasolt',
  notFor: [
    'Akut pszichiátriai tünetekkel, súlyos depresszióval vagy szorongással élők – ilyenkor mindenképp forduljon szakorvoshoz',
    'Akik azonnali, egyetlen alkalom alatt megoldást várnak',
    'Sürgős, életveszélyes állapot esetén – ilyenkor azonnal orvoshoz kell fordulni',
  ],
  disclaimer:
    'Fontos: a Skipintro Coaching program nem diagnosztizál betegségeket, és nem helyettesíti az orvosi vagy pszichológiai kezelést – jól megfér mellette kiegészítésként.',
}

export const pricing = {
  chapterMark: '02:30',
  title: 'Szolgáltatások és árak',
  intro: 'Az alábbi árak és időtartamok tájékoztató jellegűek – bármikor módosíthatók.',
  plans: [
    {
      name: 'Ismerkedős beszélgetés',
      duration: '20 perc',
      price: 'Ingyenes',
      description:
        'Egy rövid, nem kötelező beszélgetés, hogy megnézzük, passzolunk-e, és mit adhat neked a program.',
      featured: false,
    },
    {
      name: 'Egyéni coaching ülés',
      duration: '60 perc',
      price: '15 000 Ft',
      description: 'Egy alkalom, ami egy konkrét témára vagy elakadásra fókuszál.',
      featured: true,
    },
    {
      name: 'Elmélyült program',
      duration: '5 × 60 perc',
      price: '65 000 Ft',
      description: 'Öt egymásra épülő alkalom, amikor egy nagyobb változáson dolgozunk együtt.',
      featured: false,
    },
    {
      name: 'Online coaching',
      duration: '60 perc',
      price: '13 000 Ft',
      description: 'Ugyanaz a program, videóhívásban – bárhol is vagy éppen.',
      featured: false,
    },
  ],
}

export const about = {
  chapterMark: '03:45',
  title: 'Rólam',
  paragraphs: [
    'Szia, [Név] vagyok, a Skipintro Coaching megalkotója. [Rövid szakmai háttér – pár mondat arról, hogyan lettél coach, és mi hozott ide.]',
    '[Egy-két mondat arról, hogyan dolgozol, mit tapasztalsz a klienseidnél, mi a legfontosabb neked ebben a munkában.]',
  ],
  quote: 'Hiszem, hogy a válasz mindig benned van – a coaching csak segít meglátni.',
  credentialsTitle: 'Szakmai hátterem',
  credentials: [
    '[Végzettség / diploma neve]',
    '[Coaching képzés neve, intézmény]',
    '[További releváns képzés]',
    '[Tapasztalat, pl. „X éve foglalkozom...”]',
  ],
}

export const faq = {
  chapterMark: '04:50',
  title: 'Gyakori kérdések',
  items: [
    {
      question: 'Hogyan tudok időpontot foglalni?',
      answer:
        'Az oldal alján található űrlap kitöltésével tudsz jelentkezni. A megadott elérhetőségeden hamarosan visszajelzek, és egyeztetünk egy időpontot.',
    },
    {
      question: 'Mennyi idő alatt várható eredmény?',
      answer:
        'Ez mindenkinél más – van, aki már az első alkalom után érez elmozdulást, másnak több ülésre van szüksége. Az ismerkedős beszélgetésen erről is beszélünk.',
    },
    {
      question: 'Online vagy személyesen találkozunk?',
      answer:
        'Mindkettőre van lehetőség: választhatsz személyes találkozót vagy online coachingot, ami neked kényelmesebb.',
    },
    {
      question: 'Mi történik, ha mégsem ez nekem való?',
      answer:
        'Semmi gond – az ismerkedős beszélgetés pont arra való, hogy ezt kiderítsük kötelezettség nélkül. Ha útközben úgy érzed, mégsem passzol, ezt bármikor jelezheted.',
    },
    {
      question: 'Kapok számlát a szolgáltatásról?',
      answer: 'Igen, minden alkalomról számlát állítok ki.',
    },
    {
      question: 'Mi történik az adataimmal, amiket az űrlapon megadok?',
      answer:
        'Az adataidat bizalmasan kezelem, kizárólag a kapcsolatfelvétel és az időpont-egyeztetés céljából használom. Részletek az adatkezelési tájékoztatóban.',
    },
  ],
}

export const contact = {
  chapterMark: '05:59',
  title: 'Foglalj időpontot',
  intro:
    'Töltsd ki az űrlapot, és a megadott elérhetőségeden hamarosan jelentkezem – megbeszéljük a részleteket és egy neked megfelelő időpontot.',
  successMessage: 'Köszönöm a jelentkezést! Hamarosan jelentkezem a megadott elérhetőségen.',
  errorMessage: 'Hoppá, valami félrement a küldés közben. Próbáld újra, vagy írj közvetlenül emailt.',
}
