//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//Detecting Keyboard Press

document.addEventListener("keypress", function(event) {

  makeSound(event.key);
  
  buttonAnimation(event.key);

})


function makeSound(key) {

  switch (key) {
    case "q":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "w":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "e":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "r":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;

    case "t":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "y":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case "u":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
