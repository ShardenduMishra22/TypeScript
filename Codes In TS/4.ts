function AddTwoNumber(num : number){
    return num + 2;
}

// console.log(AddTwoNumber(4));
// AddTwoNumber("4"); this will give an error

function ToUpperString(name : string){
    return `Hi ${name}, how are you ?`;
}

// console.log(ToUpperString("Shardendu Mishra"));

function SignUp(name : string,tel : number,email : string){
    return (`Hi ${name} , how are you ? You're phone number is ${tel} and you're mail is : ${email}`);
}

// console.log(SignUp("Shardendu Mishra",9824448822,"shardendu@mishra.com"));



export {};