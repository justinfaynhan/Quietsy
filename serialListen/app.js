// Require the serialport node module
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var mongoose = require("mongoose");
var request = require('request');


// Serial port connection with arduino setup
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var port0 = new SerialPort("/dev/ttyACM0", {    // Adjust ttyACM0 as appropriate (use terminal "dmesg" to check connection)
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