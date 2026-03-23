//Q1
const product=["laptop","phone","mouse","keyboard"];
const [p1,p2,p3,p4]= product;
console.log(p4);

const product1 ={itemName:"laptop",price:20000};
const {itemName,price}=product1;
console.log(itemName);


//Q2
class products{
    constructor(name,pid,price){
        this.name=name;
        this.pid=pid;
        this.price=price;
    }

    displayDetails(){
        console.log(this.name+" "+this.pid+" "+this.price);
        
    }
}
const p=new products("Smartwatch",1,1500);
p.displayDetails();

//Q4
function customerOrder(){
    return new Promise((resolve)=>{
        resolve({name:"monitor",price:2000,availability:"In stock"},1000);
    })
}
async function fetchOrder() {
    try {
        let data=await customerOrder(false)
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
fetchOrder()
