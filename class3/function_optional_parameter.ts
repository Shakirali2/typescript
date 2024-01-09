//  ? Optional
//Named function with optional parameters
function buildName(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");  //ok
let result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams");  //also ok



//anonymous function type with optional parameters
let buildName1 : (firstName: string, lastName?: string) => string = 
function(firstName, lastName) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}