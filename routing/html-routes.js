const path = require('path')

module.exports = app => {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../view.html"));
    });

    app.get("/reserve", function (req, res) {
        res.sendFile(path.join(__dirname, "../reserve.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "../tables.html"));
    });

};