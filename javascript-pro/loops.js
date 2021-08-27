const items = [1, 2, 3, 4, 5, 6];

// ❌ Bad Code 💩
const result = [];
for (let i = 0; i < items.length; i++) {
  if (items[i] % 2 === 0) {
    result.push(items[i]);
  }
  return result;
}

let sum = 0;
items.map((item) => {
  if (item % 2 === 0) sum += item * 4;
});

console.log(sum);

// ✅ Good Code ✨

const result = items
  .filter((item) => item % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);
