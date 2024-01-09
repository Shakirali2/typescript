// literal value means specific value/constant value

// literal type

let age: number | "died" | "unknown";

// i.e it will not accept literal type
// age = "shakir"

age = 90; //ok
age = "died"; //ok
age = "unknown"; //ok
// age = "living"; //Error

// Another example of literal type
// it will response "Zia"
let zia: "Zia";

// zia = "zia";