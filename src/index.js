const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprArray = expr.split(/(.{10})/).filter(O=>O);
    for(let i=0; i < exprArray.length; i++) {
        exprArray[i] = exprArray[i].replace(/10/g, ".").replace(/11/g, "-").replace(/0/g, "").replace(/\*{10}/g, " ");
    }
    let result = [];
    for(let i=0; i < exprArray.length; i++) {
        for(const j in MORSE_TABLE) {
            if (exprArray[i] === j)  result[i] = MORSE_TABLE[j];
            if (exprArray[i] === ' ') result[i] = ' ';
        }
    }
    result = result.join('');
    return result;
}

module.exports = {
    decode
}