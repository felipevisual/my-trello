const cards = document.querySelectorAll(".quadro ul li");

var modal = document.querySelector(".modal");

var span = document.getElementsByClassName("close")[0];

cards.forEach(card => {
  card.addEventListener("click", e => {
    modal.style.display = "block";

    const span = e.target.getElementsByTagName("span")[0];
    document.querySelector(".modal-content p").innerHTML = span.innerHTML;
  });
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}