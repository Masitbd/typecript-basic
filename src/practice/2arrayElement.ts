function compareArray(arr1: number[],arr2:number[]):number[]{
const commonElements:number[] = []

for (const num of arr1) {
    if(arr2.includes(num) && !commonElements.includes(num)){
        commonElements.push(num)
    }
    
}

return commonElements
}

const commonElement = compareArray([1,2,3,4,5,6], [3,4,5,6,7])

console.log(commonElement)