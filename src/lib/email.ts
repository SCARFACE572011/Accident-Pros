import nodemailer from 'nodemailer'

export function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendLeadEmail(data: {
  name: string
  phone: string
  caseType: string
  message?: string
  email?: string
  ip?: string
}) {
  const transporter = createTransporter()
  const to = process.env.CONTACT_EMAIL || 'info@accidentpros.com'

  await transporter.sendMail({
    from: `"Accident Pros Website" <${process.env.SMTP_USER}>`,
    to,
    subject: `New Lead: ${data.caseType} — ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #1B2B4B;">New Website Lead</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; font-weight:bold;">Name</td><td style="padding: 8px;">${data.name}</td></tr>
          <tr style="background:#f8f9fb;"><td style="padding: 8px; font-weight:bold;">Phone</td><td style="padding: 8px;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight:bold;">Case Type</td><td style="padding: 8px;">${data.caseType}</td></tr>
          ${data.email ? `<tr style="background:#f8f9fb;"><td style="padding: 8px; font-weight:bold;">Email</td><td style="padding: 8px;">${data.email}</td></tr>` : ''}
          ${data.message ? `<tr><td style="padding: 8px; font-weight:bold;">Message</td><td style="padding: 8px;">${data.message}</td></tr>` : ''}
        </table>
        <p style="color:#666; font-size:12px; margin-top:24px;">Submitted from accidentpros.com${data.ip ? ` | IP: ${data.ip}` : ''}</p>
      </div>
    `,
  })
}
