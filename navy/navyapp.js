var sha256 = require('js-sha256');
var express = require('express');
var bodyParser = require('body-parser')
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var request = require('request');

app.get("/",function(req,res){
    res.send("This is Home Page of navy");
});

//Show register form
app.get("/register",function(req, res) {
    res.render("register.ejs");
});



app.post("/register",function(req,res){

	var hashedId = sha256(req.body.email);
	 var data = {
                "$class": "org.forgesample.mynetwork.Owner",
                "ownerId": hashedId,
                "firstName": req.body.firstname,
                "lastName": req.body.lastname,
                "email": req.body.email
        };


    request.post(
        'http://localhost:3000/api/org.forgesample.mynetwork.Owner',
        { json: data },
        function (error, response, body) {
        
        if(response.statusCode == 500){
            alert('Account already exists');
        }
        
            if (!error && response.statusCode == 200) {
                console.log(body);
            }
        }
    );
    res.redirect("/");
});


app.get("/orders",function(req, res) {
    res.render("orders.ejs");
});

app.get("/orders/new",function(req, res) {
    res.render("new.ejs");
});

app.post("/orders",function(req,res){

	 var data = {
        "$class": "org.forgesample.mynetwork.Item",
        "itemId": req.body.ordername,
        "NSN": "s",
        "serialNumber": "s",
        "description": req.body.description,
        "curentStatus": "s",
        "owner": "resource:org.forgesample.mynetwork.Owner#nithin",
        "transporter": "resource:org.forgesample.mynetwork.Transporter#ayan"
      }

    request.post(
        'http://localhost:3000/api/org.forgesample.mynetwork.Item',      
        { json: data },
        function (error, response, body) {
        
            if (!error) {
                console.log(body);
            }
        }
    );
    res.redirect("/");
});


var port = 4000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
