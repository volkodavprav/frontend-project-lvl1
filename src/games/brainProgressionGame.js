import gameEngine from '../index.js';
import { getRandomInt } from '../utils.js';

const PROGRESSION_MAX_START_NUMBER = 30;
const PROGRESSION_MAX_STEP = 10;
const PROGRESSION_MAX_LENGTH = 10;

const gameDescription = 'What number is missing in the progression?';

const generateProgression = () => {
  const startNumber = getRandomInt(PROGRESSION_MAX_START_NUMBER);
  const progression = [];

  let progressionStep = getRandomInt(PROGRESSION_MAX_STEP);

  // If getRandomInt function returns 0 add 1
  if (progressionStep === 0) {
    progressionStep += 1;
  }

  progression[0] = startNumber;

  for (let i = 1; i <= PROGRESSION_MAX_LENGTH; i += 1) {
    progression.push(progression[i - 1] + progressionStep);
  }

  return progression;
};

const hideNumberInProgression = () => {
  const progression = generateProgression();
  const hiddenNumIndex = getRandomInt(progression.length - 1);
  const hiddenNumber = progression[hiddenNumIndex];
  progression[hiddenNumIndex] = '..';

  return [progression.join(' '), hiddenNumber];
};

const progressionGameLogic = () => {
  const [progression, hiddenNumber] = hideNumberInProgression();
  const gameQuestion = (`Question: ${progression}`);

  return [gameQuestion, hiddenNumber];
};

const progressionGame = () => {
  gameEngine(gameDescription, progressionGameLogic);
};

export default progressionGame;
