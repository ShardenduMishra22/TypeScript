let SeatAllotment : "aisle" | "middle" | "window"

SeatAllotment = "aisle";
SeatAllotment = "middle";
SeatAllotment = "window";

const user : (string | number)[] = [145,"2"];

let rgb : [number,number,number] = [224,120,112];
rgb = [100,133,152];

type user = [number,string];
let NewUser : user = [120,"Shardendu Mishra"];

NewUser[0] = 400;
// NewUser.push(true); // this will give an error

