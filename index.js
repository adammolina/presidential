var images = document.querySelectorAll(".pictureButtons").length;

for (var i = 0; i<images; i++) {

  document.querySelectorAll(".pictureButtons")[i].addEventListener("click", function () {

    buttonAnimation()

  });
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("imgClicked");
}
