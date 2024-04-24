let ok = true;
let maybe = true;
if (ok) {
  //console.log('OK!');
} else if (maybe) {
  console.log('maybe ok');
} else {
  console.log('NO');
}

ok = 1 === 2;
//console.log(ok);
ok = 1 !== 2;
ok = '1' === 1;
//console.log(ok);

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };
const coffee3 = coffee1; //この場合はtrueになる。

ok = coffee1 === coffee2; //falseになる。==でもfalse
ok = coffee1.name === coffee2.name;
const fruits1 = ['apple', 'banana'];
const fruits2 = ['apple', 'banana'];
ok = fruits1 === fruits2; //配列でも同様にfalseになる。==でも
console.log(ok);

ok = 1 >= 0;
ok = 'a' < 'b'; //辞書順で正しいので、trueになる。
ok = 'A' < 'a';
console.log(ok);
ok = 'false'; //if文でtrueとして認識される。
if (ok) {
  //console.log(ok);
  console.log('OK!');
} else {
  console.log('NO');
}
