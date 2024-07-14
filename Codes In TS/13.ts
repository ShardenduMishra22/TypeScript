let data1 : number[] = [1,2,3,4];
let data2 : string[] = ["1","2","3","4"];
let data3 : (string | number | boolean)[] = [true,false,1,2,"3","4"]; 

let data4 : (string[] | number[]) = [1,2,3,4];
data4 = ['1','2','3','4'];

// data4 = [1,2,'3','4']; this will give an error

let pi : 3.14 = 3.14;
// pi = 3.15; cant assign 3.14 value of 3.15 

console.log(pi);

export {};