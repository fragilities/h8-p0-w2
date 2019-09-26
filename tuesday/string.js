// Hacktiv8 phase 0 week 2
// Tugas hari rabu: String
// Zoe Zachary

// 1. Let's form a sentence
// Hasil akan ditampilkan pada console.log(word);

var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

function appendWord(word1, word2) {
  return word1 + ' ' + word2;
}

word = appendWord(word, second);
word = appendWord(word, third);
word = appendWord(word, fourth);
word = appendWord(word, fifth);
word = appendWord(word, sixth);
word = appendWord(word, seventh);

console.log(word);

// 2. Index Accessing - 1 by 1

var word = 'wow JavaScript is so cool';
var exampleFirstWord = word[0] + word[1] + word[2];
var secondWord = word[4] + word[5] + word[6] + word[7] + word[8] + word[9] + word[10] + word[11] + word[12] + word[13];
var thirdWord = word[15] + word[16];
var fourthWord = word[18] + word[19];
var fifthWord = word[21] + word[22] + word[23] + word[24];

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

// 3. Breaking Sentence (Again) using Substring
var word = 'wow JavaScript is so cool';
var exampleFirstWord = wow.substr(0, 3);
var secondWord = word.substr(4, 10);
var thirdWord = word.substr(15, 2);
var fourthWord = word.substr(18, 2);
var fifthWord = word.substr(21, 4);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);

//4. Breaking Sentence (yet Again) and Count Each Length
var word4 = 'wow JavaScript is so cool';
var exampleFirstWord4 = word4.substring(0, 3);
var secondWord4 = word4.substr(4, 10);
var thirdWord4 = word4.substr(15, 2);
var fourthWord4 = word4.substr(18, 2);
var fifthWord4 = word4.substr(21, 4);

function addLength(word) {
  return word + ', with length: ' + word.length;
}

console.log('First Word: ' + addLength(exampleFirstWord4));
console.log('Second Word: ' + addLength(secondWord4));
console.log('Third Word: ' + addLength(thirdWord4));
console.log('Fourth Word: ' + addLength(fourthWord4));
console.log('Fifth Word: ' + addLength(fifthWord4));