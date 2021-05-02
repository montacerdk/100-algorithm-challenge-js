const recursiveFactorialize = (number) => {
  if (typeof number === "number") {
    number = Math.floor(number);
    if (number === 0) {
      return 1;
    }
    return number * recursiveFactorialize(number - 1);
  }
  return "Please, provide a valid number";
};

const factorialize = (number) => {
  if (typeof number === "number") {
    number = Math.floor(number);
    let factorial = 1;
    for (let index = number; index > 0; index--) {
      factorial *= index;
    }
    return factorial;
  }
  return "Please, provide a valid number";
};

const numbers = [3, 6, 9];

numbers.forEach((number) => {
  console.log(recursiveFactorialize(number));
});
