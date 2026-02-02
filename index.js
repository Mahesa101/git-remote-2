console.log("hello word")
let angka =40;
for(let i =0;i<angka;i++){
    return console.log(i)
}
let masuk =Number(prompt("masukan akan angka:"));

let random = Math.floor(Math.random()*100)+1;
let hasil = masuk+random;
alert(`angka anda ${masuk}
    angka random: ${random}
    TOTAL: ${hasil}`)