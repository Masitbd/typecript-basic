interface IUser{
    name: string,
    age: number
}

interface IExtenUser extends IUser{
    salary: number
}


const userdata:IExtenUser={
    name: 'Manki mia',
    age: 300,
    salary: 400
}

type rollNumber = number[]
interface IRollnumber{
    [index:number]:string
}

const rollNumber:IRollnumber= ['1', '2', '3']  