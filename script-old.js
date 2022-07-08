//PSEUDO CODE
//create start button that init timer funct and quiz questions funct
//quiz question answer input must generate into next question
//incorrect answer = -time
//timer=0 or all questions answered --> game is over
//input for initials and final score shown. can be saved.

//Credits: got some of my iteration ideas from hamdan on stackoverflow


    
var startBtn = document.querySelector("#startbtn"); //start button
var timerElement = document.querySelector("#timer"); //timer content
// var quizBox = document.querySelector("#quizBox");
var answerSelect = document.querySelector(".buttonbox"); //all answer buttons - click event
// var answerOne = document.querySelector(".answer1");//indiv answer buttons
// var answerTwo = document.querySelector(".answer2");//indiv answer buttons
// var answerThree = document.querySelector(".answer3");//indiv answer buttons
// var answerFour = document.querySelector(".answer4");//indiv answer buttons
var questionContent = document.querySelector("#questioncontent");//p tag - should display the actual question
// var gameOver = document.querySelector("#gameover");
// var resetBtn = document.querySelector()
var timer;
var timeLeft = 60;
var currentQuestionInd = 0;

//function that will run when time runs out or all questions are answered
// function endOfQuiz () {
// } 
startBtn.addEventListener("click", function(event) { //starts timer and then timer button should be hidden
startBtn.style.display = "none";
 timer = setInterval(function() {
    if (timeLeft > 0) {
        timerElement.textContent = 'Timer:' + timeLeft;
        timeLeft--
 }  if (timeLeft === 0){
    clearInterval(timer);
  }    
 }, 1000);
 
 currentQuestion();
})

//array of questions and answer info
 var questionSequence = [
     {question: 'What does HTML stand for?',
        options:["Hyper Tube Markup Language", 
        "Hyper Text Markup Language",
        "Hypno-Tron Meerkat Lounge",
        "Hold That Milk Log"], 
        answer: "Hyper Text Markup Language"
 },
     {question: 'Which language is used primarily as styling for a webpage?',
     options:["Hyper Tube Markup Language", 
     "Hyper Text Markup Language",
     "Hypno-Tron Meerkat Lounge",
     "Hold That Milk Log"], 
     answer:"Hold That Milk Log"
 },
     {question: 'Which of the following would be considered an \'array method\'?',
     options:["Hyper Tube Markup Language", 
     "Hyper Text Markup Language",
     "Hypno-Tron Meerkat Lounge",
     "Hold That Milk Log"], 
     answer:"Hold That Milk Log"
 },
     {question: 'questionQuestion 4',
     options:["Hyper Tube Markup Language", 
     "Hyper Text Markup Language",
     "4c",
     "test"], 
     answer:"Hold That Milk Log"
 },
     {question: 'questions the fifth one',
     options:["Hyper Tube Markup Language", 
     "Hyper Text Markup Language",
     "Hypno-Tron Meerkat Lounge",
     "Hold That Milk Log"], 
     answer:"Hold That Milk Log"
 }
]

//runs when start button is clicked and timer is set
//this function will get an array index from var questions to be put into currentQuestion
function clickQuestion() {
    //check if its wrong
    if (this.value !== questionSequence[currentQuestionInd].answer) {
    timeLeft -= 5
    console.log("you got it wrong")
    }
    currentQuestionInd++
    if (currentQuestionInd === questionSequence.length){
        alert("You've run out of questions")  //this will actually be a end of game function.
    } else {
        currentQuestion();
    }
}

// answerSelect.onclick = clickQuestion

//invoke by start btn. should display question and answer
function currentQuestion(){
    var currentQuestion = questionSequence[currentQuestionInd];
    questionContent.textContent = currentQuestion.question;
    answerSelect.innerHTML = "";
    // let i = 0;
    // document.getElementById("questioncontent").innerHTML = questionSequence[currentQuestionInd].question; //get/display question content current index
    // document.getElementById("answer1").innerHTML = questionSequence[currentQuestionInd].answerOne;
    // document.getElementById("answer2").innerHTML = questionSequence[currentQuestionInd].answerTwo;
    // document.getElementById("answer3").innerHTML = questionSequence[currentQuestionInd].answerThree;
    // document.getElementById("answer4").innerHTML = questionSequence[currentQuestionInd].answerFour;
    currentQuestion.options.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice")
        choiceNode.setAttribute("value", choice);
        choiceNode.textContent = i + 1 + "." + choice;
        choiceNode.onclick = clickQuestion;
        answerSelect.appendChild(choiceNode)
        
    });

    //currently only working for first button 
    // answerSelect.onclick = clickQuestion
    console.log(answerSelect);
        
        // if ()
        // document.getElementById("questioncontent").innerHTML = questionSequence[currentQuestionInd].question; //displays question/answer content of next index
        // document.getElementById("answer1").innerHTML = questionSequence[currentQuestionInd].answerOne;
        // document.getElementById("answer2").innerHTML = questionSequence[currentQuestionInd].answerTwo;
        // document.getElementById("answer3").innerHTML = questionSequence[currentQuestionInd].answerThree;
        // document.getElementById("answer4").innerHTML = questionSequence[currentQuestionInd].answerFour;
    //need something for when i > questions.length
}

// function selectAnswer(event) {
//     answerSelect.addEventListener("click",()=> {
//         i++
    
//     });
// }





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
