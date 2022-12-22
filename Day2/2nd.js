// classes

class Vehical{
    constructor(name, brand, color){
        this.name = name;
        this.brand = brand;
        this.color = color;
    }
    getname(){
        return(`The name of the vahicle is ${this.name}`)
    }
    getbrand(){
        return(`The name of the vahicle is ${this.brand}`)
    }
}
let Vehical1 = new Vehical("supra","Toyata","red")

console.log(Vehical1.getname());