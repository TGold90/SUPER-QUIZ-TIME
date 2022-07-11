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
var decrement = document.querySelector("#decrement");
var questionContent = document.querySelector("#questioncontent");//p tag - should display the actual question
var scoreList = document.querySelector(".highscoreList");
var highscoreBox = document.querySelector(".highscores")
var highscoreBtn = document.querySelector("#HSbutton");

// var resetBtn = document.querySelector()
var timer;
var timeLeft = 45;
var currentQuestionInd = 0;

var scores = [];


startBtn.addEventListener("click", function() { //starts timer and then timer button should be hidden
startBtn.style.display = "none";
 timer = setInterval(function() {
    if (timeLeft > 0) {
        timerElement.textContent = 'Timer:' + timeLeft;
        timeLeft--
 }  else if (timeLeft === 0){
     timeLeft = 0;
     timerElement.textContent = 'GAME OVER';
    clearInterval(timer);
    endOfGame();
    //run end of game function
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
    timeLeft -= 7;
    timerElement.textContent = "Timer:" + timeLeft + "    -7 seconds!"
    // timerElement.textContent = timeLeft + "-666";
    }
    currentQuestionInd++
    if (currentQuestionInd === questionSequence.length){
        //this will actually be a end of game function.
        clearInterval(timer);
        endOfGame();
        timerElement.textContent = 'GAME OVER';
    } else {
        currentQuestion();
    }
}

function endOfGame(){
    answerSelect.innerHTML = "Score: " + timeLeft;
    questionContent.textContent = "You've Reached the end of the game!";
    var highscoreForm = document.createElement("form");
    var highscoreInput = document.createElement("input");
    var inputLabel = document.createElement("label");
    highscoreForm.setAttribute("class", "scoreForm");
    highscoreInput.setAttribute("class", "scoreinput");
    inputLabel.textContent = "Enter Initials: ";
    answerSelect.appendChild(highscoreForm);
    highscoreForm.appendChild(inputLabel);
    highscoreForm.appendChild(highscoreInput);

    highscoreForm.addEventListener("submit", function(event) { //this function is basically borrowed exactly from activity 26 in module 4
        event.preventDefault();
      
        var scoreText = highscoreInput.value.trim();

        if (scoreText === "") {
            return;
          }

        scores.push(scoreText + ": " + timeLeft);
        highscoreInput.value = "";
        //here there should be a function to save to local storage
        //then reset webpage
        //at webpage init the scores will be grabbed from local storage
        // highscoreInput.value = "";
        
          // Store updated todos in localStorage, re-render the list
        storeScores();
        showScores();
    });
}

function showScores() {
    // Clear todoList element and update todoCountSpan
    scoreList.innerHTML = "";
  
    // Render a new li for each todo
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
  
      var scoreLi = document.createElement("li");
      scoreLi.textContent = score;
      scoreLi.setAttribute("data-index", i);
  
      scoreList.appendChild(scoreLi);
    }
}

function openPage() { 
    // Get stored todos from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    // This is a helper function that will render todos to the DOM
    showScores();
  }

function storeScores() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("scores", JSON.stringify(scores));
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
        answerSelect.appendChild(choiceNode);
        
    });

    // answerSelect.onclick = clickQuestion
    console.log(answerSelect);
}

function getScores(){

};

openPage();

highscoreBtn.addEventListener("mouseover", function() {
 highscoreBox.style.display = "block";
 highscoreBtn.addEventListener("mouseleave", function(){
     highscoreBox.style.display = "none";
 })
});