# Skipintro Coaching – weboldal

Egyoldalas (one-page) weboldal Vue 3 + Vite + Tailwind CSS 4 alapon, Formspree űrlapkezeléssel.

## Gyors indulás

```sh
npm install
npm run dev
```

Ez elindít egy helyi szervert (általában `http://localhost:5173`), ahol élőben látod a változtatásokat.

Build (éles verzió, feltölthető fájlok):

```sh
npm run build
```

Ez létrehoz egy `dist/` mappát – ennek a **tartalmát** kell feltölteni a tárhelyre (pl. Netlify, Vercel, vagy bármilyen statikus tárhely).

---

## Mit KELL cserélni élesítés előtt

### 1. Szövegek, árak, elérhetőségek → `src/content.js`
Az oldal **összes** szövege ebben az egy fájlban van. A `[szögletes zárójeles]` részeket cseréld ki valós adatra (név, telefonszám, email, szakmai háttér). A többi mondat csak példaszöveg, bátran írd át.

### 2. Formspree űrlap bekötése
Az időpontkérő űrlap jelenleg egy PLACEHOLDER Formspree végpontra mutat, tehát még nem küld sehova.

1. Regisztrálj a [formspree.io](https://formspree.io) oldalon (ingyenes csomag: havi 50 beküldés).
2. Hozz létre egy új űrlapot ("New Form"), és másold ki a saját végpont URL-edet (valami ilyesmi: `https://formspree.io/f/abcdwxyz`).
3. Illeszd be a `src/content.js` fájlban a `site.formspreeEndpoint` értékébe.
4. Az első valódi beküldés után a Formspree emailben kér egy megerősítést – ezt kattintsd el, utána már minden beküldés a megadott email címre érkezik.

> Ha később nagyobb forgalom lenne, és a Formspree ingyenes limitje (50/hó) kevés lenne, alternatíva a Web3Forms – de figyelem: annak nincs EU-s adattárolása, GDPR szempontból a Formspree jobban dokumentált.

### 3. Fotók
Az oldalon két helyen van szaggatott keretes "fotó helye" placeholder (Hero és Rólam szekció). Ha van fotó, ezekre a helyekre kell majd egy `<img>` taget tenni a `HeroSection.vue` és `AboutSection.vue` fájlokban (a placeholder `<div>`-et lecserélve).

### 4. Adatkezelési tájékoztató
A `site.privacyPolicyUrl` (content.js) jelenleg `#`-re mutat. Mivel az űrlap személyes adatot (név, telefon, email) gyűjt, GDPR szerint kell egy valódi adatkezelési tájékoztató – ezt érdemes egy ügyvéddel/sablonnal elkészíttetni, majd a linket ide berakni.

---

## Design testreszabás → `src/style.css`

A színek a Coolors paletta alapján vannak beállítva: **Blue Slate, Royal Gold, Pearl Aqua, Cotton Rose, Frozen Water**. Mindegyik jól kommentezve van a `src/style.css` tetején, a `@theme` blokkban:

- `--color-ink` (Blue Slate) – sötét szekciók háttere
- `--color-gold` – fő akcentszín, gombok, görgetési sáv
- `--color-aqua` – másodlagos akcent, keretek, ikonok
- `--color-rose` – harmadlagos akcent, "Kinek szól" kártya
- `--color-paper` (Frozen Water) – fő világos háttér

Három helyen szerepel **gradiens** (a `--gradient-primary` és `--gradient-progress` változókból, `.bg-gradient-primary` / `.bg-gradient-progress` class-ként használva):
1. a lap tetején futó "lejátszási sáv" (arany → türkiz → rózsaszín),
2. a fő gombok (Időpontfoglalás),
3. a kiemelt ártábla-kártya.

Ha másik gradienst szeretnél, elég a `--gradient-primary` / `--gradient-progress` értékét átírni a `style.css`-ben – mindenhol automatikusan frissül.

Betűtípus csere esetén az `index.html`-ben lévő Google Fonts linket is cserélni kell.

## Szerkezet

```
src/
  content.js          -> minden szöveg, ár, elérhetőség
  style.css           -> színek, betűtípusok (Tailwind theme)
  App.vue             -> szekciók összefűzése
  components/
    TheNav.vue         -> fejléc, navigáció
    ScrollProgress.vue -> a lap tetején futó "lejátszási sáv"
    HeroSection.vue
    AudienceSection.vue -> "Kinek szól / Kinek nem"
    PricingSection.vue  -> "Szolgáltatások és árak"
    AboutSection.vue    -> "Rólam"
    FaqSection.vue      -> "GYIK"
    ContactSection.vue  -> időpontkérő űrlap (Formspree)
    TheFooter.vue
```
