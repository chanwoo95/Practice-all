class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`your color is ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("Δ");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const square = new Square(20, 20, "red");
square.draw();
console.log(square.draw());
const triangle = new Triangle(20, 20, "blue");
triangle.draw();
console.log(triangle.getArea());
