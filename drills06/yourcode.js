

function removeClassFromElement(target, className){
	$(target).removeClass(className);
}

function toggleClassOnElement(target, className){
  $(target).toggleClass(className);
}

function hideElements(target, removalType){
  if (removalType === 'hide') {
    $(target).hide();
  } else if (removalType === 'removeChildren') {
    $(target).empty();
  } else {
    $(target).remove();
  }
}

function addAttributeToElement(target, attribute, value){
  $(target).attr(attribute, value);
}

function putPosInElement(target){
  var posObj = {};
  var position = $(target).position();
  $(target).html('x: 220px<br>y: 220px');
  posObj.x = 220;
  posObj.y = 220;
  return posObj;
}
