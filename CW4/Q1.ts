class Emp{
    name:string;
    id:number
    salary:number
    address:string

    constructor(name:string,id:number,salary:number,address:string){
        this.name=name
        this.id=id
        this.salary=salary
        this.address=address
    }

    displayInfo(){
        return this.name+" "+this.id+" "+this.salary+" "+this.address;
    }
}
const e=new Emp("tom",1,10000,"Mumbai")
console.log(e.displayInfo());
