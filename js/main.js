$(document).ready(function () {
  //RESPONSIVE MENU OVERLAY

  $(".navbar-toggler-custom").click(function () {
    $("body").addClass("overflow");
    $(".target-overlay").addClass("overlay");
    $(".nav-item a").addClass("text-white");
    $(".navbar-brand").addClass("invisible");
    $("nav").removeClass("nav-shadow");
  });
  $(".fa-times").click(function () {
    $("body").removeClass("overflow");
    $(".target-overlay").removeClass("overlay");
    $(".nav-item a").removeClass("text-white");
    $(".navbar-brand").removeClass("invisible");
    $("nav").addClass("nav-shadow");
  });
});
