const userWord = prompt("Inserisci la parola desiderata")

if (wordCheck(userWord) === true) {
    console.log(`La parola ${userWord} è palindroma.`);
} else {
    console.log(`La parola ${userWord} non è palindroma.`)
}