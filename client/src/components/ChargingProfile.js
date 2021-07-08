import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

function ChargingProfile() {
  const stateOfChargeMap = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  return (
    <div>
        <p>Voltage Profile</p>
      {stateOfChargeMap.map((soc) => {
        return (
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">{soc+"%"}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="0.0"
              aria-label="0.0"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        );
      })}
      <p>Current Profile</p>
      {stateOfChargeMap.map((soc) => {
        return (
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">{soc+"%"}</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="0.0"
              aria-label="0.0"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        );
      })}
    </div>
  );
}

export default ChargingProfile;
