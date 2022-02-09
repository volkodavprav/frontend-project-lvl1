const MAX_RANDOM_NUMBER = 100;

const isPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const primeGenerator = (num) => {
  if (isPrime(num)) return num;

  let result = num;

  do {
    result -= 1;
  } while (!isPrime(result));

  return result;
};

const getRandomInt = (max = MAX_RANDOM_NUMBER) => Math.floor(Math.random() * max);

const generateRandomIntOrPrime = (max) => {
  const generatePrime = Math.round(Math.random());
  return generatePrime === 1 ? primeGenerator(getRandomInt(max)) : getRandomInt(max);
};

export { getRandomInt, generateRandomIntOrPrime, isPrime };
