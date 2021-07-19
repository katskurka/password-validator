# Password Validator

## Instructions
In the initial commit to this project, you have been provided with a basic project setup as well as a set of tests which currently fail. 

Your task is to create a `validatePassword` function which will return true when the password given meets all the listed requirements listed below.

Working in a branch called `answer`, implement your function to get your tests to pass. Once you are done, push your branch up to GitHub, create a pull request, and request review from the instructor.

## Password Rules
* Must be a minimum of 8 characters
* Must contain at least one lower case letter
* Must contain at least one upper case letter
* Must contain at least one numeric value
* Must contain at least one special character
## Question Answers
* **Identify the component of this assignment you did the best on, and why:** Digging into different approaches to solve the assignment, I learned a lot of different JavaScript methods/functions and their advantages and constraints during this assignment
* **Describe in plain English what problem this assignment was posing, and what your solution to it was:** I was initially having an issue getting the uppercase and lowercase validations to pass. I realized the method I was using was not differentiating between numbers/special characters and letters, so I found a new approach to solving the issue (using includes and defining variables of uppercase and lowercase letters).
* **What was your approach or process:** I broke the requirements down and wrote a function for each requirement (ie, having at least one uppcase letter, etc). Once I had a set of working functions to pass all the tests, I refactored the code into a single function using a series of if statements, which was much cleaner and more readable than my initial code.
* **What were your challenges:** Refactoring the code to be cleaner and more concise. I initially tried to use a switch statement and then realized it was not an ideal approach to the problem so I changed it to be a series of if statements.
* **What resources did you use:** Stackoverflow, MDN guides, JavaScript: the Definitive Guide
* **What does the repo project do and what is the impact it has:** This repo contains a set of tests and a function to validate a password with certain requirements.
* **Technologies used in project:** JavaScript, TDD, ESLint, Mocha, Chai
* **Main Author:** Kat Skurka
* **Credits:** Karandeep for pointing me in the right direction to solve an initial problem I was having.
