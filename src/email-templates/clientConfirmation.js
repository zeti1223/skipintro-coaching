export function buildClientEmail({ name, email, phone }) {
  const contact = phone ? `${email} vagy ${phone}` : email
  return {
    subject: 'Megérkezett a jelentkezésed - Skip Intro Coaching',
    message: [
      `Szia ${name}!`,
      '',
      `Köszönöm a jelentkezésed, hamarosan felveszem veled a kapcsolatot a megadott elérhetőségeden (${contact}).`,
      '',
      'Üdvözlettel,',
      'André Melinda',
      '',
      'Skip Intro Coaching',
    ].join('\n'),
  }
}
