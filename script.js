//PSEUDO CODE
//create start button that init timer funct and quiz questions funct
//quiz question answer input must generate into next question
//incorrect answer = -time
//timer=0 or all questions answered --> game is over
//input for initials and final score shown. can be saved.

//Credits: 


    
var startBtn = document.querySelector("#startbtn");
var timer = document.querySelector("#timer");
var quizBox = document.querySelector("#quizBox");
var answerSelect = document.querySelector(".answerbtn");
var gameOver = document.querySelector("#gameover");
// var resetBtn = document.querySelector()

var timeLeft = 60;

//function that will run when time runs out or all questions are answered
// function endOfQuiz () {
// } 

startBtn.addEventListener("click", function(event) { //starts timer and then timer button should be hidden
startBtn.style.display = "none";
 setInterval(function() {
    if (timeLeft > 0) {
        timer.textContent = 'Timer:' + timeLeft;
        timeLeft--
 }  else {
    timeLeft === 0;
    timer.textContent = 'Timer:' + timeLeft;
    clearInterval(startBtn);
  }    
 }, 1000);
 
 questionOne();
})

//timer function invokes first question
var questionOne = function() {
    var firstQuestion = "What does HTML stand for?";
    var firstAnswerA = false;
    var firstAnswerB = true;
    var firstAnswerC = false;
    var firstAnswerD = false;

    document.getElementById("questioncontent").innerHTML = firstQuestion;
    document.getElementById("answer1").innerHTML = "Hyper Tube Markup Language";
    document.getElementById("answer2").innerHTML = "Hyper Text Markup Language";
    document.getElementById("answer3").innerHTML = "Hypno-Tron Meerkat Lounge";
    document.getElementById("answer4").innerHTML = "Hold That Milk Log";

    answerSelect.addEventListener("click", function(event) {
        if (event.target.id==="answer2") {
             questionTwo();
          } else if (event.target.id==="answer1" || event.target.id==="answer3" || event.target.id==="answer4") {
            timeLeft--;
            document.getElementById("timer").innerHTML = 'Timer:' + timeLeft + '-1 second!'
          } else if (timeLeft === 0){
              document.getElementById("gameover")
          }
})      
}

var questionTwo = function() {
    var secondQuestion = "test";
    var secondAnswerA = false;
    var secondAnswerB = false;
    var secondAnswerC = true;
    var secondAnswerD = false;
    

    document.getElementById("questioncontent").innerHTML = firstQuestion;
    document.getElementById("answer1").innerHTML = "test";
    document.getElementById("answer2").innerHTML = "test";
    document.getElementById("answer3").innerHTML = "test";
    document.getElementById("answer4").innerHTML = "test";

    answerSelect.addEventListener("click", function() {
        if (true) {
            questionThree();
        } else {
            timeLeft--
        }
})
}
