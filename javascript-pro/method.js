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
