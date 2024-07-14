function PrntAll(strs : string | string[] | null){
    if(strs){
        if(typeof(strs) === "string"){
            console.log("The value returned is a string");
        }else if(typeof(strs) === "object"){
            console.log("The value returned is a string array");
        }
    }else{
        console.log("NULL value was returned !!");
    }
}