//soal 1 ----------------------------------------------------------------------------

function soal1(){
    let kata = "done"
    return kata
}

console.log(soal1())

//soal 2 ----------------------------------------------------------------------------

function soal2(angka1,angka2){

    let hasil = angka1 + angka2
    return hasil
}

console.log(soal2(20, 7))

//soal 3 ----------------------------------------------------------------------------

let hello = "";

hello = () => {
  return "Hello!";
}

console.log(hello())

//soal 4 ----------------------------------------------------------------------------

let obj = {

    nama : "john",
    
    umur : 22,
    
    bahasa : "indonesia"
    
    }

console.log(obj.bahasa)

//soal 5 ----------------------------------------------------------------------------

function soal5(){
    let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
    let objDaftarPeserta = {}

    objDaftarPeserta.name = arrayDaftarPeserta[0]
    objDaftarPeserta.gender = arrayDaftarPeserta[1]
    objDaftarPeserta.hoby = arrayDaftarPeserta[2]
    objDaftarPeserta.birth = arrayDaftarPeserta[3]

    return objDaftarPeserta
}

console.log(soal5())

//soal 6 ----------------------------------------------------------------------------

function soal6(){

let obj ={nama: `Nanas`,
    warna: `Kuning`,
    biji: `tidak`,
    harga: 9000 }
let obj2 = {nama: `Jeruk`,
    warna: `Oranye`,
    biji: `ada`,
    harga: 8000}
let obj3 = {nama: `Semangka`,
    warna: `Hijau, Merah`,
    biji: `ada`,
    harga: 10000 }
let obj4 = {nama: `Pisang`,
    warna: `Kuning`,
    biji: `tidak`,
    harga: 5000}

let arr = []

arr.push(obj, obj2, obj3, obj4)

let hasil = arr.filter(arr => arr.biji === "tidak")

console.log(hasil)
}

soal6()

//soal 7 ----------------------------------------------------------------------------

let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 
 
 
//  let name = phone.name;
//  let brand = phone.brand;
//  let year = phone.year;
// after  ES6
let {name, brand, year} = phone
 
 
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year) 

 //soal 8 ----------------------------------------------------------------------------

 let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {}
  
  // kode diatas ini jangan di rubah atau di hapus sama sekali
  
 objOutput = {...buku, ...dataBukuTambahan}

  // kode di bawah ini jangan dirubah atau dihapus
  console.log(objOutput) 

  //soal 9 ----------------------------------------------------------------------------

  let mobil = {

    merk : "bmw",
    
    color: "red",
    
    year : 2002
    
    }
    
    const functionObject = (mobil) => {
    
    return mobil
    
    }

    console.log(functionObject(mobil))