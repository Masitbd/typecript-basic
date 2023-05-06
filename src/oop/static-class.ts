class Counter{
  static counter:number=0;
 /*  constructor(counter:number){
    this.counter= counter
  } */
  increment():number{
    return (Counter.counter = Counter.counter + 1)
  }

  decrement():number{
    return (Counter.counter = Counter.counter + 1)
  }
}

const inst1 = new Counter()
const inst2 = new Counter()