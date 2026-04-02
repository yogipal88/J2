class Department{
    static companyName:string="tech crop"
    deptName:string

    constructor(name:string){
        this.deptName=name
    }

    showDetails(){
        console.log(this.deptName+" "+Department.companyName);
        
    }
}
const hr=new Department("human resources")
hr.showDetails()