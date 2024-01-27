$(".hamburger-menu").click(function (e) {
  $(".overlay").addClass("nav-active");
});

$(".exit").click(function (e) {
  $(".overlay").removeClass("nav-active");
});
