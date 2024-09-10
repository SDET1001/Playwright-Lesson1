export class Tiger {
    private speed: number;

    constructor() {
        this.speed = Math.floor(Math.random() * 100) + 1; // Random speed between 1 and 100
    }

    getSpeed(): number {
        return Math.min(this.speed, 100); // Max speed for Tiger is 100 km/h
    }
}
