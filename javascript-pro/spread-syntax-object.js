// ❌ Bad Code 💩

const item = { type: "👔", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

item["price"] = detail.price;

// -----------------------------

const newObject = new Object();

newObject["type"] = item.type;
newObject["size"] = item.size;
newObject["price"] = detail.price;
newObject["made"] = detail.made;

// ✅ Good Code ✨

const shirt0 = Object.assign(item, detail);
console.log(shirt0);

const shirt1 = { ...item, ...detail };
console.log(shirt1);

let fruits = ["🍉", "🍇", "🍎"];

fruits = [...fruits, "🥝"];
console.log(fruits);

fruits = ["🥦", ...fruits];
console.log(fruits);
