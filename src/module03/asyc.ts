
// making api

interface ITodo{
  userId: number;
  id: number;
  title: string;
  completed: boolean
}

const getToDo = async():Promise<ITodo>=>{
 const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')   
 return await response.json()
}

const getToDoData = async ():Promise<void>=>{
    const result = await getToDo()
    console.log(result)
}


const makePromise=():Promise<string>=>{
 return  new Promise<string>((resolve, reject)=>{
    const data:string= 'data is faced from server'
 

   if (data) {
    resolve(data)
   }
   else{
    reject('failed to faced data')
   }
})
} 

const getPromiseData = async ():Promise<void>=>{
    const data = await makePromise()
    console.log(data)
}