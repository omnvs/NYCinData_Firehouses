const container = document.getElementById("Streets");
const hiddenText = document.querySelector(".StreetsHidden");

container.addEventListener("mouseenter", () => {
  hiddenText.style.display = "block";
});

container.addEventListener("mouseleave", () => {
  hiddenText.style.display = "none";
});

$(document).ready(function() {
  $('.AboutTitle').hover(function() {
    $('.AboutTitleBack').fadeIn();
    $(this).fadeOut();
  }, function() {
    $('.AboutTitleBack').fadeOut();
    $(this).fadeIn();
  });
});



  