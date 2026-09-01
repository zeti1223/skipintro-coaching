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
  contactEmail: 'kapcsolat@skipintrocoaching.hu',
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
  },
  divider1: {
    url: '/flower.jpg',
    alt: 'Virágok bújnak elő egy fa deszkapadló résein',
    quote: 'A felfedezés igazi varázsa nem abból áll, hogy új helyeket ismerjünk meg, hanem hogy más szemmel nézzünk. — Marcel Proust',
  },
  divider2: {
    url: '/stairs.jpg',
    alt: 'Csigavonalban felfelé kanyargó lépcsősor felülnézetből',
    quote: 'A felfedezés igazi varázsa nem abból áll, hogy új helyeket ismerjünk meg, hanem hogy más szemmel nézzünk. — Marcel Proust',
  },
  divider3: {
    url: '/stairs.jpg',
    alt: 'Ideiglenes képcsík',
    quote: 'Le vagy fel?',
  },
}

export const nav = [
  { label: 'Kezdőlap', href: '/#hero' },
  { label: 'Kinek szól', href: '/#kiknek' },
  { label: 'Rólam', href: '/#rolam' },
  { label: 'Szolgáltatások', href: '/#szolgaltatasok' },
  { label: 'GYIK', href: '/#gyik' },
  { label: 'Így haladunk', href: '/#haladas' },
]

export const hero = {
  name: 'André Melinda',
  subtitle: 'Life- és Business Coach,\nkommunikációs szakember',
  greeting: 'Szeretettel köszöntelek!',
  paragraph: 'A mindennapi életünk szerves része lett a változás. Körülöttünk minden gyorsabban alakul át, mint valaha. Ami ma még igaz, biztosnak tűnik és működik, holnap talán már semmit nem ér. És aki szeretné harmonikusan élni az életét, megtartva a lelki és fizikai egészségét, annak meg kell tanulnia rugalmasan hozzáállni a fordulatokhoz, alkalmazkodni a haladáshoz éppúgy, mint a hanyatláshoz. Még nehezebb a dolgod, ha az életedet komolyan befolyásoló tényezők változtak, az alapköveidbe vetett hited ingott meg – legyen az a családi állapotod, a karrierutad, vagy az egészségi állapotod. Mert ilyenkor úgy kell döntések sorait meghoznod, hogy közben egy érzelmi viharban próbálsz (túl)élni, és néha már azt sem tudod, mitől érzed rosszul magad.<br><br> Ha már eddig eljutottál az oldalamon, az azt jelenti, hogy valamin változtatni szeretnél. Talán még csak ízlelgeted, hogy jó lenne valamit élhetőbbé, kényelmesebbé, hatékonyabbá tenni, vagy már bele is kezdtél, de megakadtál. A jó hír az, hogy coachként és kommunikációs szakemberként ezen az úton tudlak támogatni. Hogy meglásd azt, milyen lehetőségeid vannak akár egy kilátástalannak tűnő helyzetben, hogy felfedezd azokat az erőforrásokat, amikkel rendelkezel, és együtt bevilágítsuk azokat az utakat, amiket most még homály fed, pedig rád várnak.<br><br><strong class="text-gold">A Skip Intro Coaching célja, hogy megtanulj pont annyit, pont úgy és pont akkor változtatni magadon, hogy önmagad legjobb kiadása lehess.</strong> És itt nem minden esetben kell valami hatalmas, radikális dologra gondolnod: az élet döntő változásai apró, látszólag semleges átalakulásokkal kezdődnek, és onnan folytatódnak tovább, hogy a folyamat végére újra tudj szabadon lélegezni a mellkasodat nyomó súlyok nélkül, hogy éjszaka ne forgolódj álmatlanul a problémáidon rágódva, hogy többet mosolyogj a tükörben és a világra és hogy bátrabban, határozottabban nézz szembe az új kihívásokkal.',
  primaryCta: { label: 'A Skip Intro Coachingról', href: '#kiknek' },
  secondaryCta: { label: 'Időpontfoglalás', href: '#kapcsolat' },
  photoCaption: 'Portré',
  coachName: 'André Melinda',
  coachRole: 'Life- és Business Coach',
}

export const audience = {
  title: 'Mire számíthatsz a közös munka során?',
  intro:
    'Értő figyelemre, megértésre, célzott kérdésekre, diszkrécióra, ítélkezésmentes közegre. És természetesen mentális edzésre.\n\nHogy miért Skip Intro lett a módszerem neve? Mert az a tapasztalatom, hogy úgy lehet a leghatékonyabban együtt dolgozni, ha nincs mellébeszélés, ha a lényegre koncentrálunk. Ha az unalomig ismételt önsegítő közhelyek helyett, a te személyes fejlődésedre fektetjük a hangsúlyt. Igen, többes számban, mert a coaching folyamat egy közös munka. Te hozod a dilemmádat, a megoldandódat és az őszinteségedet – hiszen az üléseket nyílt lapokkal lehet igazán jól végezni – én pedig a maximális figyelmemet, tudásomat, tapasztalatomat adom egy biztonságos közegben. A szakma szabályai szerint szerződünk.\n\nA coaching tehát nem egy kedves baráti beszélgetés, ahol te panaszkodsz, és pedig megértően bólogatok. Ez egy hetven éve útjára indult, szerteágazó, tényeken, évtizedes kutatásokon alapuló mentális edzésmódszer, ami napjainkban is folyamatosan fejlődik.\n\nNekem a coaching azért lett szerelem, mert a jövőre fókuszál, azt alakítja a jelenlegi, még ki nem aknázott lehetőségeiddel együtt. Mert mérhetők az eredményei (ugye mondtam már, hogy nincs mellébeszélés? 😊), mert időben jól körülhatárolt, rád szabott, elérhető célokat tűzünk ki, amik után magabiztosabb leszel, és az üléseken szerzett tapasztalatokat később is bármikor fel tudod használni.',
  forTitle: 'Amiben támogatni tudlak',
  for: [
    'Családi kapcsolatok, körülmények változása: hogyan kezdhetsz új életet a szakítás után, hogyan dolgozd fel a válás sebeit, hogyan alkalmazkodj a megváltozott szerepkörökhöz, új házasságot kötnél, de vannak félelmeid vel kapcsolatban',
    'Anyaság, apaság hozta változások: gyermeked született és minden felborult, nyakadon a dackorszak, a kamaszkor, és nem tudsz megbirkózni vele, kirepültek a gyerekek, és nem találod a helyed',
    'Nőiesség megélése: támogatlak a testi-lelki változások elfogadásában, a női szerepek megélésében',
    'Munkahelyi változások: segíthetek, ha nem találod magad a helyeden a karrieredben, váltanál, de nincs meg az erőd hozzá, vagy nem tudod merre indulj, vagy ha nehezen megy az együttműködés más kollégákkal',
    'Önbizalom-, önértékeléshiány: Ha gyakran úgy érzed, neked semmi nem sikerül. Ha nem tudod miért akadtak el a dolgaid, és egyhelyben toporogsz, ha nem érzed jól magad a bőrödben jóideje, de nem tudod, mi a gond igazából. Ha gondot okoz, hogy elmondd a véleményed, meghúzd a határaidat, kiállj magadért',
    'Kapcsolati elakadások: Ha nem találod a hangot a pároddal, ha megrekedt a kapcsolatotok, és szeretnél lendíteni rajta, ha elbizonytalanodtál, miért vagytok együtt, ha keresed mellette a régi önmagadat',
    'Stresszlevezetés: A feszültség már tapintható az életedben, de nem tudod, mihez kezdj vele',
    'Kommunikációs problémák: Nehezen fejezed ki magad, nem tudsz mások előtt beszélni, pedig a munkádhoz szükséges lenne, folyton félreértitek egymást a pároddal, mert elbeszéltek egymás mellett'
  ],
  disclaimer: 'Ha pszichiátriai kezelése alatt állsz, olyan gyógyszert szedsz, ami befolyásolja a döntési képességeidet, ha szenvedélybetegséggel küzdesz, vagy ha szuicid hajlamaid vannak, akkor nem a coaching a te terápiád. Nem vállalhatlak el.',
}

export const process = {
  title: 'Így haladunk a céljaid felé',
  intro: 'A coaching folyamat egy 0. alkalommal, azaz egy akvizíciós beszélgetéssel kezdődik, amikor megismerkedünk, megnézzük, milyen dilemmával érkeztél, és felmérjük egymást, hogy tudunk-e együtt dolgozni.',
  steps: [
    {
      title: 'Akvizíciós beszélgetés',
      description: 'Ha ezt követően mindketten igent mondunk a közös munkára, akkor leszerződünk, és megbeszéljük az első ülés időpontját. A kitűzött cél elérése általában 5-10 alkalom, attól függően, hogyan haladsz. Minden eset más és más, ezért előre ettől pontosabban nem lehet megmondani.'
    },
    {
      title: 'Ülések és házi feladatok',
      description: 'Az órák végén személyre szabott házi feladatot kapsz, ami közelebb visz a céljaid eléréséhez, és ami segít elmélyülni. Vallom, hogy sok esetben a két ülés között történnek a csodák, akkor érik be az ülésen megszerzett tudás és jön el az "aha" élmény.'
    },
    {
      title: 'Lezárás',
      description: 'A szakmai szabályok szerint maximum 10 alkalom lehet a találkozásaink száma, legkésőbb akkor lezárjuk az ülést.'
    }
  ],
  note: 'Gyakran megkapják a coachok a laikusoktól azt a nem túl jószándékú kommentet, hogy "A tízezer coach országa lettünk. Most akkor az összes pszichológus eldobhatja a diplomáját, amiért éveken át tanult?" Én is kaptam már meg.<br><br><br><br>Nos az igazság az, hogy ez egy súlyos tévedés. A pszichológus más területekkel foglalkozik és más módszerekkel, mint a coach. A kettő remekül megfér egymás mellett, és szépen kiegészítik egymást. Míg a pszichológia sok esetben analizál és a múltat térképezi fel, a coaching, azaz a lélek edzése az erőforrásokra és a jövőre koncentrál, lépésről-lépésre építkezve. Vannak benne nyilván átfedések, de nem azonos úton halad. A létjogosultágát pedig mi sem bizonyítja jobban, mint hogy komoly nemzetközi világcégek hosszú idő óta alkalmaznak coachokat, hogy növeljék a hatékonyságukat, támogassák a munkavállalók sikereit, eredményeit, valamint az, hogy egyre több gyakorló pszichológus is elvégzi a life coach képzés, mert így az ügyfeleire szabva tudják ötvözni mindkét módszertant.'
}

export const pricing = {
  title: 'Szolgáltatások és árak',
  intro: 'Az alábbi árak és időtartamok tájékoztatók.',
  plans: [
    {
      name: '0. alkalom, online akvizíció',
      duration: '30 perc',
      price: 'Ingyenes',
      description:
        'Megismerkedünk, beszélünk a dilemmádról, eldöntjük, hogy tudunk-e együtt dolgozni.',
      featured: false,
    },
    {
      name: 'Online life coaching',
      duration: '80-90 perc',
      price: '20 000 Ft',
      description: 'Videóhívásban. Csak jó internet kapcsolatra van szükséged, és természetesen rugalmasabb, nem kell hozzá utaznod, plusz időt rászánnod. A saját kényelmedből beszélgethetünk, ha neked úgy komfortosabb.',
      featured: true,
    },
    {
      name: 'Személyes life coaching',
      duration: '80-90 perc',
      price: '20 000 Ft',
      description: 'Előre egyeztetett helyszínen. A személyes találkozásra egyelőre Érden van lehetőség, előre egyeztetünk helyszínt.',
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
  quote: 'Dönthetünk úgy, hogy felelőséget vállalunk a nehézségeinkért és a gyógyulásunkért. Dönthetünk úgy, hogy szabadok leszünk. — Edith Eva Eger',
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
        'Az oldalon található űrlapon add meg az elérhetőségeidet. Azon veszem fel veled a kapcsolatot 48 órán belül, és megbeszéljük a folytatást, az alkalmas időpontokat. Az adataidat a GDPR szabályozás szerint kezeljük, az oldalról nem juthat ki más helyre.',
    },
    {
      question: 'Online vagy személyesen találkozzunk?',
      answer:
        'Ez tőled függ, ahogy neked kényelmesebb. Hatékonyságában nincs különbség a kettő között. Az online-hoz csak jó internet kapcsolatra van szükséged, és természetesen rugalmasabb, nem kell hozzá utaznod, plusz időt rászánnod. A saját kényelmedből beszélgethetünk, ha neked úgy komfortosabb. A személyes találkozásra egyelőre Érden van lehetőség, előre egyeztetünk helyszínt.',
    },
    {
      question: 'Mitől függ, hogy hány alkalmas lesz a coaching folyamat?',
      answer:
        'Minden eset más, így a dilemmád összetettségétől és a közös munka eredményeitől függ. Az ingyenes akvíziciós beszélgetés során kölcsönösen felmérjük egymást, hogy tudunk-e együtt dolgozni. És ha igent mondtunk egymásnak, akkor elkezdjük a közös munkát, ami általában 5-10 alkalom. Az utolsó ülésen lezárjuk a folyamatot.',
    },
    {
      question: 'Milyen gyakran tartjuk az üléseket?',
      answer: 'Az ülések között legalább egy-két hétnek kell eltelnie, hogy leülepedjenek a megszerzett információk, kipróbálhasd élesben magadon az elsajátítottakat és elvégezd a kapott házi feladatot, ami elmélyülést, gyakran önvizsgálatot igényel. Természetesen ha elutazol, vagy egyéb elfoglaltságod akad, akkor telhet el hosszabb idő is a két alkalom között, de az egy-két hét az optimális.',
    },
    {
      question: 'Mi történik, ha nem tudok részt venni a korábban megbeszélt alkalmon?',
      answer: 'A leegyeztetett alkalmat 24 órával a megbeszélt időpont előtt lemondhatod díjmentesen. A 10 alkalmas ülés során kétszer van erre lehetőséged. Ha viszont nem jelensz meg az ülésen, vagy 24 órán belül mondod le, akkor az óradíj 50%-át meg kell fizetned, mivel az nekem kiesett idő lesz a naptáramban. Köszönöm szépen a megértést!',
    },
    {
      question: 'Hogyan fizethetem ki a szolgáltatást?',
      answer:
        'A megadott bankszámlaszámon tudsz utalni az ülésünk napján, vagy legkésőbb az ülést követő 48 órában. A coaching folyamat megkezdése előtt erről is hivatalos szerződést kötünk.',
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
      body: `Adatkezelő: ${site.brandName} ${site.brandSuffix}<br><br>Kapcsolat: ${site.contactEmail}`,
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
