var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1ImageSource = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2ImageSource = "images/dice" + randomNumber2 + ".png";

var image = document.querySelectorAll("img");
image[0].setAttribute("src", dice1ImageSource);
image[1].setAttribute("src", dice2ImageSource);

var resultAnnouncement = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  resultAnnouncement.textContent = "🚩 Player 1 Wins!";
  resultAnnouncement.classList.add("winner");
}
else if (randomNumber1 < randomNumber2) {
  resultAnnouncement.textContent = "Player 2 Wins! 🚩";
  resultAnnouncement.classList.add("winner");
}
else {
  resultAnnouncement.textContent = "Draw!";
}
