
function sumArray(array){
  var sum = 0
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function fitWithinVal(array, numberToStopAt){
  var sum = 0;
  var testSum = 0;
  var numbersAddedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (sum + array[i] > numberToStopAt && array[i] === array[array.length - 1]) {
      return numbersAddedArray;
    }
    if (sum + array[i] < numberToStopAt) {
      numbersAddedArray.push(array[i]);
      sum += array[i];
    } else if (sum + array[i + 1] < numberToStopAt) {
      numbersAddedArray.push(array[i + 1]);
      sum += array[i + 1];
    }
  }
  return numbersAddedArray;
}

function getAllNamesShorterThan(array, length){
  var newArr = [];
  for (var item of array) {
    if (item.length < length) {
      newArr.push(item);
    }
  }
  return newArr;
}

function makeLabel(person){
  var shippingLabel = person.greeting + ' ' + person.givenName + ' ' + person.familyName + '\n' + person['home address'].streetNumber + ' ' + person['home address'].streetName + '\n' + person['home address'].city + ', ' + person['home address'].state + ' ' + person['home address'].zip;
  return shippingLabel;
}
