class Person{
    takeNap():void{
        console.log('I am sleeping');
        
    }
}

class Student1 extends Person{
    takeNap(): void {
     console.log('i am taking too much sleep');
        
    }
}
class Developer extends Person{
    takeNap(): void {
        console.log('i am sleeping 4 hours');
        
    }
}
function getNap(param:Person){
    param.takeNap()
}

const person1= new Person()
const person2= new Student1()
const person3= new Developer()
