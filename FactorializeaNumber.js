//计算一个整数的阶乘
//如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
//阶乘通常简写成 n!

function factorialize(num) {
  // 请把你的代码写在这里
  var num1=1;
  while(num > 0){
      num1 =num1*num;
      num--;
  }
  return num1;
}

factorialize(5);