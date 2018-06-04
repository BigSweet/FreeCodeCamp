//翻转字符串
function reverseString(str) {
  // 请把你的代码写在这里
  var arr=[];
  arr=str.split("");
  arr.reverse();
  str=arr.join("");
   console.log(str)
  return str;
 
}

reverseString("hello");
