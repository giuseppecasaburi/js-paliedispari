/**
 * Questa funzione converte l'input dell'utente in una stringa completamente in minuscolo dopodichè inverte i caratteri di essa e restituisce un valore booleano.
 * @param {string} userWord
 * @returns {bolean}
 */

function wordCheck(userWord) {
    let lowerCaseWord = userWord.toLowerCase();
    let reverseWord = '';
    for (let i = lowerCaseWord.length - 1; i >= 0; i--) {
        reverseWord += lowerCaseWord[i];
    }
    return lowerCaseWord === reverseWord;
}

