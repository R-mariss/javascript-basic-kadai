// 1以上の正の数が変数numに代入する
let num = Math.floor(Math.random() * 15) +1 ;

// 変数numが3と5の倍数の場合、「3と5の倍数です」と出力
if (num % 3 === 0 && num % 5 === 0){
    console.log('3と5の倍数です');
}

// 変数numが3の倍数の場合、「3の倍数です」と出力
else if (num % 3 === 0) {
    console.log('3の倍数です');
}

// 変数numが5の倍数の場合、「5の倍数です」と出力
else if (num % 5 === 0){
    console.log('5の倍数です');
}

// それ以外の場合は、numの値を出力
else {
    console.log(num);
}

