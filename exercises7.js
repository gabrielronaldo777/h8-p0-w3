function hitungJumlahKata(kalimat) {
    var result ='';
    for (var i=0; i < kalimat.length; i++){
        result += kalimat[i];
    }
    var jumlah = result.split(' ');
return jumlah.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5 
