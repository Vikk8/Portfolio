require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, project } = req.body;

  if (!name || !email || !project) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, message: "Invalid email address." });
  }

  try {
    // Email to you (Vikki) — notification of new inquiry
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: `New Portfolio Inquiry from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #0F172A; color: #E2E8F0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #22D3EE; margin-bottom: 8px;">New Contact Form Submission</h2>
          <p style="color: #94A3B8; margin-bottom: 24px;">Someone reached out via your portfolio.</p>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; width: 120px;">Name</td>
              <td style="padding: 10px 0; color: #E2E8F0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8;">Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #22D3EE;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #94A3B8; vertical-align: top;">Project</td>
              <td style="padding: 10px 0; color: #E2E8F0; line-height: 1.6;">${project}</td>
            </tr>
          </table>
          <a href="mailto:${email}" style="display: inline-block; margin-top: 24px; padding: 12px 24px; background: #22D3EE; color: #0F172A; border-radius: 8px; font-weight: 700; text-decoration: none;">Reply to ${name}</a>
        </div>
      `,
    });

    // Auto-reply to the sender
    await transporter.sendMail({
      from: `"Vikki Gupta" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "Thanks for reaching out, I'll be in touch soon!",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; background: #0F172A; color: #E2E8F0; padding: 32px; border-radius: 12px;">
          <h2 style="color: #22D3EE; margin-bottom: 8px;">Hey ${name}, got your message!</h2>
          <p style="color: #94A3B8; line-height: 1.7;">Thanks for reaching out. I've received your inquiry and will get back to you within 24–48 hours.</p>
          <p style="color: #94A3B8; line-height: 1.7;">In the meantime, feel free to connect with me on <a href="https://www.linkedin.com/in/vikkigupta8/" style="color: #22D3EE;">LinkedIn</a>.</p>
          <p style="margin-top: 32px; color: #E2E8F0; font-weight: 600;">— Vikki Gupta</p>
          <p style="color: #94A3B8; font-size: 12px;">Data Engineer · Accenture</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Message received! I'll be in touch soon." });
  } catch (err) {
    console.error("Email send error:", err.message);
    console.error("Full error:", err);
    return res.status(500).json({ success: false, message: err.message || "Failed to send message. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  transporter.verify((err, success) => {
    if (err) {
      console.error("Gmail auth failed:", err.message);
    } else {
      console.log("Gmail transporter ready to send emails.");
    }
  });
});
