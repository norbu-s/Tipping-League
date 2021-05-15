const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mysql = require("mysql")
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
require ("dotenv").config();
// const { default: axios } = require("axios");
const { addPoints } = require("./controllers/tipsController");
var env       = process.env.NODE_ENV || 'development';
var config = require('./config/config.json')[env];

var connection = mysql.createConnection({
  host     : config.host,
  user     : config.username,
  password : config.password,
  database : config.my_db
})

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

//Test for scheduled Job
app.use(express.json());

// Schedule tasks to be run on the server.
// cron.schedule('* * * * *', function () {
//  let teams;

//   fetch('http://localhost:3001/api/rapid/table')
//             .then(res => {
//                 return (res.json())
//             })
//   const results = teams.filter((team) => {
//     if (teams.team1.score > teams.team2.score,
        

//       )
      
//       fetch('http://localhost:3001/api/rapid/table', {
//         method: 'post',  
//          headers: {  
//        'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       },
//       body: JSON.stringify({  
//         points: this.state.points,    
//       }
//       )
//       }).then((Response) => Response.json())  
//       .then((result) => {
//         console.log(result);

   
//   })

//     console.log("return", teams)
//   console.log('running a task every minute');
// });

let transporter = nodemailer.createTransport({
  service:"Gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls:{
        rejectUnauthorized:false
    }
});

cron.schedule('55 21 15 * *', function () {
  connection.query("SELECT email From Tipping_League.Users where notification = 1;",
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      results.forEach(result => {
        console.log("send email to", result)
        let messageOptions = {
        from: 'Tipping League',
        to: result.email,
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
      })
    // Any operations on the data retrieved from the query here.


  console.log('---------------------');
  console.log('Running Cron Job');
 
});
})


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

