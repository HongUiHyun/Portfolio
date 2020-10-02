/**
 * Inheritance with class syntax
 */

class Person {
  constructor(first, last, age, gender, interests) {
    this.name = { first, last };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi I'm ${this.name.first}`);
  }

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  }
}

let han = new Person("Han", "Solo", "25", "male", ["smuggling"]);

class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    this._subject = subject;
    this.grade = grade;
  }
  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

let newTeacher = new Teacher(
  "kim",
  "Solo",
  25,
  "male",
  ["studying"],
  "English",
  95
);

/**
 *
 *  Practice
 *
 */

function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}

// Write your code below here
Shape.prototype.calcPerimeter = function () {
  console.log(this.sideLength * 4);
};

let square = new Shape("square", 4, 5);
square.calcPerimeter();

let triangle = new Shape("triangle", 3, 3);
console.log(triangle);
triangle.calcPerimeter = function () {
  console.log(this.sideLength * 3);
};

triangle.calcPerimeter();
