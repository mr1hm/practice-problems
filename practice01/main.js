var string = 'beasts';
var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function biggerWords(string, array) {
  var biggerWordsArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > string.length) {
      biggerWordsArr.push(array[i]);
    }
  }
  return biggerWordsArr;
}

console.log(biggerWords(string, myArray));
