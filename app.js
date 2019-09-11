let express = require("express"),
    app = express(),                        // for severside rendering
    bodyParser = require("body-parser"),    // for parsing data to and from html pages
    methodOverride = require('method-override'),    // for enabling different http requests for CRUD
    mongoose = require("mongoose");
    // todo: add db sensor model
// let Sensor = require("./models/sensor");

    // todo: work on routes
let indexRoutes = require("./routes/index"),
    levelsRoutes = require("./routes/levels");

    // todo: connect mongodb to cloud
    // right now, env is set to mongodb://localhost/honeywell
mongoose.connect("mongodb://localhost/honeywell", {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to database!");
}).catch(err => {
    console.log("Error connecting to database.", err.message);
});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.locals.moment = require("moment");  // For getting date and time

app.use(indexRoutes);
app.use(levelsRoutes);

// Catch all for non-existent page request
app.get("*", (req, res) => {
    res.send("Invalid request!");
});

let listener = app.listen(process.env.PORT, process.env.IP, function() {
    console.log(`Honeywell has started! Listening on ${listener.address().address}:${listener.address().port}`);
});