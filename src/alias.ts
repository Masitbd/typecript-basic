type CryshType= {
    name: String,
    age: Number,
    address: String
}
const crush1:CryshType ={
   name: 'maina paki',
   age: 23,
   address:'Glostrup'
}

type OperatorType=(x:number, y:number)=>number

const calculation=(
    number1: number,
    number2: number,
    operation: OperatorType
)=>{
    return operation(number1, number2)
}

calculation(10,20,(x,y)=>x+y)


