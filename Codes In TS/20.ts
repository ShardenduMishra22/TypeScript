abstract class BaseDetail {
    CameraMode: string;
    filter: boolean;
    constructor(CameraMode: string, filter: boolean) {
        this.CameraMode = CameraMode;
        this.filter = filter;
    }
}

class Student extends BaseDetail {
    name: string;
    age: number;
    constructor(name: string, age: number, CameraMode: string, filter: boolean) {
        super(CameraMode, filter); // Call the BaseDetail constructor
        this.name = name;
        this.age = age;
    }
}

let User1: Student = new Student("Sm", 19, "Potrait", true);
