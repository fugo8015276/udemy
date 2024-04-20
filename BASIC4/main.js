const value = 'hello';
function add(num1, num2) {
  const value = num1 + num2;
  console.log(value);
  return value;
  //return num1 * num2;
  //returnがある場合は、return以降のものは実行されない。console.log('hello');
}
const returnedValue = add(2, 3);
console.log(returnedValue);
