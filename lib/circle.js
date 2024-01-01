class Shape {
    constructor(color) {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    setColor(color) {
      this.color = color;
    }
    render() {
      return `<circle cx='150' cy='100' r='80' fill='${this.color}'/>`;
    }
  }
  
  module.exports = Circle