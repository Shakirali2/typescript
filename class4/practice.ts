class Human {
    name: string;

    constructor(n:string){
        this.name = n
        console.log(this);
        
    }

    eat() {
        console.log(`${this.name} eating`); 
    }
}  

const user1 = new Human("shakir")

console.log(user1.eat("biryani"));
console.log(user1.name);
