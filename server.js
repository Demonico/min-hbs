var bodyParser = require('body-parser');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load Routes
var index = require('./controllers/min-control');

// Routes
app.use('/', index);

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));


// Set Handlebars.
app.engine(".hbs", exphbs({ defaultLayout: "main", extname: '.hbs' }));
app.set("view engine", ".hbs");


// Define Port
const port = process.env.PORT || 5000

// Start Server
const server = app.listen(port, () => console.log(`Server running on port ${port}`))
