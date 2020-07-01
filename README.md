# Node Express Handlebars

## Description

This application is a burger logger that uses MySQL, Node, Express, Handlebars and a homemade ORM. It follows an MVC design pattern and uses Node and MySQL to query and route data, and Handlebars to generate the HTML.

![app](/public/assets/img/Capture.PNG)


## Usage

* This a restaurant app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* This app will store every burger in a database, whether devoured or not.


## Dependencies used

* [MySQL](https://www.npmjs.com/package/mysql) NPM package to connect to your MySQL database and perform queries.

* [Express](https://www.npmjs.com/package/express) NPM package that allows to set up middlewares to respond to HTTP requests and defines a routing table which is used to perform different actions based on HTTP Method and URL.

* [Handlebars](https://www.npmjs.com/package/handlebars) NPM package used to create the HTML


#### Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```

### Links

* [Heroku](https://agile-shelf-65251.herokuapp.com/)
* [Github](https://github.com/linneagear/burger)
* [Portfolio](https://linneagear.github.io/portfolio/frontPage.html)

### Futre Development
In spending more time building this app, I would insert delete buttons, so you can delete once devoured if you choose. I'd also work more on the design aspect if I had more time, to make it look more like a professional application.