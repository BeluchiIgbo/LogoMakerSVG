class Shape {
  constructor(color) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Square extends Shape {
  setColor(color) {
    this.color = color;
  }
  render() {
    return `<rect x='100' y='15' width='150' height='150'  fill='${this.color}'/>`;
  }
}

module.exports = Square