let LoginUser = ((name : string, phone : number, IsPaid : boolean = false) => {
    return IsPaid ? (`Hi ${name} , how are you ? You're number is ${phone}`) : ("You're a Paid user Welcome Back !!");
})

console.log(LoginUser("Shardendu Mishra",9887344552,true));
console.log(LoginUser("Duusre Mishra Ji",8855341155));

export {};