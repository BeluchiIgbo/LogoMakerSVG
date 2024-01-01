const Circle = require('../lib/circle.js')

describe('Circle', () => {
    describe('render', () => {
        it('should return a svg tag that has the correct color', () => {
            const circle = new Circle()
            let color = ('red')
            circle.setColor(color)
            expect(circle.render()).toEqual(
              `<circle cx='150' cy='100' r='80' fill='${color}'/>`
            );
        });
    });
})