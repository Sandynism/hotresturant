// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");



// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Random Reservation Data
// =============================================================
// var tables = [
//     {
//         customerName: "James Bond",
//         phoneNumber: "007-007-0070",
//         customerEmail: "double0seven@gmail.com",
//         customerID: "1"
//     },
//     {
//         customerName: "Kat He",
//         phoneNumber: "347-789-6543",
//         customerEmail: "hehe@hmail.com",
//         customerID: "2"
//     },
//     {
//         customerName: "Sandy Yeung",
//         phoneNumber: "718-888-1234",
//         customerEmail: "sheshe@hmail.com",
//         customerID: "3"
//     }
// ]



// Random Waitlist Data ??
// =============================================================
var waitlist = []



// Routes
// =============================================================
require("./routes/html_route.js")(app);
require("./routes/html_route.js")(app);





// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
    var newRes = req.body;
    console.log(newRes);
    tables.push(newRes);
    res.json(newRes);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on http://127.0.0.1:" + PORT);
  });
  