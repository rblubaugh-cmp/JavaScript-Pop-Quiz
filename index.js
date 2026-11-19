//prompt the user to answer 3 questions
//create a score variable to keep track of how many questions are answered correctly
//show the results with 3 different messages , 0 correct, all correct, some correct
//add username for a little extra practice
//add alerts after each answered question for a little extra practice

let score = 0; //starts the score at zero else it comes up as undefined
const username = prompt("Please type your name");
let question1 = prompt(`What type is Pikachu?
  [A] Water
  [B] Fire
  [C] Psychic
  [D] Electric
  `);
if (
  question1 !== "A" &&
  question1 !== "a" &&
  question1 !== "B" &&
  question1 !== "b" &&
  question1 !== "C" &&
  question1 !== "c" &&
  question1 !== "D" &&
  question1 !== "d"
) {
  alert("Invalid input! Please select A, B, C or D to answer.");
  question1 = prompt(`What type is Pikachu?
  [A] Water
  [B] Fire
  [C] Psychic
  [D] Electric
  `);
}
if (question1 === "D" || question1 === "d") {
  alert("Correct!");
  score += 1;
} else {
  alert("Wrong!");
}

let question2 = prompt(
  `Have the Cleveland Browns won a Super Bowl? 
[A] Yes
[B] No`,
);
if (
  question2 !== "A" &&
  question2 !== "a" &&
  question2 !== "B" &&
  question2 !== "b"
) {
  alert("Invalid input! Please select A or B to answer.");
  question2 = prompt(
    `Have the Cleveland Browns won a Super Bowl? 
[A] Yes
[B] No`,
  );
}
if (question2 === "B" || question2 === "b") {
  alert("Correct!");
  score += 1; //initially typed as score = score + 1 it got changed by the linter to >>> score += 1  <<< as that is the short hand
} else {
  alert("Wrong!");
}
let question3 = prompt(
  `Besides brown, what is one of the primary colors of the Cleveland Browns?
  [A] Green
  [B] Orange
  [C] Black
  [D] Gold`,
);
if (
  question3 !== "A" &&
  question3 !== "a" &&
  question3 !== "B" &&
  question3 !== "b" &&
  question3 !== "C" &&
  question3 !== "c" &&
  question3 !== "D" &&
  question3 !== "d"
) {
  alert("Invalid input! Please type A, B, C or D to answer.");
  question3 = prompt(
    `Besides brown, what is one of the primary colors of the Cleveland Browns?
  [A] Green
  [B] Orange
  [C] Black
  [D] Gold`,
  );
}
if (question3 === "B" || question3 === "b") {
  alert("Correct!");
  score += 1;
} else {
  alert("Wrong!");
}

if (score < 1) {
  alert(`${username} answered 0 questions correctly.`);
} else if (score === 3) {
  alert(`${username} has answered all questions correctly.`);
} else {
  alert(`${username} answered some questions correctly.`);
}
