// set array of questions for the quiz
let questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];


// set variables for the elements on the page
let startBtn = document.querySelector("#start-quiz");
let timeEl = document.querySelector("#time-count");
let quizContentEl = document.querySelector("#quiz-question");
// start button click to call the startQuiz function
startBtn.addEventListener('click',startQuiz);

// set variables for the questions lenght and choices in the array
let questionNumber = 0; // set current question
let score = 0; // set current score
let penalty = 10; // set penalty of 10 seconds for a wrong answer
let numberOfQuestions = questions.length;
// let questionTitle = questions[questionNumber].title;
// let questionChoices = questions[questionNumber].choices;
let listUl = document.createElement("ul");
let scoreScreen = document.querySelector("#score-section");
let finalScore = document.querySelector("#final-count");
// let initialsEl = document.querySelector("#initials");
let submitbtn = document.querySelector("#submit-button");
scoreScreen.setAttribute("style", "display: none;");


// TO DO let highScores = [];

// create the function to start the quiz
function startQuiz() {
    // first clear the existing data on the quiz section
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";
    // scoreScreen.setAttribute("style", "display: none;");
    // call countdown function to start the clock
    timeCount();
    // call the listQuestion function to display the questions and answer choices to the page
    showQuestions(questionNumber);
}

//quiz time is 15 seconds each for each question
let quizTime = numberOfQuestions * 15;

function timeCount() {
    let timerInterval = setInterval(function() {
        // displays the time and decreases by second
        timeEl.textContent = "Time: " + quizTime;
        finalScore.textContent = "Final Score is: " + quizTime;
        quizTime--;

        // end the quiz when the timer hits zero
        if (quizTime <= 0) {
            clearInterval(timerInterval);
            //quizTime needs to go back to the questions times seconds
            // timeEl.textContent = "0"; // set the time text content back to 0
            quizEnd(); // call the quiz end function
        }
        // stop the clock if user finishs all questions
        else if (questionNumber == 5) {
            clearInterval(timerInterval);
            // reset 
            questionNumber = 0;
            quizTime = numberOfQuestions * 15;
        }
    }, 1000);
}

function showQuestions(questionNumber) {
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";
    let questionTitle = questions[questionNumber].title;
    let questionChoices = questions[questionNumber].choices;
    // display questions and choices to the page
    // create a for loop to loop through the questions array
    for (let i =0; i < numberOfQuestions; i++) {
    // append question title to the html page
    quizContentEl.textContent = questionTitle;
    console.log(questionTitle);
    }     
// for each question, create a list and append the choices to the list
    questionChoices.forEach(function (x) {
        let listItem = document.createElement("li")
        listItem.textContent = x;
        console.log(x);
        quizContentEl.appendChild(listUl);
        listUl.appendChild(listItem);
// add event to the choice selection and call a compare function 
// if user selection matches the answer in the question array
        listItem.addEventListener('click',(compare));
    })

    // TO DO Need to clear out the previous question
    // TO DO move to the next question
}

// add function event to compare selected choice with answer
// when a selected choice matches with the answer, increase the score
function compare(event) {
    let itemSelect = event.target;
    if (itemSelect.matches("li")) {
        // console.log(itemSelect.textContent);
        let feedBack = document.createElement("div");
        feedBack.textContent="";
        feedBack.setAttribute("id", "feedBack");
        if (itemSelect.textContent === questions[questionNumber].answer) {
            score++;
            feedBack.textContent = "Correct!";
        } else {
            feedBack.textContent = "Wrong!";
            // then take off 10 seconds for wrong answer
            quizTime = quizTime - penalty;
        // }
    }
    // increase question number for the next question
    questionNumber++;

    if (questionNumber >= numberOfQuestions) {
        // all the end quiz function to display the score screen
        feedBack.textContent = "TEST end of all questions"
        feedBack.textContent = "Quiz done!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
        //finalScore = quizTime;
        quizEnd();
    } else {
        showQuestions(questionNumber);
    }
    quizContentEl.appendChild(feedBack);
}
}


// create a quiz end function
// first is to clear out the questions and multiple choice list
// TO DO calculate the remaining time, displays as the final score
// TO DO Submit is a listen event to call a Submit function


function quizEnd() {
    quizContentEl.innerHTML ="";
    listUl.innerHTML ="";

    if (quizTime >= 0) {
     //   finalScore = quizTime;
        scoreScreen.setAttribute("style", "display: block;");
    }
    
    submitbtn.addEventListener("click", function () {
       //  let initialsEl1 = document.querySelector("#initials");
        let initialsEl = document.getElementById("initials").value;
        alert("selecquery: " + document.querySelector("#finalScore") + " getelement: " + document.getElementById("finalScore"));
        //debugger;
        if (initialsEl === null) {
            alert("please enter your initial ");
        } else {
            var finalScore = {
                initials: initialsEl,
                score: quizTime
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSON.stringify(allScores);
            localStorage.setItem("allScores", newScore);
            // Travels to final page
            window.location.replace("./HighScores.html");
        }
    });



    // timeEl.textContent = "0";
    //display the score content
    // scoreScreen.setAttribute("style", "display: block;");

}


// TO DO, need to capture the high score and initial to a local storage
// TO DO Sorting, highest score first



// For every question, when user selects an answer, 
// call the compare the function. 
// if answer is right, display text Correct
// if answer is wrong, display text Wrong, subtract 10 seconds 

// When all questions are answered:
// display the final score
// display the initials box
// display the Submit button
// display the text: End quiz

// TO DO need to set attribute below the 
// function showQuestions(questionNumber) to style the quizContentEl, 
// for example from the Module below:

//var createTaskEl = function(taskDataObj) {
    // var listItemEl = document.createElement("li");
    // listItemEl.className = "task-item";
    // listItemEl.setAttribute("data-task-id", taskIdCounter);
  
    // var taskInfoEl = document.createElement("div");
    // taskInfoEl.className = "task-info";
    // taskInfoEl.innerHTML =
    //   "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    // listItemEl.appendChild(taskInfoEl);
  
    // var taskActionsEl = createTaskActions(taskIdCounter);
    // listItemEl.appendChild(taskActionsEl);
  
    // switch (taskDataObj.status) {
    //   case "to do":
    //     taskActionsEl.querySelector("select[name='status-change']").selectedIndex = 0;
    //     tasksToDoEl.append(listItemEl);
    //     break;
