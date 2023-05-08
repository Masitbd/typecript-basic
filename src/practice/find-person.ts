interface IPerson1{
    name: string;
    age: number;
}

const persons:IPerson1[]=[
    {name:'alam', age: 17},
    {name:'sam', age: 28},
    {name:'pintu', age: 18},
    {name:'mitali', age: 14},
 ]

function findPerson<T extends IPerson1>(persons:T[]):T[]{
    return persons.filter(person=> person.age >= 18)
    }





const findPersonObj = findPerson(persons)
console.log(findPersonObj)
