export function buildClientEmail({ name, email }) {
  return {
    subject: 'Megérkezett a jelentkezésed - Skip Intro Coaching',
    message: [
      `Szia ${name}!`,
      '',
      `Köszönöm a jelentkezésed, hamarosan felveszem veled a kapcsolatot a megadott elérhetőségeden (${email}).`,
      '',
      'Üdvözlettel,',
      'Skip Intro Coaching',
    ].join('\n'),
  }
}
