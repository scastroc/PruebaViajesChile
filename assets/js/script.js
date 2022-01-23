$(document).ready(function() {
  $('.carousel').carousel({
    interval: 8000,
    pause: "false"
  });
});

$(document).scroll( function() {
  const y = $("html").scrollTop();
    if(y > 700) $('.navbar').addClass("bg-black")
    else $('.navbar').removeClass("bg-black")
});

$(function(){

  $("a").click(function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var href = this.hash;

      $("html, body").animate({
        scrollTop: $(href).offset().top
      }, 1000);
    }
  });
});