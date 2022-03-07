let highScore = document.querySelector("#high-score");
let clearBtn = document.querySelector("#clearBtn");
let goBack = document.querySelector("#goback");
// Event listener to clear scores 
clearBtn.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

goBack.addEventListener("click", function() {
    window.location.replace("./index.html");
}
)

// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
