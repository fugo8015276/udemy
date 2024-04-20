var userName = prompt('こんにちは！あなたの名前は何ですか？');

// 入力された名前を使って挨拶をする
if (userName !== null && userName !== '') {
  alert('こんにちは、' + userName + 'さん！ようこそ！');
} else {
  alert('名前を入力してください！');
}
