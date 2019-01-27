var mapWidth = 400;
var mapHeight = 400;
var counter = 0;

//jako argument później przekażemy mapWidth i mapHeight
function randomNumber(size) {
  return Math.floor(Math.random() * size)
}

//losujemy  miejsce ukrycia skarbu
var treasure = {
  x: randomNumber(mapWidth),
  y: randomNumber(mapHeight)
}

/


//Obliczanie odległości między kliknięciem a celem
//offsetX - szerokość na jakiej nastąpiło zdarzenie
//offsetY - wysokość na jakiej nastąpiło zdarzenie
function calculateDistance(event, treasure) {
  var distanceX = event.offsetX - treasure.x;
  var distanceY = event.offsetY - treasure.y;
  
  //korzystamy z twierdzenia Pitagorasa
  //Math.sqrt - zwraca pierwiastek kwadratowy liczby
  return Math.sqrt((distanceX * distanceX) + (distanceY * distanceY))
}

/tworzymy podpowiedzi
function createPrompts(distance) {
  if (distance < 10) {
    return "Parzy!";
  } else if (distance < 20) {
    return "Gorąco!";
  } else if (distance < 40) {
    return "Ciepło!";
  } else if (distance < 80) {
    return "Letnio!";
  } else if (distance < 160) {
    return "Zimno!";
  } else if ( distance < 320) {
    return "Mróz!";
  } else {
    return "Syberia!";
  }
}

$('.map').click(function(e) {
  counter++;

})
