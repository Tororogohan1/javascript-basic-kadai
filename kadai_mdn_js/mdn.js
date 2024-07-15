const today = new Date();

//年
const year = today.getFullYear();

//月
const month = today.getMonth()+1;

//日
const day = today.getDate();

const formattedDate = year + '年' + month + '月' + day + '日';

console.log(formattedDate);


