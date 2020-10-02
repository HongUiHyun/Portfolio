function Person(frist, last, age, gender, interests) {
  (this.name = {
    frist: frist,
    last: last,
  }),
    (this.age = age),
    (this.gender = gender),
    (this.interests = interests),
    (this.bio = function () {
      alert(
        `${this.name.frist} ${this.name.last} is ${this.age} years old. He likes ${this.interests[0]} and ${this.interests[1]}`
      );
    }),
    (this.greeting = function () {
      alert(`Hi I'm ${this.name.frist}`);
    });
}
let me = new Person("UiHyun", "Hong", "31", "male", [
  "reading books",
  "movies",
]);
let myString = "THis is my String.";
Person.prototype.aa = function () {
  alert(`Goodbye All!`);
};
