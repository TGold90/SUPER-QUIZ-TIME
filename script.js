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
var answerSelect = document.querySelector("answerbtn")
// var resetBtn = document.querySelector()

var timeLeft = 60;

startBtn.addEventListener("click", function(event) { //starts timer and then timer button should be hidden
startBtn.style.display = "none";
 setInterval(function() {
    if (timeLeft > 0) {
        timer.textContent = 'Timer:' + timeLeft;
        timeLeft--
 }  else {
    timeLeft === 0;
    timer.textContent = 'Timer: ' + timeLeft;
    clearInterval(startBtn);
  }    
 }, 1000);
 
 questionOne();
})

var questionOne = function() {
    var firstQuestion = "What does HTML stand for?";
    var firstAnswerA = "Hyper Tube Markup Language";
    var firstAnswerB = "Hyper Text Markup Language";
    var firstAnswerC = "Hypno-Tron Meerkat Lounge";
    var firstAnswerD = "Hold That Milk Log";

    document.getElementById("questioncontent").innerHTML = firstQuestion;
    document.getElementById("answer1").innerHTML = firstAnswerA;
    document.getElementById("answer2").innerHTML = firstAnswerB;
    document.getElementById("answer3").innerHTML = firstAnswerC;
    document.getElementById("answer4").innerHTML = firstAnswerD;
}

// answerSelect.addEventListener("click", function() {

// })
