

function changeElements(elementClass){
  var classText = $(elementClass).text();
  var numObj = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };
  $(elementClass).each(function(index) {
    var thisText = $(this).text();
    console.log(thisText);
    if (numObj[thisText]) {
      $(this).text(numObj[thisText]);
    }
  })
}

function appendTextToElement(elementClass, word){
  $(elementClass).each(function() {
    var originalText = $(this).text();
    console.log(originalText);
    $(this).text(originalText + word);
  })
}

function addClass(selector, classToAdd){
  var count = 0;
  $(selector).each(function() {
    if($(this).addClass(classToAdd)) {
      count++;
    }
  })
  return count;
}

function removeElements(elementToRemove){
  $(elementToRemove).remove();
}
