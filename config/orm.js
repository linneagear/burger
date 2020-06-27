const connection = require("/connection.js");

// predefined functions from MC activity
function printQuestionMarks(num) {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    const arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
      const value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  };

// create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.

// Object for all our SQL statement functions:
const orm = {
    // first method, to select all data from the table
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },

    // creating a value
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
    
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    // INSERT INTO (a, b, c) VALUES (?, ?, ?);
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

    // update a value
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
};

// export the object for the model (burger.js)
module.exports = orm;