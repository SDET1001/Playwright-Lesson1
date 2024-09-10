export class Animal {
    name: string;
    maxSpeed: number;
    speed: number;

    constructor(name: string, maxSpeed: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.speed = Math.floor(Math.random() * this.maxSpeed) + 1;
    }

    getSpeed(): number {
        return this.speed;
    }
}
