import { React, useEffect, useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

function Config() {
  const [chargerState, setChargerState] = useState(false);
  const [voltageSet, setVoltageSet] = useState(0);
  const [currentSet, setCurrentSet] = useState(0);
  const [scheduledCharging, setScheduledCharging] = useState(false);
  const [scheduledCharingStart, setScheduledChargingStart] = useState("");
  const [scheduledCharingEnd, setScheduledChargingEnd] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/Config`).then((res) =>
      res
        .json()
        .then((res) => {
          setChargerState(res.chargerState);
          setVoltageSet(res.voltageSet);
          setCurrentSet(res.currentSet);
          setScheduledCharging(res.scheduledCharging);
          setScheduledChargingStart(res.scheduledChargingStart);
          setScheduledChargingEnd(res.scheduledChargingEnd);
        })
        .catch((error) => console.log(error))
    );
  }, []);

  function chargerButton(){
      if(chargerState == true){
       return (<Button onClick={() => setChargerState(prevChargerState => !chargerState)} value={chargerState} variant="success">True</Button>)
      } else{
       return <Button onClick={() => setChargerState(prevChargerState => !chargerState)}  value={chargerState} variant="danger">False</Button>
      }
    }
  function scheduledChargingButton() {
    if(scheduledCharging == true){
        return <Button onClick={() => setScheduledCharging(prevScheduledCharging => !scheduledCharging)} value={scheduledCharging} variant="success">True</Button>
      } else{
        return <Button onClick={() => setScheduledCharging(prevScheduledCharging => !scheduledCharging)} value={scheduledCharging} variant="danger">False</Button>
      }

  }

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Charger Active:</InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Append>
          {chargerButton()}
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text type="float" id="basic-addon1">Voltage Setpoint:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={voltageSet}
          onChange={(e) => {if (parseFloat(e.target.value) | e.target.value == ""){setVoltageSet(e.target.value)}}}
          placeholder="Voltage Setpoint"
          aria-label="Voltage Setpoint"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text type="number" id="basic-addon1">Current Setpoint:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={currentSet}
          onChange={(e) => {if (parseFloat(e.target.value) | e.target.value == ""){setCurrentSet(e.target.value)}}}
          placeholder="Current Setpoint:"
          aria-label="Current Setpoint:"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Scheduled Charging Enabled:</InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Append>
          {scheduledChargingButton()}
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text type="time" id="basic-addon1">
            Scheduled Charging Start:
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={scheduledCharingStart}
          onChange={(e) => setScheduledChargingStart(e.target.value)}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">
            Scheduled Charging End:
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={scheduledCharingEnd}
          onChange={(e) => setScheduledChargingEnd(e.target.value)}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <Button variant="dark">Save</Button>
    </div>
  );
}

export default Config;
