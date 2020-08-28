/**
 * Algorithm RSA
 * Jorge Luis Romo Gonzalez
 * Cesar Enrique Venzor Corral
 */

const RSA = require('node-rsa');

// set key size
const cipher = new RSA({b: 512});

// command line arguments
const argument = process.argv.slice(2);
const textToBeEncrypted = argument.join(" ");


/**
 * Function that encrypt a text using RSA algorithm, 
 * passing textToBeEncrypted, and the cipher with the secret key. 
 * Returns the encrypted text.
 */
function encodeRSA(text, cipher) {
    return cipher.encrypt(text, 'base64');
}

/**
 * decode a string using RSA algortm
 * it takes an encrypted text and an cipher object with the keys
 * returns the original string.
 */
function decodeRSA (text, cipher) {
    return cipher.decrypt(text, 'utf8');
}

// generate keys
cipher.generateKeyPair();

const encryptText = encodeRSA(textToBeEncrypted, cipher);
const decryptText = decodeRSA(encryptText, cipher);

console.log(`Text to be encrypted: ${textToBeEncrypted}`);
console.log(`Encrypted text: ${encryptText}`);
console.log(`Original text decrypted: ${decryptText}`);
