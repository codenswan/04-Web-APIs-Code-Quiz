# 04-Web-APIs-Code-Quiz

The User Story is as follows
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers

Acceptance Criteria
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock - 10 seconds
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score

Functionality
I designed this as a SPA and used the "hidden" attribute to make the different bootstrap cards when needed. The following screenshots demonstrate this.

Main page to start quiz:
![](Assets/Screen%20Shot%202020-06-16%20at%209.49.20%20pm.png)

Question and answer container:
![](Assets/Screen%20Shot%202020-06-16%20at%209.49.30%20pm.png)

Results form:
![](Assets/Screen%20Shot%202020-06-16%20at%209.59.55%20pm.png)

Highscores localStorage card:
![](Assets/Screen%20Shot%202020-06-16%20at%209.49.38%20pm.png)

Problems and issues
I struggled to get all the different cards interacting with each other right way. There are a lot of setAttribute and removeAttribute funcitons in the code. 
I also would have liked to improve the design with CSS 
I would have preferred the localStorage items disapper from the card when the clear storage function is activated without needing to refresh the page. I played around with removing the <li> elements but couldn't get it to work.

