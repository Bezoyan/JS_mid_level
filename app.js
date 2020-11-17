// Class vs constructir Function

class User {
  constructor() {
    this.age = 30;
    this.name = "Kren";
  }
  getFiled() {
    console.log("name: " + this.name, " ", "age: " + this.age);
  }
}

const users = new User();
users.getFiled();

// "use strict"

// function User () {
//     // how does new works   - >this = {};
//     this.name = "Armen";
//     this.age = 36;

//     this.getFields = function () {
//         console.log("name: " + this.name, " ", "age: " + this.age)
//     }

//     //retur User;
// }

// const user = new User();
// user.getFields();

// function foo () {
//     console.log(this, "thius is inside fooo")
// }

// foo();
