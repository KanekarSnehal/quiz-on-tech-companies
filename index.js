const chalk = require('chalk');
var readlineSync = require('readline-sync');

var score = 0;

var highScore = [ {
  name : "Snehal", 
  score : "10"
},

]

var userName = readlineSync.question(chalk.blue("What is your name? "))

var welcomeUser = ("Hello " + userName + ", welcome to the Tech companies quiz.")

console.log(chalk.yellow(welcomeUser))

console.log('----------')

var rules = ("1) There are 10 questions. \n 2) There is no negative points for wrong answer. \n 3) Answer as A or B ")

console.log(rules)
console.log('----------')

function play(question,answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right"))
    score = score + 1;
  }else
    console.log(chalk.red("Wrong"))
}

var questions = [
  {
    question : "This company acquired the mobile phone maker Motorola Mobility in 2012. \n  A) Samsung B) Google ",
    answer : "B"
  },
  {
    question : "This company was famously started out of a Silicon Valley garage by two high-school friends. \n  A) Apple B)  Google ",
    answer : "A"
  },
  {
    question : "This tech company is the maker of the popular Galaxy brand of smartphones. \n A) Samsung B) Sony  ",
    answer : "A"
  },
  {
    question : "This company’s first customer was Walt Disney Productions in 1939, which bought audio technology to make the film Fantasia. \n A) LG B) Hewlett-Packard ",
    answer : "B"
  },
  {
    question : "The first product this company produced was an electric rice cooker. \n A) Sony B) Whirlpool ",
    answer : "A"
  },
  {
    question : "The original name of this tech company was PC’s Limited. A) IBM B) Dell ",
    answer : "B"
  },
  {
    question : "This company got its start by selling books online. \n A) Toshiba B) Amazon ",
    answer : "B"
  },
  {
    question : "This company is the number one manufacturer of semiconductor computer circuits—the guts of a computer. \n A) Intel B) Adobe ",
    answer : "A"
  },
  {
    question : "Which search engine was Google nearly sold to in the 90s? \n A) Excite B) Lycos ",
    answer : "A"
  },
  {
    question : "Which company invented the hard disk drive? A) Hitachi B) Intel ",
    answer : "B"
  },
]

for (i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
  console.log("Your Score is " + score)
  console.log('----------')
}

console.log("This is the list of High scores")

for (j =0 ; j<highScore.length; j++){
  console.log(highScore[j])
}
