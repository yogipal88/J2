//q1
const person={
    name:"yogi",
    age:22,
    gender:"M"
}
console.log(person);
console.log(person.age);

//q2
const square= function 
(num) {
    return num*num
}
console.log(square(4));

//q3
const multiplybyTwo=function (num){
    return num*2
}
console.log(multiplybyTwo(6));

//q5
const arr=[3,4,14,6,7]
const q=arr.map((num1)=>{
    return num1*num1
})
console.log(q);
const arr1=[2,4,8,7,5]
const sq=arr1.filter((num2)=>{
    return num2%2!=0
})
console.log(sq);
const arr2=[3,5,7,9,1]
const r=arr2.reduce((tot,arr2)=>{
    return tot=tot+arr2
})
console.log(r);

//q6
function findMax(arr){
    return Math.max(...arr)
}
console.log(findMax([2,8,9,4,6]));

//q7
const Employees=[
    {name:"yogi",Salary:12000},
    {name:"raj",Salary:10000},
    {name:"joy",Salary:8000},
    {name:"raju",Salary:1000},
];
const filterSal=Employees.filter((Employees)=>{
    return Employees.Salary<12000
})
console.log(filterSal);



