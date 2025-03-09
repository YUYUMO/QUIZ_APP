/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correctAnswerNo = 0; 

// 2. Store the rank of a player
let rank = " "; 

// 3. Select the <main> HTML element
const main = document.querySelector("main");

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const correctAnswer1 = "TRUMP";
const correctAnswer2 = "UKRAINE"; 
const correctAnswer3 = "XI";
const correctAnswer4 = "MARCELO";
const correctAnswer5 = "MACRON";

let answer1 = prompt("What is the name of the current US president?").toUpperCase();
let answer2 = prompt("Which country did Russia invade in 2022?").toUpperCase();
let answer3 = prompt("What is the surname of the current China president?").toUpperCase();
let answer4 = prompt("What is the first name of the current Portugal president?").toUpperCase();
let answer5 = prompt("What is the surname of the current France president?").toUpperCase();

if(answer1 === correctAnswer1){
  correctAnswerNo += 1;
}

if(answer2 === correctAnswer2){
  correctAnswerNo += 1;
}

if(answer3 === correctAnswer3){
  correctAnswerNo += 1;
}

if(answer4 === correctAnswer4){
  correctAnswerNo += 1;
}

if(answer5 === correctAnswer5){
  correctAnswerNo += 1;
}
                     
/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if(correctAnswerNo === 5){
   rank = "Gold";
} else if(correctAnswerNo >2 && correctAnswerNo <5){
    rank = "Silver";
} else if(correctAnswerNo >0 && correctAnswerNo <3){
    rank = "Bronze";
} else{
  rank = "None :(";
}
  

// 6. Output results to the <main> element

main.innerHTML = `
  <h1>You have answered ${correctAnswerNo} questions correctly.</h1>
  <p>Crown earned: <strong>${rank}</strong></p>
`; 