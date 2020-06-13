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
const explanation = document.querySelector("#explanation")
const resultDisplay = document.querySelector("#result")
const answerBtns = document.querySelector(".answerBtns")

let totalSeconds = Number(minutesDisplay.textContent) * 60;

let secondsElapsed = 0;
let interval = 0;
let currentQuestion = 0;


let questions = [{
        questionHeading: "Arrays in JavaScript are used to store .....?",
        answers: ["Java", "Coffee", "numbers and strings", "booleans"],
        correctAnswer: "numbers and strings"
    },
    {
        questionHeading: "Inside which HTML element do we put the JavaScript?",
        answers: ["<javascript>", "<scripting>", "<js>", "<script>"],
        correctAnswer: "<script>",
    },
    {
        questionHeading: "How do you write 'Hello World' in an alert box?",
        answers: ["alertBox('Hello World');", "msg('Hello World');", "msgBox('Hello World');", "alert('Hello World');"],
        correctAnswer: "alert('Hello World');"
    },
    {
        questionHeading: "How do you create a function in JavaScript?",
        answers: ["function = myFunction()", "function myFunction()", "function:myFunction", "myFunction=function()"],
        correctAnswer: "function myFunction()"
    },
    {
        questionHeading: "How does a FOR loop start?",
        answers: ["for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)"],
        correctAnswer: "for (i = 0; i <= 5; i++)"
    },
]

// function for starting game button
startButton.addEventListener("click", startGame)

function startGame() {
    // counter reduces by seconds
    let interval = setInterval(function () {

        totalSeconds = totalSeconds - 1;
        secondsElapsed = secondsElapsed + 1;
        renderTimerDisplay();
    }, 1000);

    startButton.setAttribute("class", "d-none");
    explanation.innerHTML = "";
    renderQuestion(0);
}

function renderTimerDisplay() {
    let seconds = Number(totalSeconds) % 60;
    let minutes = parseInt(Number(totalSeconds) / 60);
    minutesDisplay.textContent = minutes;
    secondsDisplay.textContent = seconds;
}

function renderQuestion(questionIndex) { 

    let question = questions[questionIndex]
    questionTitle.textContent = question.questionHeading;
    
    // grab all selections from question
    let answerSelections = question.answers;
    
    for (let index = 0; index < answerSelections.length; index++) {
        const answerChoice = answerSelections[index];
        // create a btn for each selection
        const btn = document.createElement("button")
        // class name
        btn.setAttribute("class", "answerBtns")
        btn.textContent = answerChoice
        // append these btns to the 'answerBtns' element
        answerContainer.appendChild(btn);
        
        //create click event that calls right / wrong answer
        btn.addEventListener("click", function() {
            currentQuestion++;
            renderQuestion(currentQuestion);
            resultDisplay.textContent = question.correctAnswer == answerChoice ? 'Correct!' : 'Wrong';
        })
        
    }   
    
}

function rightAnswer() {

}

function wrongAnswer() {

}

        //create click event that calls right / wrong answer
        // btn.addEventListener("click", function (event) {
        //     console.log(question.correctAnswer == answerChoice ? 'right' : 'wrong');
        //     // clearAnswer();
        // }
        // btn.addEventListener("click", function(event){
        //     console.log(question.correctAnswer == answerChoice ? 'right' : 'wrong' );
        //     currentQuestion++;
        //     renderQuestion(currentQuestion);
        //     // rightAnswer()
        // })

        // function rightAnswer()
        //     // add div to the answer-container
        //     resultDisplay = question.correctAnswer == answerChoice ? 'Correct!' : 'Wrong!'
        // wrong function
        // clear answer-container function call from both right and wrong function

        // function clearAnswer() {
        //     while (answerContainer.firstChild) {
        //         answerContainer.removeChild(answerContainer.firstChild)
        //       }
        // }

// misc function not essential to the assignment
//these lines of code play sound when mouse hovers over "sound" in the explanation screen screen
function PlaySound(soundobj) {
    var thissound = document.getElementById(soundobj);
        thissound.play();
}

function StopSound(soundobj) {
    var thissound = document.getElementById(soundobj);
        thissound.pause();
        thissound.currentTime = 0;
}