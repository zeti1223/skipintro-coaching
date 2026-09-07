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
  emailjsServiceId: 'service_5h7tu9p',
  emailjsOwnerTemplateId: 'template_o5nrvrl',
  emailjsClientTemplateId: 'template_9h6d4ze',
  emailjsPublicKey: 'XdKDEddMQrodGsYmc',
  creatorUrl: 'https://zeteny.cigoria.eu',
  creatorLabel: 'Botyánszki Zétény',
  facebookUrl: '#',
  privacyPolicyUrl: '/adatkezeles',
}

export const images = {
  hero: {
    url: '/Melinda.webp',
    alt: 'André Melinda',
  },
  about: {
    url: '/Melinda_2.webp',
    alt: 'André Melinda',
  }
}

export const nav = [
  { label: 'Főoldal', href: '/#hero' },
  { label: 'Skip Intro', href: '/#skipintro' },
  { label: 'Árak', href: '/#szolgaltatasok' },
  { label: 'Rólam', href: '/#rolam' },
  { label: 'Kapcsolat', href: '/#kapcsolat' },
  { label: 'GYIK', href: '/#gyik' },
]

export const hero = {
  name: 'André Melinda',
  subtitle: 'Life- és Business Coach,\nkommunikációs szakember',
  greeting: 'Jó, hogy itt vagy!',
  paragraph: 'Van egy kérdésem hozzád: ha ma megváltoztathatnál egy dolgot az életedben, hogy boldogabb legyél, mi lenne az?<br><br>A világ gyorsabban változik, mint valaha. Ami ma még biztosnak tűnik és működik, holnap talán már semmit nem ér. Ezért nem csoda, ha időnként azt érzed, hogy kicsúsztak a dolgok a kezeid közül és elakadtál a problémáddal, vagy ha nem találod helyed, és a megszokott kapaszkodóidat. Meglehet, hogy már azt sem tudod, mikor nevettél utoljára egy jóízűt, mert folyamatosan fáradtnak, túlterheltnek érzed magad, és csak sodródsz a kötelességekkel, miközben éppen arra nem jut időd, amit valójában szeretnél.<br><br>Észrevetted? Azzal, hogy megválaszoltad a fenti kérdésemet, máris tettél magadért valami fontosat: szakítottál pár pillanatot magadra, amíg gondolkodtál. Abban tudlak támogatni, hogy ne egyedül kelljen kijutnod az érzelmi viharokból, amikor több benned a kérdés, mint a válasz.',
  primaryCta: { label: 'Érdekel a módszer', href: '#process' },
  secondaryCta: { label: 'Szeretném az ingyenes konzultációt', href: '#szolgaltatasok' },
  photoCaption: 'Portré',
  coachName: 'André Melinda',
  coachRole: 'Life- és Business Coach',
  quote: 'Dönthetünk úgy, hogy felelősséget vállalunk a nehézségeinkért és a gyógyulásunkért. Dönthetünk úgy, hogy szabadok leszünk.',
  quoteAuthor: 'Edith Eva Eger',
}

export const notAlone = {
  title: 'Nem vagy egyedül',
  intro:
    '<strong>Ha szeretnéd, elkísérlek a jelenlegi elakadásodból a vágyott jövőbe, hogy tisztábban lásd a saját helyzetedet, visszavedd az irányítást a saját utadon és nézz szembe bátrabban az új kihívásokkal. </strong>Hogy meglásd azt, milyen lehetőségeid vannak, hogy felfedezd azokat a belső erőforrásokat, amikkel rendelkezel, és megfontolt, tudatos döntéseket hozz, amik után jólesően dőlhetsz hátra.<br><br><strong>Ha elkezdjük a közös munkát, arra törekszem, hogy újra harmóniában, kiegyensúlyozottan élhesd az életed, és közben könnyedebbnek, szabadabbnak érezd magad. </strong>Hogy letehesd a nyomasztó súlyokat, és magabiztosan mosolyoghass a világra és a saját tükörképedre.',
  image: {
    url: '/AdobeStock_48286286.webp',
    alt: 'Világítótorony',
  },
}

export const support = {
  title: 'Amit együtt elérhetünk',
  items: [
    '<strong>Találj vissza a belső békédhez, egyensúlyodhoz </strong> <br> ha nehezen fogadod el a testi-lelki változásaidat, ha nem érzed jól magad a bőrödben, ha elfáradtál a túlhajszoltságban',
    '<strong>Dolgozzunk az önbizalom- és önértékeléshiányon </strong> <br> ha úgy érzed, hogy neked semmi nem sikerül, nem tudod, miért akadtak el a dolgaid, és egyhelyben toporogsz',
    '<strong>Újratervezés a törések után </strong> <br> találj magadra újra a csalódás, szakítás, válás, költözés, környezetváltozás után',
    '<strong>Kapcsolatok tudatos átalakítása </strong> <br> ha megrekedt a kapcsolatotok, és szeretnél lendíteni rajta',
    '<strong>Alkalmazkodj a szülőséggel járó változásokhoz </strong> <br> ha nehezen birkózol meg az éppen rád váró feladatokkal',
    '<strong>Karrierdöntések támogatása és stresszkezelés</strong> <br> ha nem érzed magad a helyeden, váltanál, de nincs meg az erőd hozzá, vagy nem tudod merre indulj',
    '<strong>Kommunikációs problémák kezelése </strong> <br> ha gondot okoz, hogy elmondd a véleményed, meghúzd a határaidat, kiállj magadért, és ha gyakran félreértenek',
    '<strong>Szokj le a halogatásról </strong> <br> ha csak elméletben léped meg a dolgokat, de a tényleges tettek elmaradnak, gyorsan elveszted a motivációdat'
  ],
  disclaimer: '<strong>Ami kizáró ok:</strong> Nem dolgozhatunk együtt, ha pszichiátriai kezelés alatt állsz, ha mentális betegséged van, ha szenvedélybetegséggel, epilepsziával vagy depresszióval küzdesz, ha tudatmódosító szereket használsz. Coachként nem diagnosztizálok és nem folytatok pszichoterápiás tevékenységet, szolgáltatásom nem helyettesíti az egészségügyi kezeléseket, csak kiegészíti azt.<br>Folyamatban lévő kezelésről, fennálló pszichiátrai betegségekről minden bejelentkező köteles tájékoztatni.',
  sidebarImage: {
    url: '/AdobeStock_323829712.webp',
    alt: 'Virág',
  },
}

export const skipIntro = {
  title: '<strong><span class="text-[1.125em]">S</span>kip Intro</strong>: <br> nálad az irányítás, te döntesz',
  intro: 'A programom neve azért lett Skip Intro, mert arra emlékeztet, hogy hasonlóan választunk az élet minden területén, mint ahogy a Skip Intro gombot használjuk a főcím átugrásához sorozatnézés közben. Amikor nem tudod, merre tovább, valójában hozzád kerül a döntési joga, az irányítás lehetősége, rajtad múlik, hogy mihez kezdesz vele. Azonnal rányomsz, hogy mihamarabb belevágj az új fejezetbe? Vagy éppen lassabb tempóra, ráhangolódásra vágysz, és nem sietetted az időt? Egyáltalán örülsz annak, hogy ott az a gomb?',
  conclusion: 'Emellett a Skip Intro azt is jelenti, hogy nincs mellébeszélés, csakis a lényegre koncentrálunk a coaching során, és ezzel időt nyerhetsz, hogy ne teljenek el éveid a sötétben tapogatózva. <strong> A te személyes fejlődésedre fektetjük a hangsúlyt, a te tempódban haladunk és hagyjuk a sallangokat. A jelenre és a jövőre fókuszálunk, és a megszerzett tapasztalatokat később is bármikor fel tudod használni.</strong> ',
  image: {
    url: '/AdobeStock_442197339.webp',
    alt: 'Csigalépcső',
  },
  quote: 'A változás legyen az energiád',
}

export const process = {
  title: 'Erre számíthatsz',
  items: [
    'A mentális edzéseim partneri együttműködések',
    'Értő figyelemmel, empátiával hallgatlak',
    'Célzott kérdésekkel és belső munkát igénylő feladatokkal támogatlak',
    'Összefüggéseket keresünk, és segítek rávilágítani arra, amit nem látsz',
    'Biztonságos és ítélkezésmentes közegben dolgozunk együtt',
    'A te tempódban haladunk, arról beszélünk, amire készen állsz',
    'Teljes diszkrécióra szerződünk'
  ],
  titleSteps: 'Így haladunk a céljaid felé',
  steps: [
    {
      title: 'Ingyenes online konzultáció',
      description: 'A Skip Intro coaching program első lépése egy 30 perces, ingyenes online konzultáció, amikor átbeszéljük, mit vársz tőlem, és felvázolom a lehetőségeket. Ez téged még nem kötelez semmire, de ez alapján el tudod dönteni, hogy belevágsz-e.'
    },
    {
      title: 'Egyeztetés',
      description: 'Ha úgy döntesz, hogy igent mondasz a közös munkára, akkor tisztázzuk az ülések időpontját, és hogy online vagy személyesen szeretnéd-e a találkozásokat, esetleg váltakozva a kettőt. '
    },
    {
      title: 'Coaching program',
      description: 'A folyamat általában 5-10 alkalomból áll, attól függően, hogyan haladunk. A munka során coaching eszközökkel dolgozunk, melybe az elmélyülést, önvizsgálatot segítő gyakorlatok és izgalmas, játékos tesztek is tartoznak.'
    },
    {
      title: 'Lezárás',
      description: 'Az utolsó alkalomra, amikorra eléred a célodat, és tartós lesz a változás, lezárjuk a közös munkát.'
    }
  ],
  cta: { label: 'Tarts velem', href: '#szolgaltatasok' },
}

export const pricing = {
  title: '<span class="text-[1.125em]">S</span>zolgáltatások és árak',
  intro: 'Választhatsz videóhívásban online vagy személyes coachingot is, ahogy neked kényelmesebb. Sőt, váltogathatod is az alkalmakat a program során, természetesen előre egyeztetve. Vagyis például megbeszélhetjük azt, hogy alapvetően videóhívásban szeretnél dolgozni velem, de az első alkalmak egyikén személyesen.<br>Fizetni alkalmanként tudsz, előreutalással az időpontfoglalás visszaigazolásakor, melyről számlát kapsz e-mailben.<br>Kérlek személyes alkalmakra csak teljesen egészségesen gyere. Én is így várlak – vigyázzunk egymásra!',
  plans: [
    {
      name: 'Tájékoztatás és konzultáció',
      duration: '30 perc',
      price: 'Ingyenes',
      featured: false,
    },
    {
      name: 'Online coaching',
      duration: '60 perc',
      price: '19 000 Ft',
      perSession: true,
      featured: false,
    },
    {
      name: 'Személyes coaching',
      duration: '60 perc',
      price: '22 000 Ft',
      perSession: true,
      description: 'Helyszín: Érd',
      featured: false,
    },
    {
      name: 'Online coaching',
      duration: '90 perc',
      price: '25 000 Ft',
      perSession: true,
      featured: true,
    },
    {
      name: 'Személyes coaching',
      duration: '90 perc',
      price: '28 000 Ft',
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
  credits: 'Fotó kredit: Bognár Bogi, saját, Adobe Stock',
  copyright: 'Szerzői jogok: Az oldalon található tartalom a saját szellemi termékem. Annak bármilyen nemű megosztása, másolása csak a forrás megjelölésével lehetséges.',
}

export const about = {
  paragraphs: [
    '25 éve dolgozom kommunikációs szakemberként különböző területeken az újságírástól a felelős szerkesztésen át az oktatásig. Ennek nagy részét vállalati kultúrában töltöttem. Több, mint ezer interjút és riportot írtam nyomtatott és online magazinokba - elsősorban lelki, életvezetési témákban, elakadásokban. Munkámat a maximális empátia és odafigyelés jellemzi, akár szakértőkkel, akár riportjaim szereplőivel, akár sztárokkal beszélgetek. Ilyenkor is mindig az összefüggéseket, a több oldalról való megvilágítást keresem.',
    'Emellett elkezdtem másra is vágyni: arra, hogy coachként a gyakorlatban is támogathassam a hozzám fordulók fejlődését, ezért végeztem el a Life- és Business Coaching képzést. <br> Tapasztalataim szerint a változás akkor lesz tartós, ha közösen dolgozunk azért, hogy a mostani problémáidban olyan kihívásokat láss, melyeknek a megoldására képes vagy. Boldoggá tesz, ha a beszélgetéseink hatására jobban érzed magad, és megszületik benned az „aha" élmény, ami lépéselőnyhöz juttat.',
    '<strong class="text-rose-deep/80">A változás egyetlen döntéssel kezdődik. Belevágunk?</strong>'
  ],
  credentialsTitle: 'Szakmai képesítések:',
  credentials: [
    'Kommunikációs szakember – diplomámat a József Attila Tudományegyetemen szereztem',
    'Life- és business coaching képzés',
    'Tréneri hatásgyakorlás tréning',
    'Access Bars',
    'Gendai Reiki Ho',
  ],
}

export const faq = {
  title: 'Kérdések és válaszok',
  items: [
    {
      question: 'Hogyan tudok időpontot foglalni?',
      answer:
        'Emailben <a href="mailto:kapcsolat@skipintro.hu" class="text-rose-deep/50 underline hover:opacity-75 transition-opacity">kapcsolat@skipintro.hu</a> vagy az oldalon található űrlap segítségével. A megadott elérhetőségeden veszem fel veled a kapcsolatot, és megbeszéljük a folytatást, az alkalmas időpontokat.',
    },
    {
      question: 'Hogyan fizethetem ki a szolgáltatást?',
      answer:
        'A megadott bankszámlaszámra tudsz utalni a jelentkezéskor. Az összeg beérkezését követően 48 órán belül küldöm a számlát emailben.',
    },
    {
      question: 'Online videóhívásban vagy személyesen találkozzunk?',
      answer:
        'Ez tőled függ, ahogy neked kényelmesebb. Hatékonyságában nincs különbség a kettő között. Az online-hoz csak jó internetkapcsolatra és zavartalan, nyugodt körülményekre van szükséged. Rugalmasabb, és nem kell hozzá utaznod. A személyes találkozásra Érden van lehetőség, előre egyeztetett helyszínen, jól megközelíthető helyen. Kérlek csak egészségesen gyere.',
    },
    {
      question: 'Mitől függ, hogy hány alkalmas lesz a coaching program?',
      answer: 'Minden eset más és más, így a helyzeted összetettségétől és a közös munka eredményeitől függ. A te tempódhoz igazodom, tapasztalataim szerint 5-10 alkalom az ideális. Az utolsó ülésen lezárjuk a folyamatot.',
    },
    {
      question: 'Milyen gyakran tartjuk az üléseket?',
      answer:
        'Két alkalom között optimális esetben egy-két hetet tartunk, hogy leülepedjenek a megszerzett információk, kipróbálhasd élesben az elsajátítottakat. Természetesen, ha elutazol, vagy egyéb elfoglaltságod akad, akkor eltelhet hosszabb idő is a két alkalom között – ez nem kizáró ok.',
    },
    {
      question: 'Mi történik, ha nem tudok részt venni a megbeszélt alkalmon?',
      answer:
        'Ha a korábban leegyeztetett alkalmat 24 órával a megbeszélt időpont előtt mondod le, akkor a kifizetett összeget teljes egészében visszatérítem, vagy kérhetsz helyette új időpontot. Amennyiben 24 órán belül mondod le, vagy nem jelensz meg az időpontodon, a befizetett díj nem kerül visszatérítésre. Természetesen kivételt képeznek a vis major esetek. Köszönöm szépen a megértésed! Amennyiben én nem tudok megjelenni a megbeszélt alkalmon, az adott időpontra befizetett árat teljes egészében visszautalom neked.',
    },
    {
      question: 'Mi a különbség a life coach és a pszichológus között?',
      answer:
        'A life coach egy lelki edző, aki a mentális erőnlétben, az érzelmi rugalmasságban támogat, az önismeretet és a tudatosságot fejleszti. Segít tisztázni az élethelyzeteket, feloldani az elakadásokat, hogy megtaláld a saját utadat. De nem terapeuta! Nem diagnosztizál, nem analizál és nem gyógyít (ez továbbra is pszichológusok, pszichiáterek és orvosok feladata).A coaching létjogosultságát mi sem bizonyítja jobban, mint hogy nagy nemzetközi cégek is alkalmaznak coachokat, hogy növeljék a hatékonyságukat, támogassák a munkavállalók sikereit, eredményeit. A coachingnak és a pszichológiának léteznek határterületei, ezért egyre több praktizáló pszichológus is elvégzi a life coach képzést, mert így ötvözni tudják mindkét módszertant az ügyfeleikhez igazítva.',
    },
  ],
}

export const privacyPolicy = {
  title: 'Adatkezelési tájékoztató',
  intro:
    'Az alábbi tájékoztató azt mutatja be, hogy a Skip Intro Coaching honlapján keresztül megadott személyes adatokat hogyan kezelem. A tájékoztatót bármikor frissítem, amennyiben a szolgáltatás vagy a jogszabályi környezet ezt indokolja.',
  lastUpdated: '2026. szeptember 7.',
  sections: [
    {
      heading: '1. Az Adatkezelőre vonatkozó információk',
      body: `Név: André Melinda egyéni vállalkozó\nSzékhely: 2030 Érd Betonozó utca 21.\nKépviseli: André Melinda\nNyilvántartási szám: 62746883\nBejegyző hatóság neve: Pest Vármegyei és Érdi Kereskedelmi és Iparkamara\nSzámlavezető bank neve: MBH Bank Nyrt.\nAdószám: 92328583-1-33\nEmail címe: kapcsolat@skipintro.hu\nHonlap: www.skipintro.hu\nAdatvédelmi tisztviselő neve: a GDPR 37. cikk szerint nem alkalmaz.`,
    },
    {
      heading: '2. Milyen adatokat kezelek?',
      body: 'A kapcsolatfelvételi űrlap kitöltésekor megadott nevet, email címet, telefonszámot és az üzenetben megadott egyéb adatokat kezelem.',
    },
    {
      heading: '3. Az adatkezelés célja',
      body: 'A megadott adatokat kizárólag a kapcsolatfelvétel, az időpont-egyeztetés és a coaching szolgáltatás nyújtásával kapcsolatos kommunikáció céljából használom fel.',
    },
    {
      heading: '4. Az adatkezelés jogalapja',
      body: 'Az adatkezelés az érintett önkéntes hozzájárulásán alapul, amelyet az űrlap kitöltésével és elküldésével ad meg.',
    },
    {
      heading: '5. Az adatok tárolásának időtartama',
      body: 'A megadott adatokat a kapcsolatfelvételtől, illetve az együttműködés lezárultától számított ésszerű ideig, de legfeljebb a jogszabályi kötelezettségek (pl. számlázás) által előírt ideig őrzöm meg.',
    },
    {
      heading: '6. Adatfeldolgozók',
      body: 'Az űrlap elküldését és az email értesítéseket az EmailJS szolgáltatás továbbítja. Az adatok kezelése és tárolása során az adatfeldolgozók mindenkori adatvédelmi szabályzata is irányadó.',
    },
    {
      heading: '7. Az érintett jogai',
      body: 'Bármikor kérheted a rád vonatkozó adatok helyesbítését, törlését vagy az adatkezelés korlátozását, valamint tájékoztatást kérhetsz a kezelt adatok köréről. Kéréseidet a fent megadott email címen jelezheted.',
    },
    {
      heading: '8. Jogorvoslat',
      body: 'Amennyiben úgy ítéled meg, hogy adataid kezelése nem megfelelő, panasszal fordulhatsz a Nemzeti Adatvédelmi és Információszabadság Hatósághoz (NAIH), vagy bírósághoz fordulhatsz.',
    },
  ],
}
