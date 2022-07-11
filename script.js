  
var startBtn = document.querySelector("#startbtn"); //start button
var timerElement = document.querySelector("#timer"); //timer content
var answerSelect = document.querySelector(".buttonbox"); //all answer buttons - click event
var questionContent = document.querySelector("#questioncontent");//p tag - should display the actual question
var scoreList = document.querySelector(".highscoreList");
var highscoreBox = document.querySelector(".highscores")
var highscoreBtn = document.querySelector("#HSbutton");

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

function endOfGame(){ //invoked when time runs out or last question answered. creates form with input to submit highscore.
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

    highscoreForm.addEventListener("submit", function(event) { //this function is borrowed from activity 26 in module 4
        event.preventDefault();
      
        var scoreText = highscoreInput.value.trim();

        if (scoreText === "") {
            return;
          }

        scores.push(scoreText + ": " + timeLeft);
        highscoreInput.value = "";
        storeScores();
        showScores();
        location.reload();
    });
}

function showScores() {

    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
  
      var scoreLi = document.createElement("li");
      scoreLi.textContent = score;
      scoreLi.setAttribute("data-index", i);
  
      scoreList.appendChild(scoreLi);
    }
}

function openPage() { 
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    showScores();
  }

  //adds score to local storage scores array
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}


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

openPage();

//Mouseenter/mouseleave function to show/hide highscores
highscoreBtn.addEventListener("mouseover", function() {
 highscoreBox.style.display = "block";
 highscoreBtn.addEventListener("mouseleave", function(){
     highscoreBox.style.display = "none";
 })
});