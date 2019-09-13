var myStr = 'the cat in the hat';

function character_convert(str) {
  var newStrOutput = '';
  var strArr = str.split(' ');
  for (var i = 0; i < strArr.length; i++) {
    var wordArr = strArr[i].split('');
    for (var j = 0; j < wordArr.length; j++) {
      newStrOutput += wordArr[j].charCodeAt();
    }
  }
  console.log(newStrOutput);
}

character_convert(myStr);
