class Counter{
  static counter:number=0;
 /*  constructor(counter:number){
    this.counter= counter
  } */
 static increment():number{
    return (Counter.counter = Counter.counter + 1)
  }

  static decrement():number{
    return (Counter.counter = Counter.counter + 1)
  }
}


//no need to create class instance

Counter.increment()
Counter.decrement()
 