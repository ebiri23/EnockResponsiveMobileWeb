alert('Carousel for Computer and Accordion for mobile')
alert('Enock Balthazar;email: edcbal17@gmail.com or esciencepi17@gmail.com')
prompt('(#Joke)If you are not a front web developer; Type your name:')

var pos = document.getElementsByClassName("position");
var y;

for (y = 0; y < pos.length; y++) {
  pos[y].addEventListener("click", function() {

    this.classList.toggle("active");


    var accordion = this.nextElementSibling;
    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
}