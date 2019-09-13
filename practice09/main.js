var str = 'cat';
var arr = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];

function fittingWords(string, array) {
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].includes(string[0]) && array[i].includes(string[1]) && array[i].includes(string[2])) {
      newArr.push(array[i]);
    }
  }
  console.log(newArr);
}

fittingWords(str, arr);
