var panggiluntukinput = require("readline-sync");
var bilangan = panggiluntukinput.question("Masukkan Bilangan: ");
var sisa_bagi = bilangan % 2

if(isNaN(bilangan)){
    console.log("Yang anda masukkan bukan angka");
}else{
    if(sisa_bagi == 0)
    {
        console.log("BILANGAN GENAP");
    }else{
        console.log("BILANGAN GANJIL");
    }
}