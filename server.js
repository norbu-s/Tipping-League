const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const mysql = require("mysql")
const db = require('./models');
const routes = require("./routes");
const cors = require("cors");
// const session = require('express-session');
// const sequelize = require('./config/config.json');
// const exphbs = require('express-handlebars');

const app = express();

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.use(express.json());
app.use(cors());



// const sess = {
//   secret: 'Super secret secret',
//   resave: false,
//   saveUninitialized: false,
// };

// app.use(session(sess));

// const hbs = exphbs.create({ helpers });
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
}


app.use("/",routes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`🌎 ==> API server now on port ${PORT}!`));
});

