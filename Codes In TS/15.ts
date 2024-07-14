type User = {
    name : string,
    age : number,
    id ?: number,
}

let user1 : User = {
    name : "Shardendu Mishra",
    age : 20,
    id : 1,
}

let user2 : User = {
    name : "Shardendu Mishra",
    age : 20,
}

let user3 : User = {
    name : "Mishra Ji",
    age : 19,
}

console.log(user1);
console.log(user2);
console.log(user3);

export {};