// ❌ Bad Code 💩

function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = "nothing to display:(";
  }
  console.log(message);
}

printMessage("hello");

// ✅ Good Code ✨
// nullish coalescing operator

function printMessage2(text) {
  const message = text ?? "nothing to display:(";
  console.log(message);
}

printMessage2("test message");
printMessage2(null);
printMessage2(undefined);
