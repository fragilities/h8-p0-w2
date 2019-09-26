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
var secondWord = word.substr(4, 10);
var thirdWord = word.substr(15, 2);
var fourthWord = word.substr(18, 2);
var fifthWord = word.slice(-4);

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
