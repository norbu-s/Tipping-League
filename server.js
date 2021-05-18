require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mysql = require("mysql");
const mysql2 = require("mysql2");
const db = require("./models");
const routes = require("./routes");
const cors = require("cors");
const session = require("express-session");
const passport = require("./config/passport");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const app = express();
const fs = require("fs");
const fetch = require("node-fetch");
var env = process.env.NODE_ENV || "development";
var config = require("./config/config.json")[env];
const Sequelize = require("sequelize");

var connection = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.my_db,
});

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

//Test for scheduled Job
app.use(express.json());

// Schedule tasks to be run on the server.
cron.schedule("23 12 16 * *", function () {
  fetch(
    "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague?matchday:1",
    {
      headers: {
        "x-rapidapi-key": process.env.API_KEY,
        "x-rapidapi-host": process.env.API_URL,
        useQueryString: true,
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((results) => {
      console.log(results);
      // results.forEach(result => {
      // console.log(result)
      // if (result.team1.teamScore === result.team1.teamScore) { addPoints }
      // if (result.team1.teamScore > result.team1.teamScore) { }
      // if (result.team1.teamScore > result.team1.teamScore) { }
      // })

      // console.log("return", teams)
      console.log("running a task every minute");
    });
});
let transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

cron.schedule("30 19 18 * *", function () {
  connection.query(
    "SELECT email From Tipping_League.Users where notification = 1;",
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      results.forEach((result) => {
        console.log("send email to", result);
        let messageOptions = {
          from: "Tipping League",
          to: result.email,
          subject: "Tipping Reminder",
          text: "Hi there. Don't forget to tip this weekend.",
        };
        transporter.sendMail(messageOptions, function (error, info) {
          if (error) {
            throw error;
          } else {
            console.log("Email successfully sent!");
          }
        });
      });
      // Any operations on the data retrieved from the query here.

      console.log("---------------------");
      console.log("Running Cron Job");
    }
  );
});

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, "public")));
}

app.use(passport.initialize());

app.use(passport.session());

app.use("/", routes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});
