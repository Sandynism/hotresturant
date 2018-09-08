var path = require("path");

module.exports = function(app) {

    // Route to the HTML Page
    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/reserve.html"));
    });
    
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/tables.html"));
    });
    
    app.use( function(req, res) {
        res.sendFile(path.join(__dirname, "./../public/home.html"));
    });
}