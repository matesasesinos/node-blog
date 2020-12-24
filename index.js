
const express = require('express');
const app = express();

const Handlebars = require('handlebars'); 
const exphbs = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access'); 
require('dotenv').config({ path: '.env' });


const path = require("path"); 
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

//Public and Handlebars configuration
//template engine
app.engine(
  ".hbs", //use handlebars with this extension
  exphbs({
    extname: ".hbs",
    helpers: require('./helpers/hbs'),
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);
app.set("view engine", ".hbs");

// statics files
app.use(express.static(path.join(__dirname, "public")));


//require all routes
const router = require('./routes');


//call all routes
app.use('/', router());


//port configured in .evn file
const port = process.env.PORT;

app.listen(port, () => {
  console.log("Start app in port: " + port);
});