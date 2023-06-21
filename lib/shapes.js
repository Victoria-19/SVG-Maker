// Shape class defines what it means to be a shape
class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(colorVar) {
      this.color = colorVar;
    }
// Implement render method in subclasses (Circle, Triangle, Square)
render() {
    return ""; // Placeholder implementation, to be overridden in subclasses
  }
}
// Triangle class inherits properties from Shape class
class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
// Square class inherits properties from Shape class
class Square extends Shape {
    render() {
      return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  // Circle class inherits properties from Shape class
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
  }

  // Generate the svg based on user input

  function generateSvgContent(text, textColor, shapeType, shapeColor) {
    let shape;
    switch (shapeType) {
        case "circle":
            shape = new Circle();
            break;
        case "triangle":
            shape = new Triangle();
            break;
        case "square":
            shape = new Square();
            break;
            default:
                console.log("Invalid Shape Selection.");
                return null;
    }
    
    shape.setColor(shapeColor);
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="150" y="125" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>`;

  }

  module.exports = generateSvgContent;