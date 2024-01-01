const Triangle = require("../lib/triangle.js");

describe("Triangle", () => {
  describe("render", () => {
    it("should return a svg tag that has the correct color", () => {
      const triangle = new Triangle();
      let color = "blue";
      triangle.setColor(color);
      expect(triangle.render()).toEqual(
        `<polygon points='150,18 244,182 56,182' fill='${color}'/>`
      );
    });
  });
});