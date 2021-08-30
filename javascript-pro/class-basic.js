class Counter {
  constructor(runEveryTime) {
    this.counter = 0;
    this.callback = runEveryTime;
  }

  increase() {
    this.counter++;
    if (this.counter % 5 === 0) {
      this.callback && this.callback(this.counter);
    }
  }
}

function printSomeThing(num) {
  console.log(`count: ${num}`);
}
function alertNum(num) {
  alert(`count: ${num}`);
}

const coolCounter = new Counter(printSomeThing);
const alertCounter = new Counter(alertNum);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
alertCounter.increase();
