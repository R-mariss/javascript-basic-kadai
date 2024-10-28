// 今日の日付を取得する
const today = new Date();

// 年・月・日を取得する
const year = today.getFullYear();
const month = String(today.getMonth()+1).padStart(2,'0');
const day = today.getDate();

// 「yyyy"年m"月"d"日"」形式で日付を表示する
const formattedDate = `${year}年${month}月${day}日`;

console.log(formattedDate);
