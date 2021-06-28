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

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Charger Active:</InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Append>
          <Button value={chargerState} variant="outline-secondary">False</Button>
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text type="number" id="basic-addon1">Voltage Setpoint:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={voltageSet.toFixed(2)}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text type="number" id="basic-addon1">Current Setpoint:</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          value={currentSet.toFixed(2)}
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Scheduled Charging Enabled:</InputGroup.Text>
        </InputGroup.Prepend>
        <InputGroup.Append>
          <Button value={scheduledCharging} variant="outline-secondary">False</Button>
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
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </div>
  );
}

export default Config;
