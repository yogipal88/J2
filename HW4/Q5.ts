interface Attendance{
    markAttendance(isPresent:boolean):void;
}
class Students implements Attendance{
    markAttendance(isPresent: boolean): void {
        if (isPresent) {
            console.log("Student is present...");
            
        } else {
            console.log("Absent");
            
        }
    }
}
const std=new Students()
console.log(std.markAttendance(false));
