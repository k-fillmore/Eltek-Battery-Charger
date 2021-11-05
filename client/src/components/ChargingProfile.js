import { React, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import "./ChargingProfile.css";

function ChargingProfile() {
  const [profileId, setProfileId] = useState(0);
  
  let [voltageMap, setVoltageMap] = useState([
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  let [currentMap, setCurrentMap] = useState([
    0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
  ]);
  let [stateOfChargeMap, setStateOfChargeMap] = useState(Array.from(voltageMap.keys()));
  let [numSetpoints, setNumSetpoints] = useState(
    Math.max(voltageMap.length, currentMap.length)
  );

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

  function handleCounter(direction) {
    if ((numSetpoints > 1) & (direction === "down")) {
      setNumSetpoints(numSetpoints - 1);
      currentMap.pop();
      voltageMap.pop();
      stateOfChargeMap.pop();
    } else if ((numSetpoints > 0) & (direction === "up")) {
      setNumSetpoints(numSetpoints + 1);
      currentMap.push(0);
      voltageMap.push(0);
      stateOfChargeMap.push(0);
    }
  }

  return (
    <div>
      <p>Charging Profile</p>

      {stateOfChargeMap.map((soc, index) => {
        return (
          <InputGroup className="mb-3 InputGroup">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">
                Voltage {" " + (index + 1)}
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
              <InputGroup.Text>Current {" " + (index + 1)}</InputGroup.Text>
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
      <div className="counter">
        <h5>Number of Setpoints</h5>
        <Button
          className="mb-3"
          variant="dark"
          onClick={() => {
            handleCounter("down");
          }}
        >
          -
        </Button>
        {numSetpoints}
        <Button
          className="mb-3"
          variant="dark"
          onClick={() => {
            handleCounter("up");
          }}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default ChargingProfile;
