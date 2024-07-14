type User = {
    name  : string;
    email : string;
    age   : number;
};

function CreateUser(user : User) : User {
    return {
        name  : "Shardendu Mishra", 
        email : "shardendumishra@gmail.com", 
        age   : 20
    };
}

let AllUser : User[] = [];

AllUser.push({
    name  : "Shardendu Mishra", 
    email : "shardendumishra@gmail.com", 
    age   : 20,
    
})

export {};