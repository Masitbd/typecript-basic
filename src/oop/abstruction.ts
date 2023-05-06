// abstruct class

abstract class Vheicle{
    constructor(
        public name: string,
        public brand: string,
        public model: number
    ){

    }
   abstract startEng(): void 
      
   abstract stopEng(): void

    abstract test():void
}



class car extends Vheicle{
    startEng(): void {
        
    }
    stopEng(): void {
        
    }
    test(): void {
        
    }
}