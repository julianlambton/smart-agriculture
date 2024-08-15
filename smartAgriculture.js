"use strict";
class Sensor {
    constructor(id, type, location, value) {
        this.id = id;
        this.type = type;
        this.location = location;
        this.value = value;
    }
    readData() {
        console.log(`Sensor ID ${this.id}: ${this.type} at ${this.location} reads value: ${this.value}`);
        return this.value;
    }
}
class WeatherForecast {
    checkWeatherForecast() {
        console.log("Checking weather forecast...");
        return true; 
    }
}
class IrrigationSystem {
    start() {
        console.log("Irrigation system started.");
    }
}
class IrrigationController {
    constructor(sensor, weatherForecast, irrigationSystem) {
        this.sensor = sensor;
        this.weatherForecast = weatherForecast;
        this.irrigationSystem = irrigationSystem;
    }
    decideIrrigation(sensorData) {
        if (this.weatherForecast.checkWeatherForecast()) {
            console.log("Weather conditions are suitable for irrigation.");
            this.startIrrigation();
        }
        else {
            console.log("Irrigation not needed based on weather forecast.");
        }
    }
    startIrrigation() {
        this.irrigationSystem.start();
    }
}
class Drone {
    constructor(id, model, location) {
        this.id = id;
        this.model = model;
        this.location = location;
    }
    flyTo(newLocation) {
        this.location = newLocation;
        console.log(`Drone ${this.model} flying to ${this.location}`);
    }
}
class DiseaseDetector {
    constructor(id, model) {
        this.id = id;
        this.model = model;
    }
    detectDisease() {
        console.log(`Disease Detector ${this.model} is scanning for diseases...`);
    }
}
const sensor = new Sensor(2, "Moisture", "Field 5", 50); 
const weatherForecast = new WeatherForecast();
const irrigationSystem = new IrrigationSystem();
const controller = new IrrigationController(sensor, weatherForecast, irrigationSystem);
const sensorData = sensor.readData();
controller.decideIrrigation(sensorData);
const drone = new Drone(102, "Model X", "Field 5");
drone.flyTo("Field 5");
const diseaseDetector = new DiseaseDetector(201, "Detector Y");
diseaseDetector.detectDisease();
