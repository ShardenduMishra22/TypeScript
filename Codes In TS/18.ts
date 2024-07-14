class User55 {
    email: string;
    private name: string;
    readonly city: string;

    constructor(email: string, name: string, city: string = "Jaipur") {
        this.email = email;
        this.name = name;
        this.city = city;
    }

    getName(): string {
        return this.name;
    }

    setName(NewName: string): void {
        this.name = NewName; 
    }
}

let u1 = new User55('shardendumishra01@gmail.com', 'Shardendu Mishra');
console.log(u1);
console.log(u1.getName());

u1.setName('Shardendu');
console.log(u1.getName());

let u2 = new User55('shardendumishra01@gmail.com', 'Shardendu Mishra', 'Kanpur');
console.log(u2);
console.log(u2.city);