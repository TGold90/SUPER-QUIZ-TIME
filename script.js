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
     {question: 'Which language is used primarily as styling for the content of a webpage?',
     options:["Javscript", 
     "HTML",
     "CSS",
     "Russian"], 
     answer:"CSS"
 },
     {question: 'Which of the following is not a javascript variable data-type?',
     options:["Boolean", 
     "Number",
     "String",
     "Iterative"], 
     answer:"Iterative"
 },
     {question: 'Between which pair of characters should the code block of a functino be typed?',
     options:["( )", 
     "{ }",
     "[ ]",
     "< >"], 
     answer:"{ }"
 },
     {question: 'What is the scope of a variable that is declared within a function?',
     options:["Global", 
     "Small",
     "Tribal",
     "Local"], 
     answer:"Local"
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
}