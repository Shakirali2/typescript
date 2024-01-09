//  Union type (syntex of Union (|) )
let myname: string | null | number;
myname = 123


let myAge: string | number;

myAge = 16; // narrowing
console.log(myAge);

myAge = "Dont't know"; //narrowing
console.log(myAge);
