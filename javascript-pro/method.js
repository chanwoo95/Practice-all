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

//

let arr = ["This", "is", "a", "book"];

delete arr[0];
alert(arr.length); // 4

// splice

arr.splice(0, 1);
alert(arr.length);

// splice 삭제 후 대체

let text = ["Let's", "go", "home"];

text.splice(2, 1, "party");
console.log(text);

// concat

let arr2 = [1, 2, 3];

arr.concat([4, 5]);
console.log(arr2);
