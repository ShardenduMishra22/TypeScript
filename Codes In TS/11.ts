let Score : number | string ;

Score = 341
Score = "2"

type User = {
    name : string;
    id : number;
}

type Admin = {
    username : string;
    id : number;
}

let Shardendu : (User | Admin) = {
    username : "Shardendu Mishra",
    id : 122,

};

Shardendu = {
    name : "Mishra Shardendu",
    id : 122,
}

