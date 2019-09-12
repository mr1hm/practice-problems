

function getPath(path){
  var stringPath = path;
  return stringPath.split('/');
}

function getPathParts(url){
  var urlObj = {};
  var splitUrl = (url.split('/'));
  var splitProtocol = splitUrl[0].split(':');
  var splitHost = splitUrl[2].split(':');
  urlObj.protocol = splitProtocol[0];
  urlObj.host = splitHost[0];
  urlObj.port = parseInt(splitHost[1]);
  urlObj.path = splitUrl[3] + '/' + splitUrl[4];
  urlObj.file = splitUrl[5];
  if (splitUrl.length === 5) {
    urlObj.path = splitUrl[3];
    urlObj.file = splitUrl[4];
  }
  return urlObj;
}

function getCapitalCount(array){
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i][0] === array[i][0].toUpperCase()) {
      count++;
    }
  }
  return count;
}

function correctCalcChecker(array){
  var newArr = [];
  var i = 0;
  while (i < array.length) {
    switch (array[i].op) {
      case '+':
        if (array[i].num1 + array[i].num2 === array[i].result) {
          newArr.push(array[i]);
        }
        break;
      case '-':
        if (array[i].num1 - array[i].num2 === array[i].result) {
          newArr.push(array[i]);
        }
        break;
      case '/':
        if (array[i].num1 / array[i].num2 === array[i].result) {
          newArr.push(array[i]);
        }
        break;
      case '*':
        if (array[i].num1 * array[i].num2 === array[i].result) {
          newArr.push(array[i]);
        }
        break;
    }
    i++;
  }
  return newArr;
}

function doMath(){

}
