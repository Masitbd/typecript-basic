interface IPerson{
    name: string;
    age: number;
    email: string;
}

const arrayOfPerson:IPerson[] = [{name:'murad', age:20, email:'sar@gmail.com'}, {name:'karim', age:20, email:'murad@gmail.com'}]

function findPerson(arrayOfPerson:IPerson[], email:string):IPerson | null{
   for (let i = 0; i < arrayOfPerson.length; i++) {
    if (arrayOfPerson[i].email=== email) {
        return arrayOfPerson[i]
    }
    
    
   }
   return null
}



const getFound=findPerson(arrayOfPerson, 'murad@gmail.com')
console.log(getFound);
