class Sensor {
    constructor(
        public id: number,
        public type: string,
        public location: string,
        public value: number
    ) {}

    readData(): number {
        console.log(`Sensor ID ${this.id}: ${this.type} at ${this.location} reads value: ${this.value}`);
        return this.value;
    }
}

class WeatherForecast {
    checkWeatherForecast(): boolean {
        console.log("Checking weather forecast...");
        return true; 
    }
}

class IrrigationSystem {
    start(): void {
        console.log("Irrigation system started.");
    }
}

class IrrigationController {
    constructor(
        private sensor: Sensor,
        private weatherForecast: WeatherForecast,
        private irrigationSystem: IrrigationSystem
    ) {}

    decideIrrigation(sensorData: number): void {
        if (this.weatherForecast.checkWeatherForecast()) {
            console.log("Weather conditions are suitable for irrigation.");
            this.startIrrigation();
        } else {
            console.log("Irrigation not needed based on weather forecast.");
        }
    }

    private startIrrigation(): void {
        this.irrigationSystem.start();
    }
}

class Drone {
    constructor(
        public id: number,
        public model: string,
        public location: string
    ) {}

    flyTo(newLocation: string): void {
        this.location = newLocation;
        console.log(`Drone ${this.model} flying to ${this.location}`);
    }
}

class DiseaseDetector {
    constructor(
        public id: number,
        public model: string
    ) {}

    detectDisease(): void {
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

