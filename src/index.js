import { question } from 'readline-sync';
import askName from './cli.js';

const MAX_ROUNDS = 3;

const gameEngine = (gameDescription, gameLogic) => {
  console.log('Welcome to Brain Games!');
  const userName = askName();
  console.log(gameDescription);

  for (let i = 0; i < MAX_ROUNDS; i += 1) {
    const [gameQuestion, correctAnswer] = gameLogic();
    console.log(gameQuestion);
    const answer = question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
