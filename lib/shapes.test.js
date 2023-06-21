const generateSvgContent = require("./shapes.js");

describe("Logo Generator", () => {
    test("Generates correct SVG content", () => {
      const text = "ABC";
      const textColor = "WHITE";
      const shapeType = "circle";
      const shapeColor = "blue";
  
      const expectedSvgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="115" r="80" fill="blue" />
      <text x="150" y="100" text-anchor="middle" fill="WHITE">ABC</text>
    </svg>`;
  
      const svgContent = generateSvgContent(text, textColor, shapeType, shapeColor);
  
      expect(svgContent).toBe(expectedSvgContent);
    });
  });


  describe("Logo Generator", () => {
    test("Generates correct SVG content", () => {
      const text = "LPT";
      const textColor = "WHITE";
      const shapeType = "triangle";
      const shapeColor = "red";
  
      const expectedSvgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150, 18 244, 182 56, 182" />
      <text x="150" y="100" text-anchor="middle" fill="WHITE">LPT</text>
    </svg>`;
  
      const svgContent = generateSvgContent(text, textColor, shapeType, shapeColor);
  
      expect(svgContent).toBe(expectedSvgContent);
    });
  });