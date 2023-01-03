class Animal {
    // Code class di sini
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}

class Ape extends Animal{
    constructor(name){
        super(name)
        this.legs = 2;
    }
    yell(){
        console.log(`Auooo`)
    }
}

class Frog extends Animal{
    constructor(name){
        super(name)
        this.cold_blooded = true;
    }
    jump(){
        console.log(`hop hop`)
    }
}

// Code class Ape dan class Frog di sini  
const sungokong = new Ape("kera sakti");
console.log(sungokong.name); // "kera sakti"
console.log(sungokong.legs); // 2
console.log(sungokong.cold_blooded); // false
sungokong.yell(); // "Auooo"

const kodok = new Frog("buduk");
console.log(kodok.name); // "buduk"
console.log(kodok.legs); // 4
console.log(kodok.cold_blooded); // true
kodok.jump(); // "hop hop"