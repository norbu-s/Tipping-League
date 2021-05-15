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
const fetch = require("node-fetch");
const { default: axios } = require("axios");



app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

//Test for scheduled Job
app.use(express.json());


cron.schedule('11 01 15 * *', function () {
  console.log('---------------------');
  console.log('Running Cron Job');
  var unirest = require("unirest");

  var req = unirest("GET", "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague");

  req.query({
    "live": "true"
  });
});

req.headers({
	"x-rapidapi-key": "xxxxxxxxx",
	"x-rapidapi-host": "xxxxxxxx",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});


let transporter = nodemailer.createTransport({
  service:"Gmail",
  auth: {
    user: 'xxxxxxx@gmail.com',
    pass: 'xxxxxxxxxxxxx'
  },
  tls:{
        rejectUnauthorized:false
    }
});

cron.schedule('47 00 14 * *', function () {
  const result = [];
  mysql.connection.query("SELECT email From Tipping_League.Users where notification = 1;",
    function (error, results, fields) {
      if (error) throw error;
      console.log(result[0]);
    // Any operations on the data retrieved from the query here.
})

  console.log('---------------------');
  console.log('Running Cron Job');
 

  let messageOptions = {
    from: 'Tipping League',
    to: result,
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

