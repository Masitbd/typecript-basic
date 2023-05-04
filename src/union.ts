type NoobDeveloper={
    name: string
}

type JuniorDeveloper= NoobDeveloper & { 
    age: number,
    experience: number

}

const newDeveloper: NoobDeveloper | JuniorDeveloper= {
    name: 'moznu mia',
    experience: 3,
    age: 34
}


