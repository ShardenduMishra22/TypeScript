interface UserName {
    readonly Id : number;
    name : string;
    email : (domain) => string;
    GoogleId ?: string; 
}
interface AdminName extends UserName{
    AdminNo : number;
}

let Name1 : UserName = ({
    Id : 1,
    name : "Shardendu Mishra",
    email: (domain: string) => {
        return `${domain}@gmail.com`;
    },
    GoogleId : "1st ", 
})
console.log(Name1);

let Name2 : AdminName = ({
    Id : 1,
    name : "Shardendu Mishra",
    email: (domain: string) => {
        return `${domain}@gmail.com`;
    },
    AdminNo : 23,
    GoogleId : "1st ", 
})
console.log(Name2);