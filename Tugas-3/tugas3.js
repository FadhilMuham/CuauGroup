//soal 1 ----------------------------------------------------------------------------------------------------

function soal1(){
   
    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
}

soal1()

//soal 2 ----------------------------------------------------------------------------------------------------

function soal2(){

    for(let ganjil = 1; ganjil <= 10; ganjil++){
        if(ganjil%2 !== 0){
            console.log(ganjil)
        }
    }
}

soal2()

//soal 3 ----------------------------------------------------------------------------------------------------

function soal3(){

    for(let ganjil = 0; ganjil < 10; ganjil++){
        if(ganjil%2 === 0){
            console.log(ganjil)
        }
    }
}

soal3()

//soal 4 ----------------------------------------------------------------------------------------------------

let array1 = [1,2,3,4,5,6]
console.log(array1[5])

//soal 5 ----------------------------------------------------------------------------------------------------

let array2 = [5,2,4,1,3,5]
array2.sort()
console.log(array2)

//soal 6 ----------------------------------------------------------------------------------------------------

let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]

for(let a = 0; a < array3.length; a++ ){
    console.log(array3[a])
}

//soal 7 ----------------------------------------------------------------------------------------------------

function soal7(){

    let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
    
    for(let b = 0; b<array4.length;b++){
        if(array4[b]%2 === 0){
            console.log(array4[b])
        }
    }
    
}
soal7()

//soal 8 ----------------------------------------------------------------------------------------------------

function soal8(){
    let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"]
    let hasil =""
    for(let c = 0 ; c < kalimat.length; c++){
        hasil += kalimat[c]
        hasil += " " 
    }
    console.log(hasil)
}
soal8()

//soal 9 ----------------------------------------------------------------------------------------------------

function soal9(){
    var sayuran=[]
    let tambah = [`Kangkung`,`Bayam`,`Buncis`,`Kubis`,`Timun`,`Seledri`,`Tauge`]

    for(let d = 0; d < tambah.length; d++){
        sayuran.push(tambah[d])
    }
    console.log(sayuran)
}

soal9()