import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, companyname, email, phone, service, textarea } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@e-websolution.in',
      subject: `E-WebSolution Contact Form Submission - ${service}`,
      text: `
        Name: ${name}
        Company Name: ${companyname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${textarea}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to send email.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}