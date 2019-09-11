// Require the serialport node module
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var mongoose = require("mongoose");

// Open the port
var port = new SerialPort("/dev/ttyACM0", {
    baudRate: 9600,
    parser: Readline
});

// For mongo db
var Sensor = require('./models/sensor.js');

// Connecting to db
mongoose.connect(String(process.env.HONEYWELL_MONGODB_URL), {
    useNewUrlParser: true,
    useCreateIndex: true
}).then(() => {
    console.log("Successfully connected to database!");
}).catch(err => {
    console.log("Error connecting to database.", err.message);
});

// Read the port data
const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', function(data) {
    var dataObject = JSON.parse(data);
    var newSensor = {
        sensorID: data.sensorID,
        soundData: data.soundData
    }
    Sensor.create(newSensor, function(err, newlyCreated) {
        if (err || !newlyCreated) {
            console.log("Error or null in creating new sensor entry");
        } else {
            console.log("Successfully created sensor entry");
        }
    });
});
