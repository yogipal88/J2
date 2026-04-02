//Q1
const fruits =["apple","banana","mango"]
const [a1,a2,a3] = fruits
console.log(a2);

const student = {name: "Tom",age: 20,course: "IT"}
const {name,age,course} = student
console.log(name);
console.log(age);

//Q2
class Emp{
    id;
    name;
    salary;

    constructor(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }

    displayInfo(){
        console.log(this.id+" "+this.name+" "+this.salary);
    }
}
const e = new Emp(1,"tom",12000)
e.displayInfo()

//Q3
function studentresult(marks) {
    return new Promise ((resolve,reject)=>{
        if (marks >= 40) {
            resolve("Student passed");
        } else {
            reject("Student failed");
        }
    })
}
studentresult(25)
.then((result) => {
    console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});
        
//Q4
function payment(status) {
    return new Promise ((resolve,reject)=>{
        if (status) {
            resolve("payment success");
        } else {
            reject("payment fail");
        }
    },2000)
}
async function test() {
    try {
        let data=await payment(false)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
test()

//Q5
function calculateTotalPrice(...prices) {
    let total=0;
    for (let price of prices) {
        total += price;
    }
    console.log("total price of product:", total);
    
}
calculateTotalPrice(10,34,56,32,65,76);

//Q6,Q8
function validage(age){
    try {
        if (age<18) {
            throw new error("Invalid age");
        } else {
            console.log("age is valid");
            
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }

    finally{
        console.log("code end..");
        
    }
}
validage(19)

//Q7
function meth(){
    console.log(i);
    
}
function meth1(){
    meth()
}
function meth2(){
    try {
        meth1();
    } catch (error) {
        console.log(error.name+":"+error.message);
        
    }
}
meth2()

//Q9,Q10
class validage extends Error{
    constructor(message){
        super(message);
        this.name="validage";
    }
}
function isvalid(age){
    if (age<18) {
        try {
            throw new validage("age is <=18")
        } catch (error) {
            console.log(error.name+ ":" +error.message);
        }
    } else {
        console.log("age is valid");
        
    }
}
isvalid(20)
