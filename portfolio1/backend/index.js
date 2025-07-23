const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const twilio = require('twilio');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
const destPhone = process.env.DEST_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

app.post('/send-sms', async (req, res) => {
  const { firstName, lastName, email, subject, message } = req.body;
  if (!firstName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const smsBody = `New Contact Form:\nName: ${firstName} ${lastName || ''}\nEmail: ${email}\nSubject: ${subject || ''}\nMessage: ${message}`;
  try {
    await client.messages.create({
      body: smsBody,
      from: twilioPhone,
      to: destPhone
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send SMS', details: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
}); 