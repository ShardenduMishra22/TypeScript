class User{
    private _CourseCount = 1;
    protected _CourseCount2 = 1;
    email : string;
    name : string;
    readonly city : string = "Kanpur";
    constructor(email : string,name : string){
        this.email = email;
        this.name = name;
    }
    
    private DeleteToken(){
        console.log("Token Deleted !!");
    }
    
    get AppleEmail() : string{
        return `aaple@${this.email}`;
    }

    get CourseCount() : number{
        return this._CourseCount;
    }

    set CourseCount(CourseNum){
        if(CourseNum <= 1){
            throw new Error("Course count should be more than 1");
        }
        this._CourseCount = CourseNum;
    }
}

class SubUser extends User{
    isPaid : boolean = true;
    // ChangeCourseCount(){
    //     this._CourseCount = 4;
    // }
    // since its a public class 
    // it can't be accessed in its subclasses 

    // protected can be accessed in both parents and child
    ChangeCourseCount2(){
        this._CourseCount2 = 4;
    }
}
