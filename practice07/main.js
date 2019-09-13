var myString = "Hello my name is Stu";

function translateToPigLatin(str) {
  var strArr = str.split(' ');
  var tempArr = [];
  for (var i = 0; i < strArr.length; i++) {
    var letterArray = strArr[i].split('');
    var firstLetter = letterArray.shift();
    letterArray.push(firstLetter);
    letterArray.push('a','y');
    var string = letterArray.join('');
    tempArr.push(string);
  }
  var final = tempArr.join(' ');
  console.log(final);
}

translateToPigLatin(myString);
