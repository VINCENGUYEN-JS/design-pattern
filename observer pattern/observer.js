class Observable {
  constructor() {
    this.observers = [];
  }
  subcribe(func) {
    this.observers.push(func);
  }
  unsubcribe(func) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}
