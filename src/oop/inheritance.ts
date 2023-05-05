
class Parent{
    name: string;
    age: number;
    address: string;

    constructor(name: string, age:number, address:string){
        this.name = name;
        this.age = age;
        this.address =address;
    
    }

    makeSleep(hours:number):string{
        return `this ${this.name} will sleep for ${hours} `
    }

}

class Student extends Parent{
   
        constructor(name: string, age:number, address:string){
        super(name, age, address)
}

    makeSleep(hours:number):string{
        return `this ${this.name} will sleep for ${hours} `
    }

}

const student1 = new Student('aman', 12, 'Mirpur')
student1.address

class Teacher extends Parent{
   designation: string
    constructor(name:string, age:number, address:string, designation: string){
        super(name, age, address)
        this.name= name;
        this.address = address;
        this.age = age;
        this.designation = designation
    }

  takeClass(numOfClass:number):string{
        return `this ${this.name} will sleep for ${numOfClass} `
    }
}

const teacher1 = new Teacher('Hadayet', 100, 'mirpur', 'head master')

