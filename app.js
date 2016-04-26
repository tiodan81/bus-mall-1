
attempt = 5;
var imgArray = [['bag','jpg'],['banana','jpg'],['boots','jpg'],['breakfast','jpg'],
['bubblegum','jpg'],['chair','jpg'],['cthulhu','jpg'],['dog-duck','jpg']['dragon','jpg'],
['pen','jpg'],['pet-sweep','jpg'],['scissors','jpg'],['shark','jpg'],['sweep','png'],['tauntaun','jpg']
['unicorn','jpg'],['usb','gif'],['water-can','jpg'],['wine-glass','jpg']];

var imgDisplay = new Array();

function Image(filename, fileext) {
  this.filename = filename;
  this.id = filename;
  this.fileext = fileext;
  this.filepath = '../img/' + filename + '.' + this.fileext;
  this.displayCounter = 0;
  this.clickCounter = 0;
  this.generatePercentage = this.generatePercentage();
}

Image.prototype.generatePercentage = function() {
  if (this.displayCounter) {
    return ((this.clickCounter / this.displayCounter) * 100).toFixed(2);
  } else {
  //  alert('Sorry.  Undisplayed image.');
  }
};

Image.prototype.displayCounterFunction = function() {
  this.displayCounter++;
  this.generatePercentage = this.generatePercentage();
};
Image.prototype.clickCounterFunction = function () {
  this.clickCounter++;
  this.generatePercentage = this.generatePercentage();
};

function ImageContainer(imageArray) {
  if (imageArray) {
    this.imageArray = imageArray;
  } else {
    this.imageArray = new Array();
  }
  this.size = this.imageArray.length;
}

ImageContainer.prototype.displayThreeImg = function () {
  displayThree = new Array();
  var img;
  var img1 = new Array(20);
  for (var i = 0; i < img1.length; i++) {
    img1[i] = i;
  }
  shuffle(img1);

  for (var k = 0; k < 3; k++) {
    img = this.imageArray[img1.pop()];
    displayThree.push(img);
  }
};

ImageContainer.prototype.addImage = function(image) {
  this.imageArray.push(image);
  this.size = this.imageArray.length;
};

var allImg = new ImageContainer();
for (var i = 0; i < imgArray.length; i++) {
  var imgNow = imgArray[i];
  var imgNew = new Image(imgNow[0],imgNow[1]);
  allImg.addImage(imgNew);
}

function shuffle(array) {
  var shuffleImg = array.length, tempValue, randomImg;

  while (0 !== shuffleImg) {
    randomImg = Math.floor(Math.random() * shuffleImg);
    shuffleImg -= 1;

    tempValue = array[shuffleImg];
    array[shuffleImg] = array[randomImg];
    array[randomImg] = tempValue;
  }
  return array;
}

function displayThreeImgNew() {
  var container;
  var imgEl;
  var currentImg;

  allImg.displayThreeImg();
  for (var i = 0; i < imgDisplay.length; i++) {
    currentImg = imgDisplay[i];
    container = document.getElementById('img' + i);
    if (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    imgEl = document.createElement('img');
    imgEl.src = currentImg.filepath;
    imgEl.id = currentImg.id;
    imgEl.width = 200;
    imgEl.height = 200;
    container.appendChild(imgEl);
    currentImg.displayCounterFunction();
  }
}
displayThreeImgNew();

var bigDiv = document.getElementById('bigDiv');
bigDiv.addEventListener('click', selectImg);

function selectImg(e) {
  if(attempt) {
    var divClicked = Number.parseInt(event.target.parentNode.getAttribute('id'));
    if (!isNan(divClicked)) {
      var imgClicked = imgDisplay[divClicked];
      imgClicked.clickCounterFunction();
      displayThreeImgNew();
    }
    attempts--;
    if(attempts <= 0 ) {
      alert('Thank you for your feedback.');
      attemptButton.style.visibility = 'visible';
      resultButton.style.visibility = 'visible';
    } else {
      displayThreeImgNew();
    }
  } else {
    alert('Thank you for your feedback.');
  }
}

function moreAttempts() {
  attempts += 10;
  displayThreeImgNew();
  attemptButton.style.visibilty = 'hidden';
  resultButton.style.visibilty = 'hidden';
}

function generateResults() {
  var resultHeader = document.createElement('h1');
  resultHeader.textContent = 'results';
  while (bigDiv.firstChild) {
    bigDiv.removeChild(bigDiv.firstChild);
  }
  var results = document.createElement('ul');
  for (var i = 0; i < allImg.imageArray.length; i++) {
    var list = document.createElement('li');
    list.textContent = (allImg.imageArray[i].filename.toLowerCase() + 'was clicked ' + allImg.imageArray[i].clickCounter + ' times out of a total ' + allImg.imageArray[i].displayCounter + 'times displayed.  Percentage of time clicked on: ' + allImg.imageArray[i].generatePercentage + '.');
    results.appendChild(list);
  }
  bigDiv.appendChild(resultHeader);
  bigDiv.appendChild(results);
  attemptButton.style.visibility = 'hidden';
  resultButton.style.visibility = 'hidden';
}
