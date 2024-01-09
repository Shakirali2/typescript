// not good method
let teacher1: { name: string, exp: number } = {
    name: "Shakir",
    exp: 10
}

//  1 time made ans use many time
type student = {
    name: string,
    age? :number  // ? it means Optional wheter i give or not no matter
}

let std: student = {
    name: "Shakir",
    age: 25
}

let std2: student = {
    name: "Hamzah",
    age: 20
}