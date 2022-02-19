var timerEl = document.querySelector('#countdown');
var startQuizEl = document.querySelector('#start-quiz');
var listItemEl = document.querySelector('.answer');

var preQuiz = document.querySelector('.pre-quiz');
var questions = document.getElementsByClassName('questions');
var counter = 0;

var timeLeft = 60;

//function put in place to allow timer to count down when start-quiz is clicked
function setTimer() {
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = "Time remaining: " + timeLeft;

        if (timeLeft === 0) {
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
    displayQuestions()

};

//listens for a click to check for answer accuracy and displays whether the answer is right or wrong and decrements time by 10 if wrong
document.querySelectorAll('.answer').forEach(item => {
    item.addEventListener("click", event => {
    //handle click
        var answer = event.target;
    console.log(answer)
    if (answer.dataset.answer = "Correct!") {
        answer.innerHTML = answer.dataset.answer
    } else if (answer.dataset.answer = "Wrong!") {
        answer.innerHTML = answer.dataset.answer
        timeLeft = timeLeft - 10;
    }
    incrementQuestions()
    });
  })

//if time left === 0, then end quiz
function endQuiz() {

};

//create variable to hold question #
//based on variable, display question
//click listener on all answers and will determine correctness based on data attribute
//if answer is wrong, decrement time by 10