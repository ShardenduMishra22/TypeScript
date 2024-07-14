type CardDate = {
    CardDate: string;
}

type CardNumber = {
    CardNumber: number;
}

type CardDetail = CardDate & CardNumber & {
    Cvv: number;
}


let Driver : CardDetail = {
    CardDate : "22nd March",
    CardNumber : 1,
    Cvv : 4201,
}

console.log(Driver);