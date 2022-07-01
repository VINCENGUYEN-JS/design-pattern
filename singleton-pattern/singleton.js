let counter = 0;
let instance;

class Counter {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance");
    }
    instance = this;
  }
  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}

const singleonCounter = Object.freeze(new Counter());

export default singleonCounter;
