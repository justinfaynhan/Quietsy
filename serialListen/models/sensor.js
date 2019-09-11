var mongoose = require("mongoose");

var SensorSchema = new mongoose.Schema({
    sensorID: String,
    location: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
    soundData: Number
});
module.exports = mongoose.model("Sensor", SensorSchema);
