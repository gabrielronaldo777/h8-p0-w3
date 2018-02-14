function balikString (str){
    var tampung ='';
    for (var i = str.length -1; i >= 0; i-- ){
      tampung += str [i];
    }
    return tampung;
}  

console.log(balikString('Hello World!'));