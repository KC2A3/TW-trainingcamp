var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};

function sumOfFruit(obj) {
  let sum = 0;
  for (key in obj) {
    sum = sum + obj[key];
  }
  return sum;
}
console.log(sumOfFruit(fruit));