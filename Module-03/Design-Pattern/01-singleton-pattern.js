class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
    this.count = 0;
  }

  increment() {
    this.count++;
  }
}

const a = new Singleton();
a.increment();

const b = new Singleton();
b.increment();

console.log(b.count); // 2 (same instance)

console.log(a === b); // true
