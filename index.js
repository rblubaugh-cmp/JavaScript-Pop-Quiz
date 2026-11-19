//prompt the user to answer 3 questions
//create a score variable to keep track of how many questions are answered correctly
//show the results with 3 different messages, **how many they got right**
let score = 0;
const username = prompt("Please type your name");
const question1 = prompt("Is Pikachu a electric pokemon?");
if (question1 === "yes") {
  alert("Correct!");
  score += 1;
} else {
  alert("Wrong!");
}

const question2 = prompt("Have the Cleveland Browns won a Super Bowl?");
if (question2 === "no") {
  alert("Correct!");
  score += 1;
} else {
  alert("Wrong!");
}
if (question2 === true) {
}
const question3 = prompt(
  "Besides brown, what is one of the primary colors of the Cleveland Browns?",
);
if (question3 === "orange") {
  alert("Correct!");
  score += 1;
} else {
  alert("Wrong!");
}
if (question3 === true) {
}

if (score < 1) {
  alert(`${username} answered 0 questions correctly.`);
} else if (score === 3) {
  alert(`${username} has answered all questions correctly.`);
} else {
  alert(`${username} answered some questions correctly.`);
}
