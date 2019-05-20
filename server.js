// Dependencies
var express = require("express");

var app = express();
var PORT = process.env.PORT || 8080;

// Parse URL and JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Listener
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});