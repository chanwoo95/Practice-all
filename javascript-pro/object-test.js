// Practice 1.
let user = {
  name: "John",
  surName: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user);

// Practice 2.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

const result = salaries.John + salaries.Ann + salaries.Pete;

console.log(result);
console.log(sum);

// Practice 3.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in menu) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}
multiplyNumeric(menu);
console.log(menu);
