let emni: any;

emni= 'hello martin';

(emni as string).length


type customErorType= {
    messae: string

}
try {
    
} catch (error) {

    console.log((<customErorType>error).messae)
    
}