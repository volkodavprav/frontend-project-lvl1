import gameEngine from '../index.js';
import { generateRandomIntOrPrime, isPrime } from '../utils.js';

const MAX_NUMBER = 3000;

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGameLogic = () => {
  const randomNumber = generateRandomIntOrPrime(MAX_NUMBER);

  const gameQuestion = (`Question: ${randomNumber}`);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, correctAnswer];
};

const brainPrimeGame = () => {
  gameEngine(gameDescription, primeGameLogic);
};

export default brainPrimeGame;
