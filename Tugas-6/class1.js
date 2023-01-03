
  class Animal {
    // Code class di sini
    constructor(name){
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
 
const sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false