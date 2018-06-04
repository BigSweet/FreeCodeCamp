/**
找出最长单词

在句子中找出最长的单词，并返回它的长度。

函数的返回值应该是一个数字。
**/

function findLongestWord(str) {
  // 请把你的代码写在这里
  var arr=str.split(" ");
  var length=arr[0].length;
  var max =0;
  for(var i=0;i<arr.length;i++){
  if(arr[i].length>length){
     max=arr[i].length;
     length=arr[i].length;
   }else {
     max=length;
   }
  }
            
  return max;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
