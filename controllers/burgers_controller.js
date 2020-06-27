const express = require("express");

// create the router
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data)) {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        
        // render your burger object (data) to the index file
        res.render("index", burgerObj);
    }
});

router.post("/api/burgers", function(req, res) {


});

router.put("/api/burgers/:id", function(req, res) {


});


router.delete("/api/burger/:id", function(req, res) {


});


// Export routes for server.js to use.
module.exports = router;