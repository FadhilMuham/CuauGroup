//Soal 1 ---------------------------------------------------------------------------

function myCountPromise(param){
    return new Promise((resolve, reject)=>{
        if(param !== undefined){
            setTimeout(()=>{
                resolve(param*2)
            },2000)
        }
        else{
            reject(`tidak ada angka`)
        }
    })
}

//kode dibawah ini jangan dihapus atau diedit sama sekali ya


myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})



