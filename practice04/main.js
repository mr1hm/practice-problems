var myArray = ['mouse', 'cat', 'dog', 'human'];

function sort(array) {
  var swapped = true;
  while (swapped) {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        var temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = true;
      }
    }
  }
  return array;
}

console.log(sort(myArray));
