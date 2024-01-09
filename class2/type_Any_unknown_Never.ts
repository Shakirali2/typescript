// Any

let myval: any;

myval = true;  //ok
myval = 42; //ok
myval = "hey" //ok
myval = [] ; //ok
myval = {}; //ok
myval = Math.random; //ok
myval = null; //ok
myval = undefined //ok
myval = () => { console.log('Hey again!'); }; //ok

myval.shakir.age() //allowed

// Unknown

let myval1: unknown;

myval1 = true;  //ok
myval1 = 42; //ok
myval1 = "hey" //ok
myval1 = [] ; //ok
myval1 = {}; //ok
myval1 = Math.random; //ok
myval1 = null; //ok
myval1 = undefined //ok
myval1 = () => { console.log('Hey again!'); }; //ok

//  Assigning a value of type unknown to variables of other types

let val: unknown;
const val1: unknown = val; //ok
const val2: any = val; //ok
const val3: boolean = val; // will throw error
const val4: number = val; //will throw error
const val5: string = val; //will throw error
const val6: Record<string, any> = val; //will throw error
const val7: any[] = val; // will throw error
const val8: (...args: any[]) => void = val; // will throw error

//Never

// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("something failed");
}

// Function returning never must not have a reachable end point
function infiniteLoop(): never {
    while (true) { }
}


