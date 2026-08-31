export function buildOwnerEmail({ name, email, message }) {
  return {
    subject: `Új jelentkezés: ${name}`,
    message: [
      `Jelentkezett: ${name}`,
      `Email: ${email}`,
      '',
      'Üzenet:',
      message,
      '',
      '- Skip Intro Coaching időpontfoglaló űrlap',
    ].join('\n'),
  }
}
