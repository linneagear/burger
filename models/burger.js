// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

// call the ORM functions using burger specific input for the ORM
const burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res)
        });
    }
};

// Export the database functions for the controller.
module.exports = burger;
