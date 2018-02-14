var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]; 

function dataHandling2 (){
    input.splice(1, 5, 'Roman Alamsyah Elsharawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro');
    console.log(input);

    var bulan = 5;
    switch (bulan){
       case 1 : bulan = 'Januari'; break;
       case 2 : bulan = 'Februari'; break;
       case 3 : bulan = 'Maret'; break;
       case 4 : bulan = 'April'; break;
       case 5 : bulan = 'Mei'; break;
       case 6 : bulan = 'Juni'; break;
       case 7 : bulan = 'Juli'; break;
       case 8 : bulan = 'Agustus'; break;
       case 9 : bulan = 'September'; break;
       case 10 : bulan = 'Oktober'; break;
       case 11 : bulan = 'November'; break;
       case 12 : bulan = 'Desember'; break;

    } console.log(bulan);
     
     var tgl = input[3].split('/');
     var des = tgl.sort(function(value1, value2) { 
         return parseInt(value1) < parseInt(value2)
        });
     console.log(des);
     
     var gabung = input[3].split('/').join('-');
     console.log(gabung);

     var nama = input[1].slice(0, 14);
     console.log(nama);
      
}

dataHandling2();
