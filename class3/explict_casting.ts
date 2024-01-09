let myname: unknown = "Zia";
console.log(myname.length); // without type casting
console.log((myname as string).length); //type casting
// <> called generics
console.log((<string>myname).length); // type casting

//======================================//

let myname1: string = "1"

console.log((myname1 as unknown as number).toFixed());

