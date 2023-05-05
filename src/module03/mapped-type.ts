const arrayOfNumbers = [1,2,3] // ['1','2', '3']

const arrayOfStrings = arrayOfNumbers.map(number => number.toString())

type AreaNumber = {
    hight: number;
    width: number
}

type A = AreaNumber['hight'] // look up type
type B = keyof AreaNumber // ''hight' | 'width'


type volume = {
    hight: number;
    width: number;
    depth: number
}

type Area<T> = {
    [key in keyof T  ]:T[key]
}