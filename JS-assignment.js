//Q1
const student = {
    fullName:"yogi",
    Grade : "A",
    section:"B",
}
console.log("fullName:",student.fullName)
console.log("Grade:",student.Grade)

//Q2
const doubleScore = (score) =>{
    const result=score*2;
    return result;
}
console.log(doubleScore(10));

//Q3
const increaseByFive = function(score){
    return score.map(score=> score+5);
} 
console.log("scoreIncreasebyFive:",...increaseByFive([2,4,6,7]));

//Q4
function filterPassingMarks(marks) {
    const result=[];
    for (let mark of marks) {
        if (mark>=40) {
            result.push(mark);
        }
    }
    return result;
}
console.log("Passing Marks:", filterPassingMarks([15, 60, 40, 22, 95]));

//Q5
const cricketScores=[30,20,15,35,65]
const points=cricketScores.map(score=> score*10);
const scoresAbove50=cricketScores.filter(score=> score>50);
const teamTotal=cricketScores.reduce((acc,curr)=>acc+curr,0);
console.log("Points:",points,"scoresAbove50:",scoresAbove50,"teamTotal:",teamTotal);

//Q6
function findHighestScore (score){
    return Math.max(...score);
}
console.log("Highestscore:",findHighestScore([20,45,35,65]));

//Q7
const moviesList = [
    {title:"Underwater",Rating:8.0},
    {title:"Avengers",Rating:9.5},
    {title:"Harry Potter",Rating:9.0},
]
const topRatedMovies=moviesList.filter(movies => movies.Rating > 8);
console.log("topRatedMovies:",...topRatedMovies);

//Q8
const movieBudget = [
    {title:"Movie A",budget:"100"},
    {title:"Movie B",budget:"500"},
    {title:"Movie C",budget:"150"},
]
const totalProductionBudget=movieBudget.reduce((total,movies)=> total+movies.budget,0);
console.log("totalBudget:",totalProductionBudget);

//Q9
function announceWinner(playerName="Unknown player"){
    console.log(`${playerName} is the winner`);
}
announceWinner("virat kohli");

//Q10
const footballPlayers=["Messi","Neymar"];
const basketballPlayers = ["LeBron", "Curry"];
const Player=[...footballPlayers,...basketballPlayers];
console.log("Merged Player:",...Player);

//Q11
const movieTitle  ="Avengers";
const movieRating =9.5;
const movieBudgets = 250;
console.log(`The Movie ${movieTitle} has a rating of ${movieRating} and budget of $${movieBudgets} million`);

//Q14
const matchGoals = [2, 1, 3, 0];
const totalGoals = matchGoals.reduce((a, b) => a + b, 0);
console.log("Total Goals:", totalGoals);

//Q15
const bookTitles = ["Alan Wake","Five law of Library Science"];
const [book1,book2] = bookTitles;
const librarian = {librarianName:"Mrs. Smith",branch:"India"};
const {librarianName,branch} = librarian;
console.log(`Books: ${book1}, ${book2}`);
console.log(`librarian: ${librarianName}, branch: ${branch}`);


//Q16
class Book {
    title;
    author;
    price;

    constructor(title,author,price){
        this.title=title;
        this.author=author;
        this.price=price;
    }
    showDetails(){
        console.log(this.title+" "+this.author+" "+this.price);
    }
}
const b=new Book("Alan Wake","RichBurroughs",1500);
b.showDetails();

//Q17
function checkFlightSeats (status){
    return new Promise((resolve,reject)=>{
        if (status) {
            resolve("Success: Seats Available");
        } else {
            reject("Error: Seats Not Available")
        }
    })
}
checkFlightSeats(true)
.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});


//Q18
function getHotelBooking (status){
    return new Promise((resolve,reject)=>{
        if (status) {
            resolve("Success: Hotel is Booked");
        } else {
            reject("Error: Not Available")
        }
    })
}
async function bookingDetail() {
    try {
        let data = await getHotelBooking(false)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
bookingDetail()

//Q19
