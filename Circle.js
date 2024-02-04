class Circle{
    constructor(radius,color){
        this.radius = parseFloat(radius);
        this.color = color;
    }

    getRadius(radius){
        return this.radius;
    }
    setRadius(radius){
        this.radius = radius;
    }

    getColor(color){
        return this.color;
    }
    setColor(color){
        this.color = color;
    }

    getArea(area){
        return (Math.PI*Math.pow(this.radius,2)).toFixed(2);
    }   
    getCircumference(circ){
        return (2*Math.PI*this.radius).toFixed(2);

    }
}

//let myCircle = new Circle(5, "blue");
let myCircle = new Circle(1.0, "blue");
console.log("Get Color:", myCircle.getColor());
console.log("Get Radius:", myCircle.getRadius());
console.log("Area of the circle:", myCircle.getArea());
console.log("Circumference of a Circle:", myCircle.getCircumference());

console.log("---------------------");

myCircle.setRadius(8);
myCircle.setColor("red");

console.log("Radius of the circle:", myCircle.radius);
console.log("Radius of the circle:", myCircle.color);
console.log("Area of the circle:", myCircle.getArea());
console.log("Circumference of a Circle:", myCircle.getCircumference());

