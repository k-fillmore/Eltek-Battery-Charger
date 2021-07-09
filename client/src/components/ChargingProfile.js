import { React, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./ChargingProfile.css";


function ChargingProfile() {
  const [profileName, setProfileName] = useState("name");
  const [profileId, setProfileId] = useState(0);
  const [stateOfChargeMap, setStateOfChargeMap] = useState([
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  const [voltageMap, setVoltageMap] = useState([
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  const [currentMap, setCurrentMap] = useState([
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  let [numSetpoints, setNumSetpoints] = useState(5);

  function handleVoltageChange(e, idx) {
    let modarr = [...voltageMap];
    let newVal = parseInt(e.target.value);
    modarr[idx] = newVal;
    console.log(modarr);
    setVoltageMap(modarr);
  }
  function handleCurrentChange(e, idx) {
    let modarr = [...currentMap];
    let newVal = parseInt(e.target.value);
    modarr[idx] = newVal;
    console.log(modarr);
    setCurrentMap(modarr);
  }

  function handleCounter(direction){
      if (numSetpoints > 0 & direction === "down"){
          setNumSetpoints(numSetpoints-1);
      } else if(numSetpoints >= 0 & direction === "up") {
          setNumSetpoints(numSetpoints+1);
      }
  }

  return (
    <div>
      <p>Charging Profile</p>
      
      <div className="counter">

          <h5>Number of Setpoints</h5>
        <Button className="mb-3" variant="dark" onClick={() => {handleCounter("down")}}>
          -
        </Button>
        {numSetpoints}
        <Button className="mb-3" variant="dark" onClick={() => {handleCounter("up")}}>
          +
        </Button>
      </div>
      {stateOfChargeMap.map((soc, index) => {
        return (
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                Voltage Setpoint {" " + (index + 1)}
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="0.0"
              aria-label="0.0"
              aria-describedby="basic-addon1"
              value={voltageMap[index]}
              onChange={(e) => {
                handleVoltageChange(e, index);
                console.log(e.target.value);
              }}
            />
            <InputGroup.Append>
              <InputGroup.Text>
                Current Setpoint {" " + (index + 1)}
              </InputGroup.Text>
            </InputGroup.Append>
            <FormControl
              placeholder="0.0"
              aria-label="0.0"
              aria-describedby="basic-addon1"
              value={currentMap[index]}
              onChange={(e) => {
                handleCurrentChange(e, index);
                console.log(e.target.value);
              }}
            />
          </InputGroup>
        );
      })}
    </div>
  );
}

export default ChargingProfile;
