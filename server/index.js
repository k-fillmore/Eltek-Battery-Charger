const express = require("express");
const cors = require("cors")
const app = express();
const fs = require('fs');
app.use(cors())
app.use(express.json())





app.get("/config", function (req, res) {
  let configfile = fs.readFileSync("./config.json")
  let config = JSON.parse(configfile)
  //console.log(config)
  res.json(config);
});

app.post("/config", function(req, res){
    let config = req.body
    console.log(config)
    fs.writeFileSync("./config.json", JSON.stringify(config)), (err,result) => {
        if (err){
            console.log(err)
        }else{
            res.send("Success")
        }
    }
})
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
