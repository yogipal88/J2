interface Student{
    studentResult():void
}
abstract class studentMark {
    name:string
    constructor(name:string) {
        this.name=name
    }
    sport(){
        console.log(this.name,"is participate in Sport");
    }
}
class StudentDetail extends studentMark implements Student{
    studentResult(): void {
        console.log("Sport: ",this.name,"is participate in Running");
    }
}
const sd=new StudentDetail("Tom")
sd.sport()
sd.studentResult()