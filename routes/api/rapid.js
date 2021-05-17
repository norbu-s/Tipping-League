const express = require("express");
const fetch = require("node-fetch");

const router = express.Router();
const key = "8ca7052b47mshbb0b7605acc559ep1584fejsnddfe3689550a";

router.get("/table", function (req, res) {
  // res.json("it works")
  fetch(
    "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table",
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
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.get("/results", function (req, res) {
  // res.json("it works")
  fetch(
    "https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague?matchday=32",
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
      res.json(results);
    })
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

module.exports = router;
