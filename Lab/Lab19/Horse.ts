export class Horse {
    private speed: number;

    constructor() {
        this.speed = Math.floor(Math.random() * 75) + 1; // Random speed between 1 and 75
    }

    getSpeed(): number {
        return Math.min(this.speed, 75); // Max speed for Horse is 75 km/h
    }
}
