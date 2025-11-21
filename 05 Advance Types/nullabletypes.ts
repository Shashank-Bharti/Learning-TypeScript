// ts is strict on null or undefined
function greet(name: string | null) {
    if (name)
    console.log(name.toUpperCase());
    else
        console.log('Hola!');
        
    
}

greet(null) //Argument of type 'null' is not assignable to parameter of type 
// greet(undefined) //Argument of type 'undefined' is not assignable to parameter of type 'string | null'