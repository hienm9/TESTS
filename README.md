# Challenge-04-Web-APIs-Code-Quiz

This is a timed quiz application using HTML, CSS, and JavaScript. The quiz has a set of questions, when user selects an answer it displays a feedback to tell user if the answer is correct. It then stores the final time as a high score to the list. User can view a list of high scores at the end of the quiz.

Git Repos: https://github.com/hienm9/Challenge-04-Web-APIs-Code-Quiz
Deployment: https://hienm9.github.io/Challenge-04-Web-APIs-Code-Quiz/


This challenge is created from scratch. The following are used in this quiz application:
1. Use HTML and CSS to create the basic structure and design.
2. Use JavaScript objects and functions
3. Use local Storage API to store results and input
4. Use window object to move to a different page

The index html presents user the quiz instruction, it has the link in top left to see highscore and the right for the timer.
In the Javascript file, I have the quiz data in an array of the questions with multiple choice and their answer. 
When I click on the Start Quiz button, 
  It starts the count down timer. Initial timer is 75 seconds for all of the questions.
  I then append the questions and multiple choice to the html page
  When selecting an answer, it tracks the correct answer.
When the quiz is done, I display the html section to show the final score, here 
  There is an inital box for user to enter
  There is a Submit button. When user click on the Submit button, it presents the High score list. User can clear out the scores and also go back to the quiz.

Pseudo Code 
//Click on the Start Quiz button, it
   // calls count down function to starts the count down
   // call a function to show the question

//Timer starts with 75 seconds, then counts down every second
// For every question, when user selects an answer, 
// call the compare the function. 
// if answer is right, display text Correct
// if answer is wrong, display text Wrong, then subtract 10 seconds 

// When all questions are answered:
// display the final score
// display the initials box
// display the Submit button
// display the text: End quiz    
