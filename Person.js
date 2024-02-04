class Person{
    constructor(Name,age,Location){
    this.Name = Name;
    this.age = age;
    this.Location = Location;
}
displayDetails(){
    console.log(`Name: ${this.Name}
Age: ${this.age}
Location: ${this.Location}
`);
}
}

let Person1 = new Person("Thirumaran M",33,"Chennai");
let Person2 = new Person("Vel",35,"Madurai");

Person1.displayDetails();
Person2.displayDetails();
