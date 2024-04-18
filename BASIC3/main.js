const userInput = '10.9';
let calcResult;
calcResult = Number(userInput) + 10;
console.log(calcResult);
calcResult = parseInt(userInput) + 10;
console.log(calcResult);
calcResult = +userInput + 10;
const tenNumber = 10;
calcResult = '10' + String(tenNumber);
calcResult = '10' + tenNumber.toString();
console.log(calcResult);

let boolean = true;
boolean = false;

let array = ['apple', 'banana', 'grape'];
array = [1, 2, 3];
array = [1, 'apple', true, array];
array = ['apple', 'banana', 'grape'];
console.log(array[2]);
array = [];
array.push('apple');
console.log(array);

const coffee = {
  name: 'Chocolate Mocha',
  size: 350,
  isHot: true,
  toppings: ['Cinnamon', 'Caramel'],
  nutritions: {
    calories: 430,
    sugars: 53,
  },
};

coffee.isHot = false;
coffee.barista = 'Yoshipi';
console.log(coffee);

let userInfo = null;
userInfo = undefined;
