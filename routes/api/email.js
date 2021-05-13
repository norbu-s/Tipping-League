

let nodemailer = require('nodemailer');

nodemailer.createTransport({
  host: "mail.YOURDOMAIN.com", 
    port: 587,
    secure: false,
  auth: {
    user: "YOURUSERNAME",
    pass: "YOURPASSWORD" 
  }
});

// verifying the connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages!");
  }
});

router.post('/access', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message
  var content = `email: ${email} \n message: ${message} `

  var mail = {
    from: TippingLeague, 
    to: name, 
    message: subject,
    text: content
  }

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