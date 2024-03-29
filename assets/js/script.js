var timerEl = document.querySelector('#countdown');
var startQuizEl = document.querySelector('#start-quiz');
var listItemEl = document.querySelector('.answer');

var preQuiz = document.querySelector('.pre-quiz');
var questions = document.getElementsByClassName('questions');
var counter = 0;

var timeLeft = 60;

var finalScoreEl = document.querySelector('#finalScore')

var highScores = JSON.parse(localStorage.getItem('finalScore')) || []

var highScoreDisplay = document.querySelector('#display-highscore')


//function put in place to allow timer to count down when start-quiz is clicked
function setTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time remaining: " + timeLeft;

        if (timeLeft === 0 || counter > 4) { 
            clearInterval(timerInterval);
            timerEl.innerHTML = "Time is up!"
            
            endQuiz()
        }
    }, 1000);

    displayQuestions()
};

//Click to start timer
document.getElementById("start-quiz").addEventListener("click", setTimer);

//function that enables question to display and calls on the question to increment
function displayQuestions() {
    preQuiz.style.display = "none";
    questions[counter].style.display = "block";

}

//function to allow questions to increment
function incrementQuestions() {
    questions[counter].style.display = "none";
    counter++

    if (counter <= 4) {
        displayQuestions()
    }
    


};

//listens for a click to check for answer accuracy and displays whether the answer is right or wrong and decrements time by 10 if wrong
document.querySelectorAll('.answer').forEach(function(item) {
    item.addEventListener("click", function(event) {
    //handle click
    if (event.currentTarget.dataset.answer === "Correct!") {
        event.currentTarget.innerHTML = event.currentTarget.dataset.answer
    } else if (event.currentTarget.dataset.answer === "Wrong!") {
        event.currentTarget.innerHTML = event.currentTarget.dataset.answer
        timeLeft = timeLeft - 10;
    }
    setTimeout(incrementQuestions, 2000)
    });
  })

//if all questions have shown, then end quiz
function endQuiz() {
    console.log("the quiz has ended")
    console.log(timeLeft)

    if (timeLeft > 0) {
        clearInterval(timeLeft)
    };

    var finalScore = timeLeft;
    document.getElementById('question5').style.display = "none"
    finalScoreEl.style.display = "block"

    document.getElementById('insertFinalScore').innerHTML = "Your final score is: " + finalScore

    document.getElementById('submit-score').addEventListener("click", function() {
        //if statement to require intials be added 
        if (!document.getElementById("initials").value) {
            return
        }
        saveScore()
        
    })

    

};

function saveScore() {
    console.log(highScores)
    var finalScore = {
        initials: document.getElementById("initials").value,
        score: timeLeft 
    }
    highScores.push(finalScore)
    console.log(highScores)

    localStorage.setItem("finalScore", JSON.stringify(highScores));

    displayScores()

}

function displayScores() {
    document.getElementById('finalScore').style.display = "none";
    document.getElementById('display-highscore').style.display = "block";
    var savedScores = localStorage.getItem("finalScore");

    savedScores = JSON.parse(savedScores);

    for (var i = 0; i < savedScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = savedScores[i].initials + " " + savedScores[i].score;
        document.getElementById("highScore").appendChild(li);
    }
}

document.getElementById("clear-highscore").addEventListener("click", removeScores);

function removeScores() {
    localStorage.clear();
}

document.getElementById("go-back").addEventListener("click", reset);

function reset() {
    highScoreDisplay.style.display = "none"
    preQuiz.style.display = "block"
}

document.getElementById('view-highscore').addEventListener("click", viewHighScore)

function viewHighScore() {
    highScoreDisplay.style.display = "block"
}