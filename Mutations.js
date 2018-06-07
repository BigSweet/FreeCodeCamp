/**
比较字符串

（蛤蟆可以吃队友，也可以吃对手）

如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。

举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。

["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。

["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。
**/

function mutation(arr) {
  // 请把你的代码写在这里
  var s1=arr[0].toUpperCase();
  var s2=arr[1].toUpperCase();
  var res =0;
  var arr1 =s2.split("");
 
  for(var i=0; i<arr1.length;i++){
    if(s1.indexOf(arr1[i])>=0){
        res++;
    }
  }

  if(res===s2.length){
    return true;
  }
  return false;
}

mutation(["hello", "Hello"]);
