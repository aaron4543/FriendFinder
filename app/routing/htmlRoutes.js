// COMPLETED

var path = require('path');


module.exports = function(app) {

    // Displays survey html page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    // Displays home page to any unknown url
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    // Displays home page to root url
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

};