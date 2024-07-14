interface Square {
    kind: "square";
    side: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    breadth: number;  
}

interface Triangel {
    kind: "triangel";
    height: number;
    breadth: number;  
}

type Shape = Square | Circle | Rectangle // | Triangel;

function GetShape(shape: Shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * (shape.radius) ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.breadth;

        // This Will give an error if triangel is included 
        // default:
        //     const _DefShape : never = shape;
        //     return _DefShape;
    }
}


const myCircle    : Circle    = { kind: "circle"   , radius : 5 };
const mySquare    : Square    = { kind: "square"   , side   : 4 };
const myRectangle : Rectangle = { kind: "rectangle", length : 6 , breadth: 3 };

console.log(GetShape(myCircle));    
console.log(GetShape(mySquare));    
console.log(GetShape(myRectangle)); 
