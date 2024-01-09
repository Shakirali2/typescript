
interface Ball {
    diameter: number;
}

interface Sphere {
    diameter: number;
}

let ball: Ball = { diameter: 10}
let sphere: Sphere = { diameter: 20};

sphere = ball;
ball = sphere;

// =============================================//
interface Tube {
    diameter: number;
    length: number;
}

let tube: Tube = {
    diameter: 12,
    length: 3
};

ball = tube

//  Case # 1

let myType = { name: "Zia", id: 1 };
// myType = "Shakir"   //Error
 myType = { id: 2, name: "Tom"}

//  Case # 2


interface Ball {
    diameter: number;
    abc?: string // ? Optional
}

interface Sphere {
    diameter: number;
}

let ball1: Ball = { diameter: 10, abc: "xyz"}
let sphere1: Sphere = { diameter: 20};

sphere1 = ball1;
ball1 = sphere1;



