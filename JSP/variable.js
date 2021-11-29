var a = 100;
a = "안녕?";

var b;

console.log(typeof a);
console.log(b);

var array = [1, 2, 3, 4];

console.log(array);
console.log(array[2]);
console.log(array[7]);
console.log(array.length);

//배열에 데이터 추가
array.push("me");

var array2 = [];
array2.push(1);
array2.push(3);
console.log(array2);

//기존 값이 사라지고 새로운 값으로 대체
array2[0] = "you";
