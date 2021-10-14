// 객체 생성자 문법

// const userInfo = new Object();

// 객체 리터럴 문법

const userInfo = {
  name: "chanwoo",
  age: 27,
  city: "Seoul",
  job: "don't have",
};

const key = "job";

console.log(userInfo.name, userInfo.age);
console.log(userInfo[key]);

function makeUser(name, age) {
  return {
    name,
    age,
  };
}

const user = makeUser("John", 32);
console.log(user.name);

// 계산된 프로퍼티

const bills = prompt("청구요금", "sandwitch");

const item = {
  [bills]: 5000,
};

console.log(item.sandwitch);
