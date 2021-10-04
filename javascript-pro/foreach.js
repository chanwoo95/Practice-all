let arr = ["😈", "😋", "😥"];

// arr.forEach((item, index) => {
//   alert(`my emotion is ${item} and index ${index}`);
// });

arr.forEach((item) => console.log(item));

// for version

let test = ["1", "2,", "3", "4"];
let copy = [];

for (let i = 0; i < test.length; i++) {
  copy.push(test[i]);
}

// foreach version

test.forEach((item) => copy.push(item));
