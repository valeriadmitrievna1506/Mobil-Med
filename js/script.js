// for all pages
$('.medbook-title').click(function () {
  if ($('.medbook-dropdown').css('display') == 'none') {
    $('.medbook-dropdown').css('display', 'flex');
  }
  else if ($('.medbook-dropdown').css('display') == 'flex') {
    $('.medbook-dropdown').css('display', 'none');
  }
});

$('#menu-burger').click(function() {
  $('#dropdown-burger').slideToggle(500);
});
