// ❌ Bad Code 💩

function getResult(score) {
  let result;
  if (score > 5) {
    result = "nice~:)";
  } else if (score < 5) {
    result = "bad:(";
  }
  return result;
}
console.log(getResult(10));

// ✅ Good Code ✨

function getResult2(score) {
  return score > 5 ? "nice~" : "bad:(";
}

console.log(getResult2(3));
