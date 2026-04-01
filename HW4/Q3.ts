class Course{
    courseName:string;
    courseCode:number;
    instructor:string;

    constructor(courseName:string,courseCode:number,instructor:string){
        this.courseName=courseName;
        this.courseCode=courseCode;
        this.instructor=instructor;
    }
    displayCourse(){
        return this.courseName+" "+this.courseCode+" "+this.instructor;
    }
}
const c=new Course("Java",1,"yogi")
console.log(c.displayCourse());
