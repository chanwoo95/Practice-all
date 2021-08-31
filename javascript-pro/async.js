// 1. async

// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     resolve("chanwoo");
//   });
// }

function dealy(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  dealy(1000);
  return "🍎";
}

async function getBanana() {
  dealy(1000);
  return "🍌";
}

async function getFruits() {
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
}

getFruits().then(console.log);
