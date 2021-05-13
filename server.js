const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
// const mysql = require("mysql")
const db = require('./models');
const routes = require("./routes");
const cors = require("cors");
const session = require('express-session');
const passport = require("./config/passport");
const cron = require('node-cron');
const nodemailer = require('nodemailer');
const app = express();
const fs = require('fs');



app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

//Test for scheduled Job
// app.use(express.json());
// cron.schedule('20 20 13 * *', function() {
//   console.log('---------------------');
//   console.log('Running Cron Job');
//   fs.unlink('./error.log', err => {
//     if (err) throw err;
//     console.log('Error file successfully deleted');
//   });
// });

let transporter = nodemailer.createTransport({
  // host: 'smtp.icloud.com',
  // port: 587,
  // secure: true,
  service:"Gmail",
  auth: {
    user: 'tu1466896@gmail.com',
    pass: 'xxxxxxxxxx'
  },
  tls:{
        rejectUnauthorized:false
    }
});

cron.schedule('25 21 13 * *', function() {
  console.log('---------------------');
  console.log('Running Cron Job');

  let messageOptions = {
    from: 'Tipping League',
    to: 'xxxxxxx@hotmail.com',
    subject: 'Tipping Reminder',
    text: "Hi there. Don't forget to tip this weekend."
  };

  transporter.sendMail(messageOptions, function(error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email successfully sent!');
    }
  });
});


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
}

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions

app.use("/", routes)


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});

