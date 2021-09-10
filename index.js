const readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.blue.bgWhite.bold("Welcome to the QUIZ! Let's see how well do you know Nikhil!"));
console.log();
let score=0;
const userName = readlineSync.question(chalk.cyanBright("May i have your name? "));
console.log();
console.log(chalk.cyanBright("Hi ",userName," Let's get started!"));
console.log();
const hintString="(Enter hint to get a hint!) ";

const questionsList = [
  {
    question: "Who is my favourite musical artist? ",
    answer: "amit trivedi",
    hint:"composer of Udaan, DevD, Manmarziyan "
  },
  {
    question: "Which instrument i can play? ",
    answer: "ukulele",
    hint:"It's a string instrument "
  },
  {
    question: "What's my favourite book? ",
    answer: "kite runner",
    hint:"Fictional genre, based on a boy in Afganistan "
  },
  {
    question: "In which university i am? ",
    answer: "Gautam Buddha University",
    hint:"It's is greater noida, and the name has founder of Buddhism "
  },
  {
    question: "Whom do i look upto ",
    answer: "tanay pratap",
    hint:"He's a software developer at Microsoft, \"founder of bhule bhatke bacho ka career banao yojna\" aka NeoG camp and roc8 "
  }, 
]

function quiz(question, answer, hint){
  let userAnswer = readlineSync.question(chalk.cyanBright(question.toUpperCase())+hintString).trim();
  if(userAnswer.toLowerCase()=="hint"){
    userAnswer = readlineSync.question(chalk.magenta(hint.toUpperCase()));
  }
  if(userAnswer.toLowerCase()==answer.toLowerCase().trim()){
    console.log(chalk.yellowBright("That's Correct"));
    score=score+1;
  }
  else{
    console.log(chalk.redBright("That's Wrong!"));
    console.log(chalk.yellow("Correct answer is ",answer.toLowerCase().trim()));
  }
  console.log(chalk.greenBright("Current Score: "),score);
  console.log("----------------------");
  console.log();
}


questionsList.map(questionElement => quiz(questionElement.question, questionElement.answer, questionElement.hint));

const highScores = [
  {
    name:"Sanya ",
    score:"5"
  },
  {
    name:"Ayushman ",
    score:"4"
  }
];

console.log(chalk.blue.bgGreen.underline.bold("YOU SCORED: "+score+" (Max-5)"));
console.log();
console.log(chalk.cyanBright("HIGH SCORES ARE :-"));
highScores.map(highScore => console.log(chalk.magentaBright(highScore.name.toUpperCase(), highScore.score)));
console.log(chalk.yellowBright("If you've scored more than current High Score, contact me i'll update it "));

