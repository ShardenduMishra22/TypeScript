type type1 = {
    name : string;
    age : number;
}

function fun1<t,u extends type1>(v1 : t,v2 : u) : object{
    return {
        v1,
        v2,
    }
}

interface Quiz {
    name : string,
    type : string,
}

interface Course{
    name : string,
    author : string,
    subject : string,
}

class Sellable<t>{
    public cart : t[] = [];
    AddToCart(product : t){
        this.cart.push(product);
    }
}
