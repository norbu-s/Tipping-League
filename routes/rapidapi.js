const express = require("express");
const fetch = require("node-fetch");

const router = express.Router() 
const key = "8ca7052b47mshbb0b7605acc559ep1584fejsnddfe3689550a";

router.get("/table", function (req, res) {
    // res.json("it works")
    fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table", {
        headers: {
            "x-rapidapi-key": "8ca7052b47mshbb0b7605acc559ep1584fejsnddfe3689550a",
            "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }
    ).then(res => {
        return (res.json())
    }).then(results => {
        console.log(results)
        res.json(results)
    }).catch(err => {
        res.json(err)
        console.log(err)
    });
}); 

router.get("/matches", function (req, res) {
    // res.json("it works")
    fetch("https://heisenbug-premier-league-live-scores-v1.p.rapidapi.com/api/premierleague/table?matchday=36", {
        headers: {
            "x-rapidapi-key": "8ca7052b47mshbb0b7605acc559ep1584fejsnddfe3689550a",
            "x-rapidapi-host": "heisenbug-premier-league-live-scores-v1.p.rapidapi.com",
            "useQueryString": true
        }
    }
    ).then(res => {
        return (res.json())
    }).then(results => {
        console.log(results)
        res.json(results)
    }).catch(err => {
        res.json(err)
        console.log(err)
    });
});






module.exports = router;