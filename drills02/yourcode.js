

function countOccurences(array, theWord){
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === theWord) {
      count++;
    }
  }
  return count;
}

function wordLengths(array){
  var i = 0;
  var newArr = [];
  while (i < array.length) {
    var stringLength = array[i].length;
    newArr.push(stringLength);
    i++;
  }
  return newArr;
}

function getMinMaxMean(array){
  var obj = {};
  var max = Math.max(...array);
  var min = Math.min(...array);
  var mean = null;
  var arrayAddedTotal = null;
  for (var i = 0; i < array.length; i++) {
    arrayAddedTotal += array[i];
  }
  mean = arrayAddedTotal / array.length;
  obj.min = min;
  obj.max = max;
  obj.mean = mean;
  return obj;
}

function findMode(array){
  debugger;
  var numberCount = {};
  var comparison = 0;
  var mostFrequent;
  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    if (numberCount[number] === undefined) {
      numberCount[number] = 1;
    } else {
      numberCount[number] = numberCount[number] + 1;
    }
    if (numberCount[number] >= comparison) {
      comparison = numberCount[number];
      mostFrequent = array[i];
    }
  }
  console.log(numberCount);
  return mostFrequent;
}

  //   var count = {};
//   var compare = 0;
//   var mostFrequent;
//   for (var i = 0; i < array.length; i++) {
//     var number = array[i];
//     if (count[number] === undefined) {
//       count[number] = 1;
//     } else {
//       count[number] = count[number] + 1;
//     }
//     if (count[number] > compare) {
//       compare = count[number];
//       mostFrequent = array[i];
//     }
//   }
//   return mostFrequent;
// }
