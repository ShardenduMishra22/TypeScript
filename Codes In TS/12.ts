function GetById(id : number | string){
    if(typeof(id) === "number"){
        return id + 100;
    }else if(typeof(id) === "string"){
        return id.toLowerCase();
    }
}

console.log(GetById("Shardendu Mishra"));