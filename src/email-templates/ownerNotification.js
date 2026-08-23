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
      '— Skipintro Coaching időpontfoglaló űrlap',
    ].join('\n'),
  }
}
