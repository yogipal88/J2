class Student{
    rollno:number
    name:string

    constructor(rollno:number,name:string){
        this.rollno=rollno
        this.name=name
    }
    display(){
        console.log("Student Roll no.: ",this.rollno+" "+this.name);
        
    }
}
const st=new Student(1,"Tom")
console.log(st.display());
