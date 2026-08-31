export const theme = {
  colors: {
    ink: '#354f64',
    inkSoft: '#466986',
    paper: '#e5fff8',
    paperDark: '#ccfff1',
    body: '#233543',
    gold: '#ffdb66',
    goldSoft: '#ffe799',
    aqua: '#59d9d1',
    aquaSoft: '#acece8',
    aquaDeep: '#1c7d76',
    rose: '#ffcccf',
    roseDeep: '#cc000e',
  },

  gradients: {
    primary: 'linear-gradient(135deg, var(--color-gold), var(--color-rose))',
    progress: 'linear-gradient(90deg, var(--color-gold), var(--color-aqua), var(--color-rose))',
    cool: 'linear-gradient(135deg, var(--color-aqua), var(--color-paper-dark))',
  },
}

export const colors = theme.colors

export const site = {
  brandName: 'Skip Intro',
  brandSuffix: 'Coaching',
  contactEmail: '[email cím]',
  // ------------------------------------------------------------
  // EMAILJS BEÁLLÍTÁSOK
  // ------------------------------------------------------------
  // Ez a 4 érték az emailjs.com fiókodból származik (mind ingyenes):
  // 1. Regisztrálj: https://www.emailjs.com/
  // 2. "Email Services" -> Add New Service -> kösd be a saját email
  //    fiókodat (Gmail/Outlook/stb) -> ez adja az emailjsServiceId-t
  // 3. "Email Templates" -> hozz létre KÉT üres, "generikus" sablont
  //    (a tényleges szöveg NEM itt, hanem a
  //    src/email-templates/ownerNotification.js és
  //    clientConfirmation.js fájlokban van, onnan szabadon átírható):
  //    a) "Owner" sablon (neked szóló értesítő):
  //       - Subject mező:   {{subject}}
  //       - Body mező:      {{message}}
  //       - To Email mező:  a saját email címed, fixen beírva
  //       -> ez adja az emailjsOwnerTemplateId-t
  //    b) "Client" sablon (a kliensnek szóló visszaigazolás):
  //       - Subject mező:   {{subject}}
  //       - Body mező:      {{message}}
  //       - To Email mező:  {{to_email}}
  //       -> ez adja az emailjsClientTemplateId-t
  // 4. "Account" -> "General" -> "Public Key" -> ez az emailjsPublicKey
  emailjsServiceId: 'YOUR_EMAILJS_SERVICE_ID',
  emailjsOwnerTemplateId: 'YOUR_EMAILJS_OWNER_TEMPLATE_ID',
  emailjsClientTemplateId: 'YOUR_EMAILJS_CLIENT_TEMPLATE_ID',
  emailjsPublicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
  creatorUrl: 'https://zeteny.cigoria.eu',
  creatorLabel: 'zeteny.cigoria.eu',
  facebookUrl: '#',
  privacyPolicyUrl: '/adatkezeles',
}

export const images = {
  hero: {
    url: '/AndreMeli1720.jpg',
    alt: 'André Melinda',
  },
  about: {
    url: '',
    alt: 'Fotó',
  },
  divider1: {
    url: '/ann-gogoleva-MUq7BTMWwZc-unsplash.jpg',
    alt: 'Virágok bújnak elő egy fa deszkapadló résein',
    quote: 'Szép ez a virág',
  },
  divider2: {
    url: '/dan-freeman-WHPsxhB4mWQ-unsplash.jpg',
    alt: 'Csigavonalban felfelé kanyargó lépcsősor felülnézetből',
    quote: 'Le vagy fel?',
  },
}

export const nav = [
  { label: 'Kezdőlap', href: '/#hero' },
  { label: 'Kinek szól', href: '/#kiknek' },
  { label: 'Szolgáltatások', href: '/#szolgaltatasok' },
  { label: 'Rólam', href: '/#rolam' },
  { label: 'GYIK', href: '/#gyik' },
]

export const hero = {
  name: 'André Melinda',
  subtitle: 'Life- és Business Coach,\nkommunikációs specialista',
  paragraph: 'A Skip Intro Coaching jóLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec ultricies tellus. Sed ipsum elit, bibendum a eros quis, cursus venenatis leo. Donec ac diam ut velit ullamcorper dignissim. Aenean commodo efficitur suscipit. Vivamus feugiat lacus sed elit suscipit, quis facilisis orci laoreet. In hac habitasse platea dictumst.',
  primaryCta: { label: 'A Skip Intro Coachingról', href: '#kiknek' },
  secondaryCta: { label: 'Időpontfoglalás', href: '#kapcsolat' },
  photoCaption: 'Portré',
  coachName: 'André Melinda',
  coachRole: 'Life- és Business Coach',
}

export const audience = {
  title: 'Mire számíthatsz a közös munka során?',
  intro:
    'A coaching nem csodaszer, de cserébe jó. Nézzük meg őszintén, kinek segíthet valóban ez a program.',
  forTitle: 'Amiben támogatni tudlak',
  for: ['Petike', 'Janika', 'Zsoltika', 'Pistike', 'Lillácska'],
  disclaimer: 'Ami kizáró ok a coaching folyamat során',
}

export const pricing = {
  title: 'Szolgáltatások és árak',
  intro: 'Az alábbi árak és időtartamok tájékoztatók.',
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
    }
  ],
}

export const about = {
  title: 'Rólam',
  paragraphs: [
    'Szia, André Melinda vagyok, a Skip Intro Coaching megalkotója. Ember vagyok',
    'Ember vagyok, még mindig',
  ],
  quote: 'Nagyon menő idézet',
  credentialsTitle: 'Szakmai hátterem',
  credentials: [
    'Emberként végeztem',
    'Life és Buisness Coach ... iskola',
    'Szerkesztő voltam',
    'Újságíró voltam 20 évig',
  ],
}

export const faq = {
  title: 'Ha még maradt kérdésed',
  items: [
    {
      question: 'Hogyan tudok időpontot foglalni?',
      answer:
        'Az oldalon található űrlap kitöltésével tudsz jelentkezni. A megadott elérhetőségeden hamarosan visszajelzek, és egyeztetünk egy időpontot.',
    },
    {
      question: 'Mitől függ, hogy hány alkalmas lesz a coaching folyamat?',
      answer:
        'Ez mindenkinél más – van, aki már az első alkalom után érez elmozdulást, másnak több ülésre van szüksége. Az ismerkedős beszélgetésen erről is beszélünk.',
    },
    {
      question: 'Online vagy személyesen találkozzunk?',
      answer:
        'Mindkettőre van lehetőség: választhatsz személyes találkozót vagy online coachingot, ami neked kényelmesebb.',
    },
    {
      question: 'Milyen gyakran tartjuk az üléseket?',
      answer: 'Így jártál...',
    },
    {
      question: 'Mi történik, ha nem tudok részt venni a korábban megbeszélt alkalmon?',
      answer: 'Igen, minden alkalomról számlát állítok ki.',
    },
    {
      question: 'Hogyan fizethetem a szolgáltatást?',
      answer:
        'Az adataidat bizalmasan kezelem, kizárólag a kapcsolatfelvétel és az időpont-egyeztetés céljából használom. Részletek az adatkezelési tájékoztatóban.',
    },
  ],
}

export const privacyPolicy = {
  title: 'Adatkezelési tájékoztató',
  intro:
    'Az alábbi tájékoztató azt mutatja be, hogy a Skip Intro Coaching honlapján keresztül megadott személyes adatokat hogyan kezelem. A tájékoztatót bármikor frissítem, amennyiben a szolgáltatás vagy a jogszabályi környezet ezt indokolja.',
  lastUpdated: '2026. augusztus',
  sections: [
    {
      heading: 'Az adatkezelő adatai',
      body: `Adatkezelő: ${site.brandName} ${site.brandSuffix}\nKapcsolat: ${site.contactEmail}`,
    },
    {
      heading: 'Milyen adatokat kezelek?',
      body: 'A kapcsolatfelvételi űrlap kitöltésekor megadott nevet, email címet, telefonszámot és az üzenetben megadott egyéb adatokat kezelem.',
    },
    {
      heading: 'Az adatkezelés célja',
      body: 'A megadott adatokat kizárólag a kapcsolatfelvétel, az időpont-egyeztetés és a coaching szolgáltatás nyújtásával kapcsolatos kommunikáció céljából használom fel.',
    },
    {
      heading: 'Az adatkezelés jogalapja',
      body: 'Az adatkezelés az érintett önkéntes hozzájárulásán alapul, amelyet az űrlap kitöltésével és elküldésével ad meg.',
    },
    {
      heading: 'Az adatok tárolásának időtartama',
      body: 'A megadott adatokat a kapcsolatfelvételtől, illetve az együttműködés lezárultától számított ésszerű ideig, de legfeljebb a jogszabályi kötelezettségek (pl. számlázás) által előírt ideig őrzöm meg.',
    },
    {
      heading: 'Adatfeldolgozók',
      body: 'Az űrlap elküldését és az email értesítéseket az EmailJS szolgáltatás továbbítja. Az adatok kezelése és tárolása során az adatfeldolgozók mindenkori adatvédelmi szabályzata is irányadó.',
    },
    {
      heading: 'Az érintett jogai',
      body: 'Bármikor kérheted a rád vonatkozó adatok helyesbítését, törlését vagy az adatkezelés korlátozását, valamint tájékoztatást kérhetsz a kezelt adatok köréről. Kéréseidet a fent megadott email címen jelezheted.',
    },
    {
      heading: 'Jogorvoslat',
      body: 'Amennyiben úgy ítéled meg, hogy adataid kezelése nem megfelelő, panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH), vagy bírósághoz fordulhatsz.',
    },
  ],
}

export const contact = {
  title: 'Foglalj időpontot',
  intro:
    'Töltsd ki az űrlapot, és a megadott elérhetőségeden hamarosan jelentkezem – megbeszéljük a részleteket és egy neked megfelelő időpontot.',
  successMessage: 'Köszönöm a jelentkezést! Hamarosan jelentkezem a megadott elérhetőségen.',
  errorMessage:
    'Hoppá, valami félrement a küldés közben. Próbáld újra, vagy írj közvetlenül emailt.',
}
