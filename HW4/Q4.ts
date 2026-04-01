abstract class Person{

    abstract getDetails():void
    abstract getRole():void
}
class Student1 extends Person{
    name:string;
    id:number;
    role:string;

    constructor(name:string,id:number,role:string){
        super()
        this.id=id;
        this.name=name;
        this.role=role;

    }

    getDetails(): void {
        console.log(this.id+" "+this.name);
        
    }
    getRole(): void {
        console.log(this.role);
    }

}
class Teacher extends Person {
    name:string;
    id:number;
    role:string

    constructor(name:string,id:number,role:string){
        super()
        this.id=id;
        this.name=name;
        this.role=role;
    }

    getDetails(): void {
        console.log(this.id+" "+this.name);
    }
    getRole(): void {
        console.log(this.role);
    }
     
}

const stud = new Student1("tom",1,"Student")
stud.getDetails()
stud.getRole()
const t=new Teacher("will",2,"Teacher")
t.getDetails()
t.getRole()

