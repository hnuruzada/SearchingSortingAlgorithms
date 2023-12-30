// var number=10504

// var mertebeSayi=0
// var hesab=0
// var z=number
// if(number!==0){
//     while (number>=1 || number<=-1) {
//         number=number/10
//         mertebeSayi++
//     }
//     console.log(mertebeSayi);
// }else{
//     mertebeSayi++
//     console.log(mertebeSayi);
// }


// if(mertebeSayi===5){
//     hesab=(z*0.18)*0.03
//     console.log(hesab);
// }
// else{
//     console.log("5 reqemli eded deyil");
// }



var number=512

var z=number
var qaliq

var Besvarmi=false


while(number>=1){
    qaliq=number%10
    if(qaliq===5){
        Besvarmi=true
        console.log("5 var"+" "+ z);
        break
    }
    number=(number-qaliq)/10
}
if(!Besvarmi){
    console.log("5 yoxdur");
}

