let array1: number[] = [1,2,3,4] //correct syntex

console.log(array1[1]);

let array2: Array<number> = [1,2,3]; //alternative correct syntac
let array3: number[] = []; //correct syntac to define an empty arrya
let array4: number[] = new number[2] //error

let array5: number[] = [];
array5.push(123); //dynamically adding