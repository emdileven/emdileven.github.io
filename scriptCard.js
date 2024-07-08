// Mengambil elemen dengan class 'card-object' dan 'face'
var cards = document.querySelectorAll(".card-object");
var faceButtons = document.querySelectorAll(".face.front");

// Menambahkan event listener untuk setiap tombol 'face'
faceButtons.forEach(function (button) {
  button.addEventListener("click", flipCard);
});

function flipCard(event) {
  event.preventDefault();

  var btnFace = event.currentTarget;
  var card = btnFace.closest(".card-object");

  if (card.classList.contains("flip-in")) {
    // closeCards();
  } else {
    closeCards();
    openCard(card);
  }
}

function closeCards() {
  cards.forEach(function (card) {
    if (card.classList.contains("flip-in")) {
      card.classList.remove("flip-in");
      // Force reflow hack
      card.offsetHeight;
      card.classList.add("flip-out");
    }
  });
}

function openCard(card) {
  card.classList.remove("flip-out");
  // Force reflow hack
  card.offsetHeight;
  card.classList.add("flip-in");
}
