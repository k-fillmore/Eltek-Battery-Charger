from fastapi import FastAPI, Request
import json
from pydantic import BaseModel
from typing import Optional

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost:3000/*",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


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
    print(config)
    return config


@app.post("/config")
async def save_config(request: Request):
    config = await request.json()
    with open('./config.json', 'w', encoding='utf-8') as f:
        json.dump(config, f, ensure_ascii=False, indent=4)


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
def start_charging(charge: ChargingSession):
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
