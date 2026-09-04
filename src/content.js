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
  contactEmail: 'kapcsolat@skipintro.hu',
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
    url: '/Melinda.jpg',
    alt: 'André Melinda',
  },
  about: {
    url: '/Melinda_2.jpg',
    alt: 'André Melinda',
  }
}

export const nav = [
  { label: 'Főoldal', href: '/#hero' },
  { label: 'Skip Intro', href: '/#skipintro' },
  { label: 'Szolgáltatások', href: '/#kiknek' },
  { label: 'Rólam', href: '/#rolam' },
  { label: 'Árak', href: '/#szolgaltatasok' },
  { label: 'Kapcsolat', href: '/#kapcsolat' },
  { label: 'GYIK', href: '/#gyik' },
]

export const hero = {
  name: 'André Melinda',
  subtitle: 'Life- és Business Coach,\nkommunikációs szakember',
  greeting: 'Szeretettel köszöntelek!',
  paragraph: 'Körülöttünk minden gyorsabban alakul át, mint valaha. Ami ma még igaz, biztosnak tűnik és működik, holnap talán már semmit nem ér. És aki szeretné harmóniában élni az életét, megtartva a lelki és fizikai egészségét, annak meg kell tanulnia rugalmasan hozzáállni a változásokhoz. Még nehezebb, amikor elveszted a kapaszkodóidat, a biztonságosnak hitt körülményeidet - legyen az a családod, a munkahelyed, az egészéged. Mert ilyenkor úgy kell meghoznod a döntések sorait, hogy közben egy érzelmi viharban próbálsz (túl)élni, és több a kérdésed, mint a válaszod. Fontos, hogy ebben a helyzetben ne maradj egyedül.<br><br> Ha már eddig eljutottál az oldalamon, az azt jelenti, hogy valamin változtatni szeretnél. Sőt, talán már bele is kezdtél, de megakadtál. Coachként és kommunikációs szakemberként ezen az úton tudlak támogatni. Hogy meglásd azt, milyen lehetőségeid vannak, hogy felfedezd azokat az erőforrásokat, amikkel rendelkezel, és együtt megtaláljuk azokat az utakat, amik most még akadályoznak. <br><br><strong class="text-gold">A Skip Intro Coaching célja, hogy megtanulj pont annyit, pont úgy és pont akkor változtatni magadon, hogy önmagad legjobb kiadása lehess.</strong> Ha elkezdjük a közös munkát, arra törekszem majd, hogy a folyamat végére könnyebbnek, szabadabbnak érezd magad, ne forgolódj álmatlanul a problémáidon rágódva, hogy többet mosolyogj a tükörben és a világra és hogy bátrabban, határozottabban nézz szembe az új kihívásokkal.',
  primaryCta: { label: 'A Skip Intro Coachingról', href: '#kiknek' },
  secondaryCta: { label: 'Időpontfoglalás', href: '#kapcsolat' },
  photoCaption: 'Portré',
  coachName: 'André Melinda',
  coachRole: 'Life- és Business Coach',
  quote: 'Dönthetünk úgy, hogy felelőséget vállalunk a nehézségeinkért és a gyógyulásunkért. Dönthetünk úgy, hogy szabadok leszünk.',
  quoteAuthor: 'Edith Eva Eger',
}

export const audience = {
  title: 'Mire számíthatsz a közös munka során',
  intro:
    'A mentális edzéseim partneri együttműködések, az általad választott ülésformán értő figyelemmel, megértéssel, kérdésekkel támogatlak, összefüggéseket keresek, és segítek rávilágítani arra, amit még nem látsz egy diszkrét, biztonságos és ítélkezésmentes közegben.<br><br>Hogy miért Skip Intro lett a módszerem neve? A név a streaming világából lehet ismerős, amikor sorozatdaráláskor az új rész kezdete elején dönthetsz úgy, hogy átugrod a főcímet, így minél előbb belevágva az új történetbe. És hogyan kapcsolódik ez a munkámhoz? <strong>Mert tapasztalataim szerint úgy lehet a leghatékonyabban együtt dolgozni, ha a lényegre koncentrálunk, ha a te személyes fejlődésedre fektetjük a hangsúlyt, ha nincs mellébeszélés.</strong> Ez persze nem azt jelenti, hogy rohannunk kell. A te tempódban haladunk, de sallangmentesen.<br><br>Több mint 25 éves kommunikációs szakmai tapasztalat után nekem a coaching éppen azért lett szerelem, mert <strong>a jövőre fókuszál, azt alakítja a jelenlegi, még ki nem aknázott lehetőségeiddel együtt.</strong> Mert mérhetők az eredményei, mert időben jól körülhatárolt, rád szabott, elérhető célokat tűzünk ki, amik után magabiztosabb leszel, és az üléseken szerzett tapasztalatokat később is bármikor fel tudod használni.',
  forTitle: 'Amiben támogatni tudlak',
  for: [
    'Családi kapcsolatok, körülmények feldolgozása: hogyan kezdhetsz új életet a szakítás után, hogyan dolgozd fel a válás sebeit, hogyan alkalmazkodj a megváltozott szerepkörökhöz',
    'Anyaság, apaság hozta változások: gyermeked született és minden felborult, nyakadon a dackorszak, a kamaszkor, és nem tudsz megbirkózni vele, kirepültek a gyerekek, és nem találod a helyed, vagy csak másként képzelted a szülőséget',
    'Nőiesség megélése: támogatlak a testi-lelki változások elfogadásában, a női szerepek megélésében',
    'Munkahelyi változások, döntések: ha nem érzed magad a helyeden a karrieredben, váltanál, de nincs meg az erőd hozzá, vagy nem tudod merre indulj, ha úgy érzed, kezdesz kiégni',
    'Önbizalom-, önértékeléshiány: Ha gyakran úgy érzed, neked semmi nem sikerül. Ha nem tudod miért akadtak el a dolgaid, és egyhelyben toporogsz, ha nem érzed jól magad a bőrödben. Nem tudod, mi a baj veled',
    'Kapcsolati elakadások: Ha nem találod a közös hangot a pároddal, ha megrekedt a kapcsolatotok, és szeretnél lendíteni rajta, ha keresed mellette a régi önmagadat',
    'Kommunikációs problémák: Ha gondot okoz, hogy elmondd a véleményed, meghúzd a határaidat, kiállj magadért. Nehezen fejezed ki magad, nem tudsz mások előtt beszélni, folyton félreértenek',
    'Stresszlevezetés: A feszültség már tapintható az életedben, de nem tudod, mihez kezdj vele'
  ],
  disclaimer: 'Ami kizáró ok: Nem a coaching a te utad, és nem vállalhatom az ügyedet, ha pszichiátriai kezelés alatt állsz, olyan gyógyszert szedsz, ami befolyásolja a döntési képességeidet, ha szenvedélybetegséggel küzdesz, vagy ha szuicid hajlamaid vannak.',
  image: {
    url: '/Prev/AdobeStock_48286286_Preview.jpeg',
    alt: 'xxx',
  },
  sidebarImage: {
    url: '/Prev/AdobeStock_323829712_Preview.jpeg',
    alt: 'xxx',
  },
}

export const skipIntro = {
  title: 'Hogy miért Skip Intro a programom neve?',
  intro: 'Mert szerintem hasonlóan zsonglőrködhetünk a döntéseinkkel az élet minden területén, mint ahogy a Skip Intro gombbal, amikor sorozatokat streamelünk. Van, amikor a lehetőséget látjuk benne, hogy hozzánk került az irányítás és kedvünk szerint akár át is léphetünk a kötelezőkön. Máskor azonnal rányomunk, mert nem akarjuk vesztegetni az időt, belevágunk az új fejezetbe. És van, amikor nem foglalkozunk a felkínált lehetőséggel, mert éppen a lassabb tempóra, a ráhangolódásra vágyunk. Látod, mennyi nézőpont? Pedig valójában ez csak egy gomb, ami a főcím átugrálására szolgál, és mindenki maga dönti el, hogy éppen akkor és ott mihez kezd vele…',
  conclusion: 'Emellett a Skip Intro azt is jelenti, hogy csakis a lényegre koncentrálunk, és hagyjuk a mellébeszélést. És éppen ez az, amit a legjobban szeretek a life coachingban. A te személyes fejlődésedre fektetjük a hangsúlyt, a te tempódban haladunk és hagyjuk a sallangokat. A jelenre és a jövőre fókuszálunk, és a program során megszerzett tapasztalatok tartós változást hoznak, melyekt később is bármikor fel tudsz használni. A coaching programommal időt nyerhetsz magadnak, hogy ne teljenek el évek a sötétben tapogatózva.',
}

export const process = {
  title: 'Erre számíthatsz a közös munka során',
  intro: 'A mentális edzéseim partneri együttműködések',
  image: {
    url: '/Prev/AdobeStock_1760337244_Preview.jpeg',
    alt: 'Közös munka'
  },
  items: [
    'Értő figyelemmel, empátiával hallgatlak',
    'Célzott kérdésekkel és belső munkát igénylő gyakorlati feladatokkal támogatlak',
    'Összefüggéseket keresünk, és segítek rávilágítani arra, amit még nem látsz',
    'Biztonságos és ítélkezésmentes közegben dolgozunk együtt',
    'A te tempódban haladunk, arról beszélünk, amire készen állsz',
    'Teljes diszkrécióra szerződünk'
  ],
  titleSteps: 'Így haladunk a céljaid felé',
  stepsImage: {
    url: '/Prev/AdobeStock_442197339_Preview.jpeg',
    alt: 'Haladás'
  },
  steps: [
    {
      title: 'A coaching folyamat első lépése',
      description: 'A Skip Intro coaching program első lépése egy 30 perces, ingyenes online konzultáció, amikor megbeszéljük, mit vársz tőlem, és felvázolom a lehetőségeket. Ez téged még semmire nem kötelez, de ez alapján el tudod dönteni, hogy belevágsz-e.'
    },
    {
      title: 'A közös munka megkezdése',
      description: 'Ha úgy döntesz, hogy igent mondasz a közös munkára, akkor tisztázzuk az ülések időpontját, hogy online vagy személyesen szeretnéd-e, esetleg váltakozva a kettőt.'
    },
    {
      title: 'A coaching folyamat',
      description: 'A folyamat általában 6-10 coaching alkalomból áll, attól függően, hogyan haladunk, illetve, hogy hány perces találkozókat kérsz. A munka során coaching eszközökkel dolgozunk, melybe az elmélyülést, önvizsgálatot segítő gyakorlatok és izgalmas, játékos tesztek is tartoznak.'
    },
    {
      title: 'A lezárás',
      description: 'Az utolsó alkalomra, amikorra eléred a célodat, és tartós lesz a változás, lezárjuk a közös munkát.'
    }
  ],
}

export const pricing = {
  title: 'Szolgáltatások és árak',
  intro: 'Választhatsz videóhívásban online vagy helyszíni személyes coachingot is, ahogy neked kényelmesebb. Sőt, az élethelyzetedhez igazítva váltogathatod is az alkalmakat a folyamat a során, természetesen velem előre egyeztetve. Vagyis például megbeszélhetjük azt, hogy alapvetően videóhívásban szeretnél dolgozni velem, de az utolsó alkalmak egyikén személyesen. Fizetni alkalmanként tudsz, banki utalással az időpontfoglalás visszaigazolásakor, melyről számlát kapsz e-mailben. Kérlek személyes alkalmakra csak teljesen egészséges állapotban gyere. Én is így megyek – vigyázzunk egymásra. Ha lebetegedtél, áttehetjük az alkalmat online-ra, ha 48 órával előbb jelzed.',
  plans: [
    {
      name: 'Online tájékoztatás és konzultáció',
      duration: '30 perc',
      price: 'Ingyenes',
      featured: false,
    },
    {
      name: 'Skip intro coaching online',
      duration: '80-90 perc',
      price: '20 000 Ft',
      perSession: true,
      featured: true,
    },
    {
      name: 'Skip intro coaching online',
      duration: '50-60 perc',
      price: '15 000 Ft',
      perSession: true,
      featured: false,
    },
    {
      name: 'Skip intro coaching személyesen',
      duration: '60-70 perc',
      price: '20 000 Ft',
      perSession: true,
      description: 'Helyszín: Érd',
      featured: false,
    }
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

export const footer = {
  credits: 'Fotó kredit: Első oldal: Bognár Bogi, saját, …..',
  copyright: 'Szerzői jogok: Az oldalon található írás a saját szellemi termékem. Annak bármilyen nemű megosztása, másolása csak a forrás megjelölésével lehetséges.',
}

export const about = {
  title: 'Ki vagyok én?',
  paragraphs: [
    'Diplomás kommunikációs szakember vagyok 2003 óta, valamint life- és business coachként végeztem. Újságíróként, szerkesztőként 23 évet töltöttem vállalati kultúrában. Több, mint ezer interjút és riportot írtam printben és online elsősorban lelki, életvezetési témákban, elakadásokban. Munkámat mindig a maximális empátia és odafigyelés jellemzi, akár szakértőkkel, akár riportjaim szereplőivel, akár sztárokkal beszélgetek. Ilyenkor is mindig az összefüggéseket, a több oldalról való megvilágítást keresem.',
    'Emellett elkezdtem másra is vágyni: arra, hogy coachként a gyakorlatban is támogathassam a hozzám fordulók fejlődését. Ha megtisztelsz a bizalmaddal, akkor közösen dolgozunk majd azért, hogy a mostani problémáidban olyan kihívásokat láss, melyeknek a megoldására képes vagy. Boldoggá tesz, ha a beszélgetésünk hatására jobban érzed magad, és megszületik benned az „aha" élmény, ami szikrát gyújt és beindítja a változást.',
    '<strong class="text-gold">A változás egyetlen döntéssel kezdődik. Belevágunk?</strong>',
    'Mottóm: A változás legyen az energiád!'
  ],
  credentialsTitle: 'Szakmai képzettségek:',
  credentials: [
    'Diploma: Kommunikációs szakember – Szegedi Tudomány Egyetem',
    'Life- és business coaching képzés',
    'Tréneri hatásgyakorlás képzés',
    'Access Bars',
    'Reiki'
  ],
}

export const faq = {
  title: 'Kérdések és válaszok',
  items: [
    {
      question: 'Hogyan tudok időpontot foglalni?',
      answer:
        'Emailben a kapcsolat@skipintro.hu címen vagy az oldalon található űrlap segítségével. A megadott elérhetőségeden veszem fel veled a kapcsolatot, és megbeszéljük a folytatást, az alkalmas időpontokat.',
    },
    {
      question: 'Online vagy személyesen találkozzunk?',
      answer:
        'Ez tőled függ, ahogy neked kényelmesebb. Hatékonyságában nincs különbség a kettő között. Az online-hoz csak jó internet kapcsolatra van szükséged, és természetesen rugalmasabb, nem kell hozzá utaznod, plusz időt rászánni. A saját kényelmedből beszélgethetünk, ha neked úgy komfortosabb. A személyes találkozásra Érden van lehetőség, biztonságos környezetben.',
    },
    {
      question: 'Mitől függ, hogy hány alkalmas lesz a coaching folyamat?',
      answer:
        'Minden eset más, így a dilemmád összetettségétől és a közös munka eredményeitől függ. Általában 5-10 alkalom. Az utolsó ülésen lezárjuk a folyamatot.',
    },
    {
      question: 'Milyen gyakran tartjuk az üléseket?',
      answer: 'Az ülések között legalább egy-két hétnek kell eltelnie, hogy leülepedjenek a megszerzett információk, kipróbálhasd élesben az elsajátítottakat és elvégezd a kapott házi feladatot, ami elmélyülést, gyakran önvizsgálatot igényel. Természetesen ha elutazol, vagy egyéb elfoglaltságod akad, akkor eltelhet hosszabb idő is a két alkalom között, de az egy-két hét az optimális.',
    },
    {
      question: 'Mi történik, ha nem tudok részt venni a korábban megbeszélt alkalmon?',
      answer: 'A leegyeztetett alkalmat 48 órával a megbeszélt időpont előtt lemondhatod díjmentesen. Ha viszont nem jelensz meg az ülésen, vagy 48 órán belül mondod le, akkor az óradíj 50%-át meg kell fizetned, mivel az nekem kiesett idő lesz a naptáramban. Köszönöm szépen a megértést!',
    },
    {
      question: 'Hogyan fizethetem ki a szolgáltatást?',
      answer:
        'A megadott bankszámlaszámon tudsz utalni az ülésünk napjáig. A beérkezése után a számlát emailben kapod meg a szamlazz.hu-n keresztül.',
    },
  ],
}

export const privacyPolicy = {
  title: 'Adatkezelési tájékoztató',
  intro:
    'Az alábbi tájékoztató azt mutatja be, hogy a Skip Intro Coaching honlapján keresztül megadott személyes adatokat hogyan kezelem. A tájékoztatót bármikor frissítem, amennyiben a szolgáltatás vagy a jogszabályi környezet ezt indokolja.',
  lastUpdated: '2026. szeptember',
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
