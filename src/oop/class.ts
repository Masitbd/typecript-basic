class Animal{
 //  public name: string;
   public species: string;
   public sound: string;
// parameter properties
    constructor(public name: string,  species: string, sound: string){
        this.name = name
        this.species = species
        this.sound = sound
    }

    public makeSound(){
        console.log(`the ${this.name} says ${this.sound} `)
    }
}

const dog = new Animal('german shefard', 'dog', 'ghaw ghaw')
dog.makeSound()