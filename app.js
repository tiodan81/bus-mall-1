var imgArray = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg',
'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg',
'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg',
'img/sweep.jpg', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

var divLeft = document.getElementById('leftImg').addEventListener('click', renderRandomImage());
var divMid = document.getElementById('midImg').addEventListener('click', renderRandomImage());
var divRight = document.getElementById('rightImg').addEventListener('click', renderRandomImage());
var displayCount = 0;

function renderRandomImage(img) {
  {
    var image = new Image();
    var num = Math.floor(Math.random() * imgArray.length);
  //  var img = imgArray[num];
  //  var imgPath = '<img src="' + img + '" alt = "">';
    image.src = imgArray[num];
    document.body.appendChild(image);
  }
}
while (imgArray < 3) {

  if (divLeft === divMid || divLeft === divRight || divMid === divRight)
  {
    var num = Math.floor(Math.random() * imgArray.length);
    document.body.src = imgArray[num];
    displayCount++;
    if (displayCount > 1) {
      displayCount = 0;
    }
    else {
      renderRandomImage();
    }
    // displayCount++;
  }
  // if (divLeft !== divMid) {
  //   var num = Math.floor(Math.random() * imgArray.length);
  //   document.body.src = imgArray[num];
  //   divMid[num] = true;
  //   displayCount++; }
  // while (divLeft === divRight || divMid === divRight) {
  //   renderRandomImage(divRight);
  // }
  // if (divLeft !== divRight) {
  //   var num = Math.floor(Math.random() * imgArray.length);
  //   document.body.src = imgArray[num];
  //   divRight[num] = true;
  //   displayCount++;
  // }
}
