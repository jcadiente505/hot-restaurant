var tableList = require('../data/table-data.js');
var waitList = require('../data/waitinglist-data.js');

module.exports = app => {

    // Create New object with a table - takes in JSON input
    app.post("/api/tables", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newtable = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newtable);
    
        tableList.push(newtable);
    
        res.json(newtable);
    });

    // Create New object on the wait list - takes in JSON input
    app.post("/api/waitlist", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body-parser middleware
        var newwaitlist = req.body;
    
        // Using a RegEx Pattern to remove spaces from newCharacter
        // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
        newwaitlist.routeName = newwaitlist.name.replace(/\s+/g, "").toLowerCase();
    
        console.log(newwaitlist);
    
        waitList.push(newwaitlist);
    
        res.json(newwaitlist);
    });
};
