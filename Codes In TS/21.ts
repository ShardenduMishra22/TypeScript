function IdntyOne<t>(name : t) : t{
    return name;
}

let user_1 : string = "Shardendu Mishra";

console.log(IdntyOne(user_1));


// we can even mix them with interface or self made data types //

type Name1 = {
    fName : string;
    lName : string;
};

interface Name2 {
    f_name : string;
    l_name : string;
}

function NameTeller<t>(val : t) : t{
    return val;
}

let a1 : Name1 = {
    fName : "Sm",
    lName : "Ms",
}

let Sm = NameTeller(a1);
console.log(Sm);

let a2 : Name2 = {
    f_name : "Sm1",
    l_name : "Ms1",
}

let Ms = NameTeller(a2);
console.log(Ms);