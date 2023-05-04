// arrow function

const createArray = (param: string): string[]=> {
    return [param]
}

const result1 = createArray('bangladesh')


// new version
const createArray1 = <T extends {name: string, salary: number}>(param: T): T[]=> {
    return [param]
}

const result2 = createArray1<string>('bangladesh')

// use touple return

const createArrayTouple = <X,Y>(param1: X, param2: Y ): [X,Y]=> {
    return [param1, param2]
}

const result3 = createArrayTouple<string, string>('bangladesh', 'India')


// spread operator


const myInfo = {
    name: 'jamal haidar',
    salary: 3000
}

const addmeinfun= <T>(myInfo:T)=>{
    const cru= 'kat'
    const mydata ={...myInfo, cru}

    return mydata
}


const result5 = addmeinfun(myInfo)