// Raccolta dati dell'utente
const userChoice = prompt("Scegli pari o dispari");
const userNumb = parseInt(prompt("Scegli un numero tra 1 e 5"));
const computerData = computerNumb();

console.log(userChoice, userNumb);
console.log(computerData);

const totNumb = userNumb + computerData;
console.log(totNumb);

console.log(confronto(totNumb));
