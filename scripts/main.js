

mybutton = document.getElementById("myBtn");
window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunc() {
  document.documentElement.scrollTop = 0;
}