export function buildOwnerEmail({ name, email, phone, message }) {
  return {
    subject: `Új jelentkezés: ${name}`,
    message: [
      `Jelentkezett: ${name}`,
      `Email: ${email}`,
      `Telefon: ${phone}`,
      '',
      'Üzenet:',
      message,
      '',
      '- Skip Intro Coaching időpontfoglaló űrlap',
    ].join('\n'),
  }
}
