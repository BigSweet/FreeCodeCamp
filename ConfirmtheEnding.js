/**检查字符串结尾

判断一个字符串(str)是否以指定的字符串(target)结尾。

如果是，返回true;如果不是，返回false。
**/

function confirmEnding(str, target) {
  // 请把你的代码写在这里
  
  if(str.substring(str.lastIndexOf(target),str.length)===target){
     return true;
  }
  
   return false;
}

confirmEnding("He has to give me a new name", "me");
