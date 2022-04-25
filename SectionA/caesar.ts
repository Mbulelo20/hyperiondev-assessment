// Function: Caesar Cipher
const CaesarCipher = (string:string, shift: number) => {
  // Alphabet
  const alphabet: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  // Encoded Text
  let encodedText: string = '';

  // Adjust Shift (Over 26 Characters)
  if (shift > 26) {
    // Assign Remainder As Shift
    shift = shift % 26; 
  }

  // now we iterate Over Data
  let i: number = 0;
  while (i < string.length) {
    // Valid Alphabet Characters
    if (alphabet.indexOf(string[i]) !== -1) {
      // Find Alphabet Index
      const alphabetIndex: number = alphabet.indexOf((string[i]).toUpperCase());

      // Alphabet Index Is In Alphabet Range
      if (alphabet[alphabetIndex + shift]) {
        // Append To String
        encodedText += alphabet[alphabetIndex + shift];
      }
      // Alphabet Index Out Of Range (Adjust Alphabet By 26 Characters)
      else {
        // Append To String
        encodedText += alphabet[alphabetIndex + shift - 26];
      }
    }
    // Special Characters
    else {
      // Append To String
      encodedText += string[i];

    }

    // Increase I
    i++;
  }
  
  return encodedText;
};
// Remove this line ==> "print" in print(caesar_cipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39)); 
// Use console.log instead
console.log(CaesarCipher('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.', 39)); 
export default CaesarCipher;