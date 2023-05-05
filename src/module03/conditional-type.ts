// a type is dependent another type
type a1 = null
type a3 = undefined
type a4 = number
type a2 = a1 extends String ? String : null
type d = a1 extends null ? null : a3 extends number ? number: any

type Sheik = {
wife1: string;
wife2: string
}

type CheckProperty<T>= T extends {wife1: string}? true: false
type checkWife1 = CheckProperty<Sheik>
