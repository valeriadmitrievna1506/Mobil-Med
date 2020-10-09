$('#menu-burger').click(function() {
  $('#dropdown-burger').slideToggle(1000);
});

$('.menu-burger-point').click(function () {
  $(event.target.childNodes[1]).slideToggle(600);
});