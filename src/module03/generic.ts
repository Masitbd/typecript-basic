// generic interface

interface CrushInterface<T>{
    name: string,
    husband: T 

}

const crush:CrushInterface<boolean>= {
    name: 'janny',
    husband: true
}

const crush3:CrushInterface<{name: string, salary: number}>= {
    name: 'janny',
    husband: {
        name: 'monir',
        salary: 2000
    }
}

interface husbandInterface{
    name: string,
    salary: number
}
const crush4:CrushInterface<husbandInterface>= {
    name: 'janny',
    husband: {
        name: 'monir',
        salary: 2000
    }
}


type GenericArray<T> = Array<T> 

type GenericTouple<x,y> = [x, y]

const relation: GenericTouple<string, string> = ['piter', 'janny']
const relationwithsalary: GenericTouple<object, string> =[
    {
        name: 'piter',
        salary: 26000
    },
   'jensy sarma' 
]

// best way

const relationwithsalary1: GenericTouple<{name: string, salary: number}, string> =[
    {
        name: 'piter',
        salary: 26000
    },
   'jensy sarma' 
]

const rollNumber1:Array<number> = [13, 11,35]
const rollNumber2: number[] = [13, 11,35]


const rollNumber3:GenericArray<number> = [13, 11,35]
const rollNumber4: GenericArray<number> = [13, 11,35]

const nameAndRoll: Array<{name: string; roll: number}> = [
    {
        name: 'jamal',
        roll: 300,
    },
    {
        name: 'kabir bhai',
        roll: 304,
    }
]

type namenroll = {
    name: string,
    roll: number
}

const nameAndRoll1: GenericArray<namenroll> = [
    {
        name: 'jamal',
        roll: 300,
    },
    {
        name: 'kabir bhai',
        roll: 304,
    }
]
