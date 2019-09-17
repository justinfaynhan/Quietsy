let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require('method-override');

// Serial port connection with arduino setup
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var port0 = new SerialPort("/dev/ttyACM0", {
    baudRate: 9600,
    parser: Readline
});
let latestSensorValue0 = 0;
const parser0 = port0.pipe(new Readline({ delimiter: '\r\n' }));
parser0.on('data', data => {
    let str = data.toString(); //Convert to string
    try {
        const jsonData  = JSON.parse(str);
        latestSensorValue0 = jsonData.value;
    } catch {}
});
// Serial port connection with arduino setup
// var port1 = new SerialPort("/dev/ttyACM1", {
//     baudRate: 9600,
//     parser: Readline
// });
let latestSensorValue1 = 0;
// const parser1 = port1.pipe(new Readline({ delimiter: '\r\n' }));
// parser1.on('data', data => {
//     let str = data.toString(); //Convert to string
//     try {
//         const jsonData  = JSON.parse(str);
//         latestSensorValue1 = jsonData.value;
//         console.log(jsonData);
//     } catch {}
// });

let indexRoutes = require("./routes/index"),
    levelsRoutes = require("./routes/levels");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.locals.moment = require("moment");  // For getting date and time

app.use(indexRoutes);
app.use(levelsRoutes);

app.get("/data0A", (req, res, next) => {
    // console.log("Sensor0A: " + latestSensorValue0);
    res.write(String(latestSensorValue0));
    res.end();
});
app.get("/data0B", (req, res, next) => {
    // console.log("Sensor0B: " + latestSensorValue1);
    res.write(String(latestSensorValue1));
    res.end();
});

// Catch all for non-existent page request
app.get("*", (req, res) => {
    res.send("Invalid request!");
});

let listener = app.listen(30001, "127.0.0.1", function() {
    console.log(`Honeywell has started! Listening on ${listener.address().address}:${listener.address().port}`);
});