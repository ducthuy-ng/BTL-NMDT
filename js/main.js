function sidebar_toggle() {
  document.getElementById("sidebar").classList.toggle("active");
  document.getElementById("main_article").classList.toggle("left");
  document.getElementById("backOverlay").classList.toggle("active");
}

function documentLoaded() {
  Array.from(document.getElementsByClassName("sidebar--toggler")).concat(Array.from(document.getElementsByClassName("overlay"))).forEach(function(item) {
    item.addEventListener("click", sidebar_toggle);
  });
}
