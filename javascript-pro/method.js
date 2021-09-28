let user = {
  name: "chan",
  callMyName() {
    console.log(this.name);
  },
};

const sayHi = function () {
  console.log("say hi!");
};

user.sayHi = sayHi();
user.sayHi;

user.callMyName();

//

function User(color) {
  this.color = color;
}

let user = new User("blue");
console.log(user.color);
