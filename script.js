const startButton = document.querySelector("#startQuiz");
const secondsDisplay = document.querySelector('#seconds');
const questionTitle = document.querySelector('#card-title');
const answerContainer = document.querySelector("#answers-container")
const explanation = document.querySelector("#explanation")
const resultDisplay = document.querySelector("#result")
const answerBtns = document.querySelector(".answerBtns")
const nextQuestion = document.querySelector("#nextQuestion")
const highScoreBtn = document.querySelector("#highScoresLink")
const questionContainer = document.querySelector("#question-container")
const gameResultContainer = document.querySelector("#game-result-container")
const resultsContainer = document.querySelector("#results-container")
const finishedBtn = document.querySelector("#finishedBtn")
const currentGameScore = document.querySelector("#game-score")
const playerInitial = document.querySelector("#player-name")
const addScoreBtn = document.querySelector("#add-score")
const scoreList = document.querySelector("#score-list")
const startAgainBtn = document.querySelector("#start-again")

var totalSeconds = Number(secondsDisplay.textContent);
var secondsElapsed = 0;
var interval = 0;
var currentQuestion = 0;
var score = 0;
var questions = [{
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

var highScores = [{
    score: currentGameScore,
    name: "test",
}]
var highScoreId = 0;

window.addEventListener('load', (event) => {
    gameResultContainer.setAttribute("hidden", true);
    resultsContainer.setAttribute("hidden", true);
});

startButton.addEventListener("click", startGame)
function startGame() {
    let interval = setInterval(function () {
        totalSeconds = totalSeconds - 1;
        secondsElapsed = secondsElapsed + 1;
        renderTimerDisplay();
        if (totalSeconds === 0) {
            questionContainer.setAttribute("hidden", true);
            gameResultContainer.removeAttribute("hidden");
            clearInterval(interval);
        } 
    }, 1000);

    startButton.setAttribute("class", "d-none");
    explanation.innerHTML = "";
    renderQuestion(0);
    nextQuestion.setAttribute("hidden", true);
}

function renderTimerDisplay() {
    let seconds = Number(totalSeconds) % 60;
    secondsDisplay.textContent = seconds;
}

function renderQuestion(questionIndex) {
    let question = questions[questionIndex]
    questionTitle.textContent = question.questionHeading;
    let answerSelections = question.answers;

    for (let index = 0; index < answerSelections.length; index++) {
        const answerChoice = answerSelections[index];
        const btn = document.createElement("button")
        btn.setAttribute("class", "answerBtns")
        btn.textContent = answerChoice
        answerContainer.appendChild(btn);

        btn.addEventListener("click", function () {
            nextQuestion.removeAttribute("hidden");
            resultDisplay.textContent = question.correctAnswer == answerChoice ? 'Correct!' : 'Wrong';
            score += question.correctAnswer == answerChoice ? 1 : 0;
            currentGameScore.textContent = score;
            clearAnswer();
            if (answerChoice === 0) {
                secondsDisplay -= 10;
                console.log(secondsDisplay)
            }
        })

        if (answerSelections[index] === [4]) {
            finishedBtn.removeAttribute("hidden")
            finishedBtn.addEventListener("click", function () {
                console.log("finished bitches")
                resultDisplay.textContent = "";
                nextQuestion.setAttribute("hidden", true);
            })
        }
    }
}

nextQuestion.addEventListener("click", function () {
    currentQuestion++;
    renderQuestion(currentQuestion);
    resultDisplay.textContent = "";
    nextQuestion.setAttribute("hidden", true);
})

function clearAnswer() {
    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild)
    }
}
highScoreBtn.addEventListener("click", function () {
    questionContainer.setAttribute("hidden", true);
    gameResultContainer.setAttribute("hidden", true);
    resultsContainer.removeAttribute("hidden");
})

startAgainBtn.addEventListener("click", function(){
    questionContainer.setAttribute("hidden", true);
    gameResultContainer.setAttribute("hidden", true);
    resultsContainer.removeAttribute("hidden");
})

addScoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let scorename = currentGameScore.value 
    console.log(scorename);
    // let line = document.createElement("li");
    // li.id = scorename.length;
    // li.textContent = initial;
    // highScores.push({scorename.scorename})
    // scoreList.append(li);
})