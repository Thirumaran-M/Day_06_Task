class UberPriceCalc{
    constructor(Name, KM){
        this.Name = Name;
        this.KM = KM;
    }
    getPrice(Price){
        return `
        Dear ${this.Name}!
        The Price is Rs. ${this.KM*18} for ${this.KM} KM Travelled`;
    }
}

let Person1 = new UberPriceCalc("Thirumaran M",33);
let Person2 = new UberPriceCalc("Vel",35);

console.log(Person1.getPrice());
console.log(Person2.getPrice());