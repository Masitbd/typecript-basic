function convertUpper(arg:string, isTrue?: boolean):string{
    if (isTrue) {
     return arg.toUpperCase()
    }
    else{
        return arg
    }
}


const findString = convertUpper('red', true)
console.log(findString)