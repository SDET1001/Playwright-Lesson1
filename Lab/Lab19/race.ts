import { Tiger } from './Tiger';
import { Dog } from './Dog';
import { Horse } from './Horse';

// Create instances of each animal
const tiger = new Tiger();
const dog = new Dog();
const horse = new Horse();

// Compare speeds to find the winner
const tigerSpeed = tiger.getSpeed();
const dogSpeed = dog.getSpeed();
const horseSpeed = horse.getSpeed();

const winner = Math.max(tigerSpeed, dogSpeed, horseSpeed);

let winnerName = '';
if (winner === tigerSpeed) {
    winnerName = 'Tiger';
} else if (winner === dogSpeed) {
    winnerName = 'Dog';
} else {
    winnerName = 'Horse';
}

console.log(`Winner is ${winnerName}, with speed: ${winner} km/h`);
