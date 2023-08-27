import functions from 'firebase-functions'
import admin from 'firebase-admin'
admin.initializeApp()

// Set up your email service credentials
// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// })

console.log(functions.config())

export const sendContactMessage = functions.https.onRequest(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    replyTo: email,
    to: gmailEmail,
    subject: subject + ' - Message from ' + name,
    text: message,
    html: `<p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Message:</b> ${message}</p></p>`
  };

  try {
    await mailTransport.sendMail(mailOptions);
    console.log('Message sent');
    res.status(200).send({ isEmailSend: true });
  } catch(error) {
    console.error('There was an error while sending the email:', error);
    res.status(500).send({ error: 'There was an error while sending the email.' });
  }
})







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
