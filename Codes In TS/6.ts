let a = ((name : string) : string => {
    return (`This function can only return a string and you're ${name}!!`);
});

console.log(a("Shardendu Mishra"));

let Name = ["Shardendu","Mishra","Pandit","Ji"]
Name.map((name) : void => {
    console.log(`${name} is Present !!`);
});

export {};