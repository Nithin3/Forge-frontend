const express = require('express');
const router = express.Router();
const request = require('request');
const users = require('../db/users');
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/transactions", (req, res) => {
   res.end('Transaction History');
});

router.post("/register", (req, res) => {
   // const data = {
   //      "$class": "org.forgesample.mynetwork.Item",
   //      "itemId": req.body.ordername,
   //      "NSN": "s",
   //      "serialNumber": "s",
   //      "description": req.body.description,
   //      "curentStatus": "s",
   //      "owner": "P",
   //      "transporter": "Y"
   //    };
    console.log(req);
    const data = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.emailaddr
    };

    users.create(data, function(err) {
        if (err) {
            throw err;
        }
        else {
            console.log('user inserted');
            console.log(data.firstname);
            console.log(data.lastname);
        }
    });
    res.redirect("/");
});


module.exports = router;