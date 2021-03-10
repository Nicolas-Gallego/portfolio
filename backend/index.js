const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const creds = require('./config');

app.use(bodyParser.json())
app.use(cors())
app.listen(8000)

let transport = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

let transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/send', (req, res) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n\n message: ${message} `

  let mail = {
    from: name,
    to: 'gallego.nicolaspro@gmail.com',  
    subject: 'New Message from Contact Form Portfolio',
    text: content
  }

  console.log(mail)

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


