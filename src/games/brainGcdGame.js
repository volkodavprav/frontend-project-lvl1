import gameEngine from '../index.js';
import getRandomInt from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const gcdGameLogic = () => {
  const randomNumber1 = getRandomInt();
  const randomNumber2 = getRandomInt();
  const gameQuestion = (`Question: ${randomNumber1} ${randomNumber2}`);
  const correctAnswer = getGcd(randomNumber1, randomNumber2).toString();

  return [gameQuestion, correctAnswer];
};

const gcdGame = () => {
  gameEngine(gameDescription, gcdGameLogic);
};

export default gcdGame;
