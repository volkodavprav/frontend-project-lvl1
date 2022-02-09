import gameEngine from '../index.js';

const MAX_RANDOM_NUMBER = 100;

const getRandomInt = (max) => Math.floor(Math.random() * max);

const isEven = (num) => num % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"!';

const evenGameLogic = () => {
  const randomNumber = getRandomInt(MAX_RANDOM_NUMBER);
  const gameQuestion = (`Question: ${randomNumber}`);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [gameQuestion, correctAnswer];
};

const brainEvenGame = () => {
  gameEngine(gameDescription, evenGameLogic);
};

export default brainEvenGame;
