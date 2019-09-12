var first_array = [3, -5, 15, 4];
var second_array = [3, 18, -5, -4];
var obj = {
  name: 'Kevin',
  age: 29
}

function addArray(arg1, arg2) {
    for (var i = 0; i < arg2.length; i++) {
      if(!arg1[i]) {
        arg1[i] = arg2[i];
      } else {
        arg1[i] += arg2[i]
      }
    }
    return arg1;
  }

function addItems() {
  if (arguments.length !== 2) {
    return 'provide 2 arguments';
  }
  if (Array.isArray(arguments[0]) && Array.isArray(arguments[1])) {
    return addArray(arguments[0], arguments[1]);
    }
  var arr = null;
  var obj = null;
  for (var i = 0; i < arguments.length; i++) {
    if (Array.isArray(arguments[i])) {
      console.log('hi');
      arr = arguments[i];
    } else if (isObject(arguments[i])) {
      console.log('hey');
      obj = arguments[i];
    }
  }
  for (var i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
  }
  return obj;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

console.log(addItems(first_array, obj));
console.log(addItems(obj, second_array));
console.log(addItems(first_array, second_array));
console.log(addItems(second_array, first_array));
