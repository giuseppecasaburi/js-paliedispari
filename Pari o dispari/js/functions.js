/**
 * Questa funzione deve generare un numero casuale tra 1 e 5
 * @returns {Number}
 */
function computerNumb() {
    let randomNumb = Math.floor(Math.random() * 5 ) + 1;
    return randomNumb;   
}

/**
 * Description
 * @param {number} totNumb
 * @returns {string}
 */
function confronto(totNumb) {
    let resultPOrD = '';
    if (totNumb % 2 == 0) {
        resultPOrD = "pari";
    }else {
        resultPOrD = "dispari";
    }
    return resultPOrD;
}