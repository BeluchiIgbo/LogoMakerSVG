const Square = require("../lib/square.js");

describe("Square", () => {
  describe("render", () => {
    it("should return a svg tag that has the correct color", () => {
      const square = new Square();
      let color = "green";
      square.setColor(color);
      expect(square.render()).toEqual(
        `<rect x='100' y='15' width='150' height='150'  fill='${color}'/>`
      );
    });
  });
});