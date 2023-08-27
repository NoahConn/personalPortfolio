import functions from 'firebase-functions'
import admin from 'firebase-admin'
import emailConfig from './emailConfig.js'
import nodemailer from 'nodemailer'
import express from 'express'
import bodyParser from 'body-parser'
admin.initializeApp()

// Set up your email service credentials
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: emailConfig.email,
    pass: emailConfig.password,
  },
});

const app = express();

// Automatically allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET, POST')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json())

app.post('/', async (req, res) => {

  const { name, email, subject, message } = req.body

  const mailOptions = {
    from: email,
    replyTo: email,
    to: emailConfig.email,
    subject: subject + ' - Message from ' + name,
    text: message,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b> ${message}</p></p>`
  };

  setTimeout(async () => {
    try {
      await mailTransport.sendMail(mailOptions)
      console.log('Message sent')
      res.status(200).send({ isEmailSend: true })
    } catch (error) {
      console.error('There was an error while sending the email:', error)
      res.status(500).send({ error: 'There was an error while sending the email.' })
    }
  }, 1000)
})

// Expose the API as a function
export const sendContactMessage = functions.https.onRequest(app)


// exports.verifyRecaptcha = functions.https.onCall(async (data, context) => {
//   const userResponseToken = data.recaptchaToken; // the token user gets after completing the captcha
//   const secretKey = '6Lc-iagnAAAAAMw43cZgpYblzARAMiPwl-uHUCY3' 
  
//   const verificationURL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${userResponseToken}`;

//   // Verify the reCAPTCHA response
//   const response = await axios.post(verificationURL);
//   const responseData = response.data;

//   if (responseData.success) {
//       return { success: true };
//   } else {
//       // Return the error to the client if the verification failed
//       throw new functions.https.HttpsError('failed-precondition', 'The request did not meet the server’s requirements.');
//   }
// })
