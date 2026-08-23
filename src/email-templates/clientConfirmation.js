export function buildClientEmail({ name, email }) {
  return {
    subject: 'Megérkezett a jelentkezésed – Skipintro Coaching',
    message: [
      `Szia ${name}!`,
      '',
      `Köszönöm a jelentkezésed, hamarosan felveszem veled a kapcsolatot a megadott elérhetőségeden (${email}).`,
      '',
      'Üdvözlettel,',
      'Skipintro Coaching',
    ].join('\n'),
  }
}
