var mapWidth = 400;
var mapHeight = 400;
var counter = 0;

//jako argument później przekażemy mapWidth i mapHeight
function randomNumber(size) {
  return Math.floor(Math.random() * size)
}

var treasure = {
  x: randomNumber(mapWidth),
  y: randomNumber(mapHeight)
}

$('.map').click(function(e) {
  counter++;

})
