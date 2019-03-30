const sha256 = require('js-sha256');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const request = require('request');

app.get("/",function(req,res){
    res.send("This is Home Page");
});

//Show register form
app.get("/register",function(req, res) {
    res.render("register.ejs");
});

app.post("/register",function(req,res){

	const hashedId = sha256(req.body.email);
	 const data = {
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

const port = 8050;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
