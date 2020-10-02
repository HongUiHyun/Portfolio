function Person(first, last, age, gender, interests) {
  this.name = { first: first, last: last };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
Person.prototype.greeting = function () {
  console.log(`Hi! I'm ${this.name.last}`);
};
Person.prototype.farewell = function () {
  console.log("RIP!");
};
Person.prototype.farewell = function () {
  console.log("farewell fucntion is changed!");
};
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);

Object.defineProperty(Teacher.prototype, "constructor", {
  value: Teacher,
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true,
});

Teacher.prototype.greeting = function () {
  let gender = this.gender;
  let prefix = this.gender.toLowerCase();
  switch (gender) {
    case "male" || "m":
      prefix = "Mr.";
      break;
    case "female" || "f":
      prefix = "Mr.";
      break;
    default:
      prefix = "Mx.";
      break;
  }
  console.log(
    `Hello. My name is ${prefix} ${this.name.last}, I teach ${this.subject}.`
  );
};

const me = new Teacher("Uihyun", "Hong", 31, "male", "movies", "English");
me.greeting();
me.farewell();
