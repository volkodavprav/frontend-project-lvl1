const MAX_RANDOM_NUMBER = 100;

const getRandomInt = (max = MAX_RANDOM_NUMBER) => Math.floor(Math.random() * max);

export default getRandomInt;
