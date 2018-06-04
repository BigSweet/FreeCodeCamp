/**
句中单词首字母大写

确保字符串的每个单词首字母都大写，其余部分小写。

像'the'和'of'这样的连接符同理。


**/


function titleCase(str) {
  //将字符串转化为数组并将其小写化
  var arr = str.toLowerCase().split(" ");
  
  for (var i=0;i<arr.length;i++){
    
    var char = arr[i].charAt(0);
    arr[i] = arr[i].replace(char, function replace(char){
      return char.toUpperCase();
    });
  }
  return arr.join(' ');
  
}

titleCase("sHoRt AnD sToUt");