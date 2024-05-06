// const a = 'a',
//   b = 'b',
//   c = 'c';
// //console.log(a, b, c);
// for (
//   let pumpkinCount = 0, i = 0;
//   pumpkinCount < 10;
//   pumpkinCount += 1, i += 1
// ) {
//   //console.log(pumpkinCount, i);
//   //i=iterate(反復する)の略
// }

// const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
// for (let i = 0; i < fruits.length; i += 1) {
//   //console.log(fruits[i]);
// }

// const coffee = {
//   name: 'Caffe Latte',
//   size: 350,
//   isHot: true,
// };
// for (const fruit of fruits) {
//   //右側はiterableオブジェクトのみをとれる。（通常のオブジェクトは入れられない。）
//   //fruit = 'hello';
//   //console.log(fruit);
// }
// for (const key in coffee) {
//   if (key === 'size') {
//     //    console.log('continue');
//     //    continue;
//   }
//   console.log(key);
//   console.log(coffee[key]);
// }
// let count = 100;
// while (count < 10) {
//   //  console.log('while:', count);
//   continue;
//   count += 1; //この部分実行されない。
// }

// if (true) {
//   for (const key in coffee) {
//     coffeeCondition: if (key === 'size') {
//       console.log('break!');
//       break coffeeCondition;
//     }
//     console.log(key);
//     console.log(coffee[key]);
//   }
//   console.log('inside an if statement');
// }
//coffeeFuncLabel;

//coffeeFunc();

try {
  console.log('1');
  console.log(chocolate);
} catch {
  console.log('2');
}
console.log('3');

function logChocolate() {
  try {
    console.log('try');
    return 'hello';
    //console.log(chocolate);
  } catch {
    console.log('catch');
  } finally {
    console.log('finally');
    return 'hi';
  }
}
//finallyはどんな結果であれ、出力自体はされる。
//また、finallyでエラー内容を上書きしたりすることができる。（用法によってエラーを特定できなくなるため要注意）
console.log(logChocolate());

function logChocolate2() {
  try {
    console.log('try');
    console.log(chocolate);
    //throw { message: 'throw an error' };
  } catch (error) {
    console.log('catch', error);
  } finally {
    console.log('finally');
    return 'hello';
  }
}

logChocolate2();
