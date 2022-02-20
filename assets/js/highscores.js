// var timeLeft = 60;
// var highScore = document.querySelector("#highScore");

// function saveScore() {
//     console.log(highScores)
//     var finalScore = {
//         initials: document.getElementById("initials").value,
//         score: timeLeft 
//     }
//     highScores.push(finalScore)
//     console.log(highScores)

//     localStorage.setItem("finalScore", JSON.stringify(highScores));

// }

var displayScores = function() {
    var savedScores = localStorage.getItem("finalScore");

    savedScores = JSON.parse(savedScores);

    console.log(displayScores);

    for (var i = 0; i < savedScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = savedScores[i].initials + " " + savedScores[i].score;
        savedScores.appendChild(li);

    }
}
