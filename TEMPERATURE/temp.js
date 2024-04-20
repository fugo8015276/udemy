// 温度を入力する関数
function getTemperature() {
  let temp = prompt('温度を入力してください(例: 25.5):');
  temp = parseFloat(temp); // 文字列を浮動小数点数に変換
  return temp;
}

// 単位を選択する関数
function getUnit() {
  let unit = prompt('単位を入力してください(C または F):');
  unit = unit.toUpperCase(); // 大文字に変換
  return unit;
}

// 温度変換の計算を行う関数
function convertTemperature(temp, unit) {
  if (unit === 'C') {
    // 摂氏からファーレンハイトへの変換
    let fahrenheit = (temp * 9) / 5 + 32;
    return `${temp}°C = ${fahrenheit.toFixed(1)}°F`;
  } else if (unit === 'F') {
    // ファーレンハイトから摂氏への変換
    let celsius = ((temp - 32) * 5) / 9;
    return `${temp}°F = ${celsius.toFixed(1)}°C`;
  } else {
    return '無効な単位が入力されました。';
  }
}

// メイン処理
let temperature = getTemperature();
let unit = getUnit();
let result = convertTemperature(temperature, unit);
alert(result);
