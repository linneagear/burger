DROP DATABASE IF EXISTS burgers_db;

-- create burgers database
CREATE DATABASE burgers_db;

USE burgers_db;

-- create burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (300) NOT NULL,
    -- creates a boolean column called "devoured" and returns false by default if nothing is entered 
    devoured  BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);