// key of guard
type AlphaNeumeric = string| number
function add(param1: AlphaNeumeric, param2: AlphaNeumeric ){
    if(typeof param1==='number' && typeof param2 === 'number' ){
        return param1 + param2
    }
    else{
        return param1.toString() + param2.toString()
    }
}



// in guard

type normalUserType ={
    name: string
}

type adminUserType={
    name: string;
    role: 'admin';
}

function getUser(user: normalUserType | adminUserType):string{
  if ('role' in user) {
    return `I am an admin user`
  }  
  else{
    return 'I am an normal user'

  }
}

const normalUser:normalUserType={name:'amin shek'}
const adminUser:adminUserType={name:'amir', role: 'admin'}


// instance guard

class Animal1{
    name: string;
    species: string;
    
    constructor(name:string, species: string){
        this.name= name;
        this.species= species
    }
  
    makeSound(){
        console.log('I am making sound');
        
    }
}

class Dog extends Animal1{
    constructor(name:string; species:string){
        super(name, species)
    }

    makeBark(){
        console.log('I am barking');
        
    }

}
class Cat extends Animal1{
    constructor(name:string, species:string){
        super(name, species)
    }

    makeMeaw(){
        console.log('I am making sound meau');
        
    }
}