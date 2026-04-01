class Student{
    name:string;
    studentId:number;
    grade:string;
    address:string;

    constructor(name:string,studentId:number,grade:string,address:string){
        this.name=name;
        this.studentId=studentId;
        this.grade=grade;
        this.address=address;
    }

    displayInfo(){
        return this.name+" "+this.studentId+" "+this.grade+" "+this.address;
    }
}

class School{
    static totalStudent:number=0;
    studentList:Student[] = []
    
    addStudent(s:Student):void{
        School.totalStudent++
        this.studentList.push(s)
    }
    removeStudent(id:number):void{
        School.totalStudent--;
        this.studentList=this.studentList.filter((r) => r.studentId!=id)
    }
    showStudent(){
        console.log(this.studentList);
    }
}
const std1=new Student("tom",1,"A","borivali");
const std2=new Student("jerry",2,"B","Mumbai");
const std3=new Student("will",3,"C","dadar");

const s=new School();

s.addStudent(std1)
s.addStudent(std2)
s.addStudent(std3)

s.removeStudent(3)
s.showStudent()
