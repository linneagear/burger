const express = require("express");

// create the router
const router = express.Router();
// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        // grab the burger data
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);

        // render your burger object (data) to the index file
        res.render("index", burgerObj);
    });
});

// post data to API
router.post("/api/burgers", function (req, res) {
    // create the new object
    burger.insertOne(["name", "devoured"], [req.body.name, req.query.devoured], function (result) {
        res.json({ id: result.insertId })
    });
});

router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.query.devoured
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();
        });
});


// Export routes for server.js to use.
module.exports = router;