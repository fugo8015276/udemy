ok = !true;
ok = !!true;
console.log(ok); //空文　何もしない文
{
} //ブロック文

/*const hello = 'hello1';
{
  console.log(hello2); //デッドゾーン（使えない）になっている。
  const hello2 = 'hello2';
}*/

ok1 = false;
ok1 = ok1 ? 'ok' : 'no';
console.log(ok1);

function vegetablecolor(vegetable) {
  switch (vegetable) {
    case 'tomato':
      console.log('tomato is red!');
      break;
    case 'carrot':
    case 'pumpkin':
      console.log(`${vegetable} is orange!`);
      break;
    case 'onion':
      console.log('onion is white!');
      break;
    default:
      console.log('not found');
      break;
  }
  // if (vegetable === 'tomato') {
  //   console.log('tomato is red!');
  // } else if (vegetable === 'pumpkin') {
  //   console.log('pumpukin is orange');
  // } else if (vegetable === 'onion') {
  //   console.log('onion is white');
  // }
}
vegetablecolor('carrot');
let count = 0;
while (count < 10) {
  console.log('while;', count);
  count += 1;
}

let tomatoCount = 0;
do {
  console.log('do while;', tomatoCount);
  tomatoCount += 1;
} while (tomatoCount < 10);
//do whileは最初に関してはどのような条件でも実行される
//それに対して、whileは最初でも、条件が適用される。
