const inquirer = require("inquirer");
const Triangle = require('./lib/triangle.js')
const Circle = require('./lib/circle.js')
const Square = require('./lib/square.js')
const { writeFile } = require("fs").promises;


class Svg {
  constructor() {
    this.text = '';
    this.shape = '';
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg" >${this.shape}${this.text}</svg>`
  }
  setText(text, textColor) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  setShape(shape) {
    this.shape = shape.render()
  }
}

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 characters for logo",
  },
  {
    type: "input",
    name: "textColor",
    message:
      "Enter a color or hexadecimal for text color",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "Enter a color or hexadecimal for shape color",
  },
];


function validateAns(answers) {

  if (answers.text.length > 3) {
    console.log('Only enter up to 3 characters for logo text')
    return
  }
  else if ((answers.text.length < 1) || (answers.text === ' ')) {
    console.log('Enter at least 1 character for logo text')
    return
  }
  else return writeSVGFile("logo.svg", generateLogo(answers));
}

function writeSVGFile(name, data) {
  writeFile(name, data);
}

function generateLogo(answers) {
  const logo = new Svg(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  logo.setText(answers.text, answers.textColor)
  logo.setShape(shapeSelectHandler(answers.shape, answers.shapeColor))
  console.log('Generated logo.svg')
  return logo.render()
}

function shapeSelectHandler(shape,color) {
  let newShape
  if (shape === 'Triangle') {
    newShape = new Triangle()
    newShape.setColor(color)
    return newShape
  } else if (shape === 'Circle') {
    newShape = new Circle()
    newShape.setColor(color)
    return newShape
  } else {
    newShape = new Square()
    newShape.setColor(color)
    return newShape
  }
}

function init() {
  inquirer
    .prompt(questions)
    .then((res) => validateAns(res))
}

init();