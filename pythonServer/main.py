from fastapi import FastAPI
import json
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class Config(BaseModel):
    chargerState: bool
    voltageSet: float
    currentSet: float
    scheduledCharging: bool
    scheduledChargingStart: str
    scheduledChargingEnd: str

class Stats(BaseModel):
    timestamp: list
    inputVolage: list
    outputVoltage: list
    current: list
    inputTemperature: list
    outputTemperature: list
    wattHoursAdded: list

class ChargingSession(BaseModel):
    id: int
    active: bool 
    start: str
    end: str
    data_dir: str
    stats: Stats


@app.get("/")
def read_root():
    return {"Hello": "Worl"}


@app.get("/config")
def read_config():
    file = open("./config.json")
    config = json.load(file)
    return config


@app.post("/config")
def save_config(config: Config):
    print(config)


@app.get("/charging_profile")
def charging_profile():
    charge_map = {
        "pctMap":         [10.0, 20.0, 30.0, 40.0, 50.0],
        "voltageProfile": [50.0, 50.5, 51.0, 51.5, 52.0],
        "currentProfile": [10.0, 11.0, 12.0, 13.0, 14.0]
    }
    return charge_map


@app.get("/stats")
def get_stats():
    stats = {
        "sampleTimestamp": [],
        "inputVoltage": [],
        "outputVoltage": [],
        "current": [],
        "inputTemperature": [],
        "outputTemperature": [],
        "wattHoursAdded": []
    }
    return stats

@app.get("/chargingStart")
def start_charging(charge : ChargingSession):
    data = charge.data_dir + str(charge.id) + ".json"
    if not charge.active:
        print("do something")
    else:
        return(charge)

@app.post("/chargingEnd")
def stop_charging(charge: ChargingSession):
    data = charge.data_dir + str(charge.id) + ".json"
    if charge.active:
        print("do something")
    else:
        return(charge)











