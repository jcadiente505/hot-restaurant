var tableList = require('../data/table-data.js');
var waitList = require('../data/waitinglist-data.js');

module.exports = app => {

    app.get("/api/tables", function(req, res) {
        res.json(tableList);
    });

    
    app.get("/api/waitlist", function(req, res) {
        res.json(waitList);
    });

    app.post("/api/tables", function(req, res) {
        if (tableList.length < 5) {
            tableList.push(req.body);
            res.json(true);
        } else {
            waitList.push(req.body);
            res.json(false);
        };
        
    });
};
