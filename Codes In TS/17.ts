class User_2244 {
    email: string;
    name: string;
    readonly city: string;

    constructor(email: string, name: string, city: string = "Jaipur") {
        this.email = email;
        this.name = name;
        this.city = city;
    }
}

let ShardenduMishra_1 = new User_2244('shardendumishra01@gmail.com', 'Shardendu Mishra');
console.log(ShardenduMishra_1); 

let ShardenduMishra_2 = new User_2244('shardendumishra01@gmail.com', 'Shardendu Mishra', 'Kanpur');
console.log(ShardenduMishra_2); 
