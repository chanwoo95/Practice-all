// 중복되는 요소들을 제거하고 새로 만들기

const animals = [
  "🦝",
  "🐱",
  "🐯",
  "🦒",
  "🐷",
  "🦊",
  "🐻",
  "🐰",
  "🐹",
  "🐹",
  "🐱",
  "🐷",
  "🦝",
  "🐵",
];

const result = [...new Set(animals)];
console.log(result);
