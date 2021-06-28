import {React, useEffect, useState} from 'react'

function Config() {
    const [chargerState, setChargerState] = useState(false)
    const [voltageSet, setVoltageSet] = useState(0)
    const [currentSet, setCurrentSet] = useState(0)
    const [scheduledCharging, setScheduledCharging] = useState(false)
    const [scheduledCharingStart, setScheduledChargingStart] = useState(0)
    const [scheduledCharingEnd, setScheduledChargingEnd] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:3000/Config`)
          .then(res => (res.json())
          .then(res => {
            console.log(res)
            setChargerState(res.chargerState)
            setVoltageSet(res.voltageSet)
            setCurrentSet(res.currentSet)
            setScheduledCharging(res.scheduledCharging)
            setScheduledChargingStart(res.scheduledCharingEnd)
          })
          .catch(error => console.log(error)))
      }, []);
    
    return (
        <div>
            {chargerState}
            {voltageSet}
            {currentSet}
            {scheduledCharging}
            {scheduledCharingStart}
            {scheduledCharingEnd}
            
        </div>
    )
}

export default Config
