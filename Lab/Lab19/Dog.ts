export class Dog {
    private speed: number;

    constructor() {
        this.speed = Math.floor(Math.random() * 60) + 1; // Random speed between 1 and 60
    }

    getSpeed(): number {
        return Math.min(this.speed, 60); // Max speed for Dog is 60 km/h
    }
}
