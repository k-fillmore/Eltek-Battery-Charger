const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors())
// Defining get request at '/' route
app.get("/config", function (req, res) {
  res.json({
    voltageSet: 53.23,
    currentSet: 1.0,
    chargerState: false,
    scheduledCharging: false,
    scheduledChargingStart: "time",
    scheduledChargingEndTime: "time",
  });
});
app.get("/chargingProfile", function (req, res) {
  res.json({
    pctMap:         [10.0, 20.0, 30.0, 40.0, 50.0],
    voltageProfile: [50.0, 50.5, 51.0, 51.5, 52.0],
    currentProfile: [10.0, 11.0, 12.0, 13.0, 14.0]
  });
});

app.get("/stats", function (req, res) {
  res.json({
    sampleTimestamp:[],
    inputVoltage:[],
    outputVoltage:[],
    current:[],
    inputTemperature:[],
    outputTemperature:[],
    wattHoursAdded:[]

  });
});
app.listen(3000, function (req, res) {
  console.log("Server is running at port 3000");
});
