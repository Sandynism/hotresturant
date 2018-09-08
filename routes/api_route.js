var tableData = require("../data/table-data.js")
var waitlistData = require("../data/waitinglist-data.js")

module.exports = function(app) {

    // Displays all reservation
    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });

    // Displays the waitlist
    app.get("/api/waitlist", function(req, res) {
        res.json(waitlistData);
    });

    // Post to the tables
    app.post("/api/tables", function(req, res) {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitlistData.push(req.body);
            res.json(false);
        }
    })
}