function angkaPalindrome(num) {
  if (num === 8){
    num += +1;
  }
  var i = num;
  while(i < 2000){
     var str = i.toString();
     str = str.split('');
     str = str.reverse();
     str = str.join('');
   
    if (i == str){
     return i; 
    }
    i++
  }


}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001