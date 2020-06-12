// This is a SPA - single page application
// when I click the start button 
    // the counter should start at 5 and begin to count down by 1 second
    // the first question should replace the current h1 heading and I need the answer buttons to appear in the div container.

const startButton = document.querySelector("#startQuiz");
const counterEl = document.querySelector("#counter");
const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');
const questionTitle = document.querySelector('#card-title');
const answerContainer = document.querySelector("#answers-container")

let totalSeconds = Number(minutesDisplay.textContent) * 60;
console.log(totalSeconds);

let secondsElapsed = 0;
let interval = 0;
let currentQuestion = 0;

let questions = [
    {   questionHeading: "Arrays in JavaScript are used to store .....?", 
        answers: ["Java", "Coffee", "numbers and strings", "booleans"], 
        correctAnswer: "numbers and strings"
    },
    {   questionHeading: "Inside which HTML element do we put the JavaScript?",     
        answers: ["<javascript>", "<scripting>", "<js>", "<script>"], 
        correctAnswer: "<script>",
    }
]

function renderQuestion(questionIndex) {
    let question = questions[questionIndex]
    questionTitle.textContent = question.questionHeading;

    // grab all selectios from question

    let selections = question.answers;

    for (let index = 0; index < selections.length; index++) {
        const selection = selections[index];
         // create a btn for each selection
        const btn = document.createElement("button")
         // class name
        btn.setAttribute("class", "answerBtns")
        btn.textContent = selection
        // append these btns to the 'answerBtns' element
        answerContainer.appendChild(btn);
        
    }
}


startButton.addEventListener("click", startGame)

function startGame() {
    // counter reduces by seconds
    let interval = setInterval(function() {
    
        totalSeconds = totalSeconds - 1;
        secondsElapsed = secondsElapsed +1;
        renderTimerDisplay();
      }, 1000);

    startButton.setAttribute("class", "d-none");
    renderQuestion(0);
    // questionTitle.textContent = questions[0].questionHeading;
}

document.getElementById("test").addEventListener("click", function(event){
    currentQuestion++;
    renderQuestion(currentQuestion);
})

function renderTimerDisplay() {
    let seconds = Number(totalSeconds) % 60;
    let minutes = parseInt(Number(totalSeconds) / 60);
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
  }

// when I answer a question I am notified if the answer is correct or incorrect


    // if incorrect time is subtracted from the counter


    // regardless of correct or incorrect I am taken to another question 
            // the next question will appear or replace h1 heading only after a delay to notifiy correct or incorrect status

// game ends when
    // all questions have been answered
    // or the timer runs out because of incorrect answers

// final screen will display the score and allow me to input my name and save that with my score.
    // the scores will be stored in local storage and be connected to the link in the header. This link will only display the top 3 high scores.



// misc function not essential to the assignment
//these lines of code play sound when mouse hovers over "sound" in the explanation screen screen
function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}
    
function StopSound(soundobj) {
     var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}


// create questions

// let questions = [
// new Question("Arrays in JavaScript are used to store .....?", ["Java", "Coffee", "numbers and strings", "booleans"], "numbers and strings"),
// new Question("Inside which HTML element do we put the JavaScript?", ["<javascript>", "<scripting>", "<js>", "<script>"], "<script>"),
// new Question("Commonly used data types DO NOT include:", ["strings", "booleans", "alerts", "numbers"], "alerts")
// new Question("Which language is used most for web apps?", ["PHP", "Python", "Javascript", "All"], "JavaScript"),
// new Question("How do you create a function in JavaScript?", ["function:myFunction()", "function myFunction()", "Javascriptfunction() function", "function = myFunction()", "function myFunction()"], "JavaScript"),
//];