var mapWidth = 600;
var mapHeight = 600;
var counterClicks = 0;
var limitClicks = 15;

//jako argument później przekażemy mapWidth i mapHeight
function randomNumber(size) {
  return Math.floor(Math.random() * size)
}

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

//tworzymy podpowiedzi
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

//losujemy  miejsce ukrycia skarbu
var treasure = {
  x: randomNumber(mapWidth),
  y: randomNumber(mapHeight)
}


$('.map').click(function(e) {
    counterClicks++;
    
      if (counterClicks > limitClicks) {
        alert('GAME OVER');  
        return
    }
    
    var distance = calculateDistance(event, treasure);
    var prompt = createPrompts(distance);
    var click = limitClicks - counterClicks;
    $('.distance').text(prompt);
    $('.clicks').text(`Pozostało Ci ${limitClicks - counterClicks} kliknięć!`)
    
    if (distance < 8) {
        alert('Skarb został znaleziony po' + counterClicks + 'kliknięciach')
  }
})

