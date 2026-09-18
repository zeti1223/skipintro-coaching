# Skip Intro Coaching

> *Because sometimes you just need to skip the small talk and get straight to what matters.*

Welcome to the official repository for **[skipintro.hu](https://skipintro.hu)** - the web home of **André Melinda**, a certified life and business coach based in Érd, Hungary.

This website was designed and built with a simple goal in mind: creating a warm, calm, and distraction-free space where people feeling stuck, overwhelmed, or standing at life's crossroads can take their first step toward clarity.

---

> **A gentle note for testers & reviewers:**  
> Please **refrain from submitting test messages through the live booking form** on the website or during local testing with production keys. Submitting the form triggers real automated transactional emails directly to Melinda's inbox and the inputted email address via EmailJS. If you are developing locally and want to test form behaviors, please mock the `sendEmail` method or use a test EmailJS account.

---

## The Story Behind the Project

Coaching is deeply personal. Visiting a coach's website shouldn't feel like browsing an enterprise SaaS landing page - it should feel like stepping into a peaceful, welcoming room with a warm cup of tea.

Every detail in this project reflects that philosophy:

- **Calm & Grounding Palette:** Gentle paper tones, warm golden yellows, soft teals, and subtle rose accents create a relaxed visual environment.
- **Thoughtful Typography:** Headings in *Fraunces* bring human warmth and editorial elegance, body copy in *Manrope* keeps reading effortless, and gentle script accents (*Homemade Apple*) add a personal, handwritten touch.
- **Frictionless Booking:** A straightforward contact form connects directly with EmailJS. The moment someone reaches out, both Melinda and the client receive immediate, formatted confirmations.
- **Single Source of Truth:** All copy, pricing, navigation, and service descriptions live in one readable file (`src/content.js`), making updates effortless.

---

## How It's Built

Under the hood, the site is designed to be lightweight, blazing fast, and easy to maintain without unnecessary complexity.

- **[Vue 3](https://vuejs.org/)** (`<script setup>` Composition API) - simple, reactive, component-driven UI.
- **[Vite 8](https://vite.dev/)** - instant development feedback and lean production builds.
- **[Tailwind CSS v4](https://tailwindcss.com/)** - modern utility-first styling with zero config bloat.
- **[EmailJS](https://www.emailjs.com/)** - handles two-way transactional emails (notification to the coach + branded confirmation to the client) directly from the client side without needing a dedicated backend server.
- **Custom Scroll Directive (`v-reveal`)** - a tiny Intersection Observer helper that fades in sections smoothly as you scroll down.
- **Custom Static Page Generation** - a lightweight Vite plugin that automatically handles the `/adatkezeles` privacy policy route and the `404.html` fallback for seamless hosting on GitHub Pages.

## Running the Project Locally

If you'd like to run or work on this site on your machine:

### Prerequisites

Make sure you have **Node.js** (v22+ recommended) and **npm** installed.

### Setup

Clone the repo and install dependencies:

```bash
git clone https://github.com/zeti1223/skipintro-coaching.git
cd skipintro-coaching
npm install
```

### Start Development Server

```bash
npm run dev
```

Open `http://localhost:8000` in your browser to see the live site with hot-reload enabled.

### Build for Production

```bash
npm run build
```

This compiles the application and outputs the static assets, `/adatkezeles` page, and `404.html` into the `dist/` folder ready for deployment.

### Other Handy Scripts

- `npm run preview` - Test the built production bundle locally.
- `npm run format` - Run Prettier across the `src/` directory to keep the code tidy.

---

## Updating Website Content

You rarely need to touch the Vue components to update text or prices. Simply open:

**[`src/content.js`](src/content.js)**

Here you can tweak:

- Navigation items
- Hero titles, subtitles, and call-to-actions
- Pricing and session details
- FAQ items and answers
- Social links and contact info

---

## Deployment

The site is set up for automatic deployment. Whenever code is pushed to the `main` branch, a GitHub Actions workflow kicks in, builds the project, and publishes it straight to **GitHub Pages** with custom domain routing to [skipintro.hu](https://skipintro.hu).

---

## Credits & Acknowledgments

- **Coaching & Content:** André Melinda ([Skip Intro Coaching](https://skipintro.hu))
- **Design & Development:** [Botyánszki Zétény](https://zeteny.cigoria.eu)
