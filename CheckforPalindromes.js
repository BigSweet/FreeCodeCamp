/**
检查回文字符串

如果给定的字符串是回文，返回true，反之，返回false。

如果一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样，那么这个字符串就是palindrome(回文)。

注意你需要去掉字符串多余的标点符号和空格，然后把字符串转化成小写来验证此字符串是否为回文。

函数参数的值可以为"racecar"，"RaceCar"和"race CAR"
**/
function palindrome(str) {
  // 请把你的代码写在这里
  var arr = str.toLowerCase().replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?]/g,"").replace(/\s/g, "").split("");
  var str2=arr.join("");
  var str1=arr.reverse().join("");
      if(str1== str2){
         return true;
      }else {
         return false;
      }
 
}



palindrome("eye");