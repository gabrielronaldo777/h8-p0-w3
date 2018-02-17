function targetTerdekat(arr) {
    var o = arr.indexOf('o');
    var x = arr.indexOf('x');
    if (x === -1){
        return 0;
    }
    if (o < x){
        return x - o;
    } 
    else if(o > x){
        var lastx = arr.lastIndexOf('x');
        return o - lastx;
    } 
    
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2