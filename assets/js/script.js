var timerEl = document.querySelector('#countdown');
var startQuizEl = document.querySelector('#start-quiz')
var listItemEl = document.querySelector('.answer')

var preQuiz = document.querySelector('.pre-quiz')
var questions = document.querySelector('.questions')

var timeLeft = 60;

function setTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time remaining: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            timerEl.innerHTML = "Time is up!"
        }
    }, 1000);

    displayQuestions()
};

document.getElementById("start-quiz").addEventListener("click", setTimer);

function displayQuestions() {
    preQuiz.style.display = "none";
    questions.style.display = "block";

    incrementQuestions()
}

function incrementQuestions() {

}
// startQuizEl.addEventListener("click", function(event) {
//     timeLeft = 60;

//     var downloadTimer = setInterval(function () {
//         document.getElementById("#countdown").innerHTML = timeLeft + " "+"seconds remaining";

//         timeLeft -= 1;
//         if(timeLeft <= 0) {
//             clearInterval(downloadTimer);
//             document.getElementById("#countdown").innerHTML = "Time is up"
//         }
//     }, 1000);
//     console.log(countdown);
// });

//console.log(countdown)

// function countdown() {
//     var timeLeft = 60;
// }

//countdown ()


//every second, decrement by 1
//if time left === 0, then end quiz


//create variable to hold question #
//based on variable, display question
//click listener on all answers and will determine correctness based on data attribute
//if answer is wrong, decrement time by 10