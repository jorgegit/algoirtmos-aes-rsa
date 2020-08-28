/**
 * Algorithm AES 128 to make a test 
 * Jorge Luis Romo González
 * Cesar Enrique Venzor
 */

//Usage of crypto library
const crypto = require('crypto');
//Secret Key Definition
const secretKey = "Q1W0E2R9R38RADSPK";

// Argument passed from terminal
const argument = process.argv.slice(2);
const textToBeEncrypted = argument.join(" ");//"My Encrypted Text Example Jorge Romo - Cesar Venzor";

/**
Function that encrypt a text using AES 128 Algorithm, passing textToBeEncrypted and
secret key as params and return an encryptedString.
 */
function encodeAES (text, key) {
    const cipherKey = crypto.createCipher('aes-128-cbc', key);
    let encryptedString = cipherKey.update(text, 'utf8', 'hex');
    encryptedString += cipherKey.final('hex');
    return encryptedString;
}

/**
Function that decrypt a string using AES 128 algorithm, passing textToBeEncripted and secretKey as params and return
the original String Message (My Encrypted Text Example)
 */
function decodeAES (text, key) {
    const decipherKey = crypto.createDecipher('aes-128-cbc', key);
    let encryptedString = decipherKey.update(text, 'hex', 'utf8');
    encryptedString += decipherKey.final('utf8');
    return encryptedString;
}

//Call function to encrypt
const encryptText = encodeAES(textToBeEncrypted, secretKey);

//Call function to decrypt
const decryptText = decodeAES(encryptText, secretKey);

console.log(`Text to be encrypted: ${textToBeEncrypted}`);
console.log(`Encrypted text: ${encryptText}`);
console.log(`Original String Decrypted: ${decryptText}`);