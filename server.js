const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
const mysql = require("mysql")
const routes = require("./routes")
const db = require('./models');
const session = require('express-session');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');


app.use(express.json());

app.use(cors());



const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: false,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
}

app.use("/", routes);

app.post('/register', (req, res) => {
  debug.query("INSERT INTO Users (first_name,last_name,username,password) VALUES (?,?)", (err, request) => {
    console.log(err);
  }
  );
});


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});

