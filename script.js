//PSEUDO CODE
//create start button that init timer funct and quiz questions funct
//quiz question answer input must generate into next question
//incorrect answer = -time
//timer=0 or all questions answered --> game is over
//input for initials and final score shown. can be saved.

//Credits: borrowed my question array idea from Web Dev Simplified youtube channel.


    
var startBtn = document.querySelector("#startbtn");
var timerElement = document.querySelector("#timer");
// var quizBox = document.querySelector("#quizBox");
var answerSelect = document.querySelector(".answerbtn");
var answerOne = document.querySelector(".answer1");
var answerTwo = document.querySelector(".answer2");
var answerThree = document.querySelector(".answer3");
var answerFour = document.querySelector(".answer4");
var questionContent = document.querySelector("#questioncontent");
// var gameOver = document.querySelector("#gameover");
// var resetBtn = document.querySelector()
var timer;
var timeLeft = 60;
var currentQuestionInd = "";

//function that will run when time runs out or all questions are answered
// function endOfQuiz () {
// } 
startBtn.addEventListener("click", function(event) { //starts timer and then timer button should be hidden
startBtn.style.display = "none";
 timer = setInterval(function() {
    if (timeLeft > 0) {
        timerElement.textContent = 'Timer:' + timeLeft;
        timeLeft--
 }  else if (timeLeft === 0){
    clearInterval(timer);
  }    
 }, 1000);
 
 currentQuestion();
})

//array of questions and answer info
 var questions = [
     {question: 'What does HTML stand for?',
        answerOne: "Hyper Tube Markup Language",
        answerTwo: "Hyper Text Markup Language",
        answerThree: "Hypno-Tron Meerkat Lounge",
        answerFour: "Hold That Milk Log",
 },
     {question: 'Which language is used primarily as styling for a webpage?',
        answerOne: "CSS",
        answerTwo: "HTML",
        answerThree: "C++",
        answerFour: "Javascript",
 },
     {question: 'Which of the following would be considered an \'array method\'?',
        answerOne: "right",
        answerTwo: "wrong",
        answerThree: "wrong",
        answerFour: "wrong",
 },
     {question: 'question',
        answerOne: "Hyper Tube Markup Language",
        answerTwo: "Hyper Text Markup Language",
        answerThree: "Hypno-Tron Meerkat Lounge",
        answerFour: "Hold That Milk Log",
 },
     {question: 'questions',
        answerOne: "Hyper Tube Markup Language",
        answerTwo: "Hyper Text Markup Language",
        answerThree: "Hypno-Tron Meerkat Lounge",
        answerFour: "Hold That Milk Log",
 }
]

//runs when start button is clicked and timer is set
//this function will get an array index from var questions to be put into currentQuestion
// function questionGen() {
//     questionContent = 
//     // currentQuestionInd = questions
//     // [Math.floor(Math.random() * questions.length)];
//     // console.log(currentQuestionInd);
// }

//invoke by start btn. should display question and answer
function currentQuestion(){
    let i=0;
    document.getElementById("questioncontent").innerHTML = questions[i].question;
    document.getElementById("answer1").innerHTML = questions[i].answerOne;
    document.getElementById("answer2").innerHTML = questions[i].answerTwo;
    document.getElementById("answer3").innerHTML = questions[i].answerThree;
    document.getElementById("answer4").innerHTML = questions[i].answerFour;

    answerSelect.addEventListener("click",()=> {
    i++

});
}

function selectAnswer(event) {

}





//timer function invokes first question
// var questionOne = function() {
//     var currentQuestion = "What does HTML stand for?";
//     var firstAnswerA = false;
//     var firstAnswerB = true;
//     var firstAnswerC = false;
//     var firstAnswerD = false;

//     document.getElementById("questioncontent").innerHTML = firstQuestion;
//     document.getElementById("answer1").innerHTML = "Hyper Tube Markup Language";
//     document.getElementById("answer2").innerHTML = "Hyper Text Markup Language";
//     document.getElementById("answer3").innerHTML = "Hypno-Tron Meerkat Lounge";
//     document.getElementById("answer4").innerHTML = "Hold That Milk Log";

//     answerSelect.addEventListener("click", function(event) {
//         // if (answerSelect = true) {
//         //     questionTwo();
//         // } else if (answerSelect = false) {
//         //     timeLeft--
//         //     console.log(timeLeft);
//         // }
        
//         if (event.target.id==="answer1" || event.target.id==="answer3" || event.target.id==="answer4") {
//             timeLeft--;
//             document.getElementById("decrement").innerHTML = '-1 second!'; //need to add functinoality to make the message disappear
//             console.log(timeLeft);
//         }  else if (timeLeft === 0){
//         } else if (event.target.id==="answer2") {
//             questionTwo();
//         } 

// })      
// }
