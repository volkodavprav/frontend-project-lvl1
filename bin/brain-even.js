#!/usr/bin/env node

import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

const MAX_RANDOM_NUMBER = 100;
const MAX_CORRECT_ANSWERS = 3;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function isEven(num) {
  return num % 2 === 0;
}

function brainEvenGame() {
  let correctAnswersCount = 0;

  console.log('Welcome to the Brain Games!');
  const userName = askName();
  console.log('Answer "yes" if the number is even, otherwise answer "no"!');

  while (correctAnswersCount !== MAX_CORRECT_ANSWERS) {
    const randomNumber = getRandomInt(MAX_RANDOM_NUMBER);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && (answer === 'yes')) || (!isEven(randomNumber) && (answer === 'no'))) {
      correctAnswersCount += 1;
      console.log('Correct!');
    } else if (isEven(randomNumber)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
      break;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      break;
    }
  }

  if (correctAnswersCount === MAX_CORRECT_ANSWERS) {
    console.log(`Congratulations, ${userName}!`);
  }
}

brainEvenGame();
