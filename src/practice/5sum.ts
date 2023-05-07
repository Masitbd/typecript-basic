// [1,2,3,4,5]

let sum = 0;
function addOddSum(arr:number[]):number{
  
    for (let index = 0; index < arr.length; index++) {
        if (arr[index]%2===0) {
            sum= sum+arr[index]
        }
        
    }
   
    return sum
}


const getResult = addOddSum([1,2,3,4,5,6])
console.log(getResult)