const a = 'a',
  b = 'b',
  c = 'c';
//console.log(a, b, c);
for (
  let pumpkinCount = 0, i = 0;
  pumpkinCount < 10;
  pumpkinCount += 1, i += 1
) {
  //console.log(pumpkinCount, i);
  //i=iterate(反復する)の略
}

const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
for (let i = 0; i < fruits.length; i += 1) {
  //console.log(fruits[i]);
}

const coffee = {
  name: 'Caffe Latte',
  size: 350,
  isHot: true,
};
for (const fruit of fruits) {
  //右側はiterableオブジェクトのみをとれる。（通常のオブジェクトは入れられない。）
  //fruit = 'hello';
  //console.log(fruit);
}
for (const key in coffee) {
  if (key === 'size') {
    console.log('continue');
    continue;
  }
  console.log(key);
  console.log(coffee[key]);
}
let count = 100;
while (count < 10) {
  console.log('while:', count);
  continue;
  count += 1; //この部分実行されない。
}
