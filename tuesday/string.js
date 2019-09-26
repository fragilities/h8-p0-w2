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
