
const myarr:number[]= [1,2,5,7,3,9]

function maxMin([...myarr]):[number, number]{
 const max = (Math.max(...myarr))
 const min = (Math.min(...myarr))  
 return [max, min]  

}

const [max, min]= maxMin(myarr)

console.log(max)
console.log(min)