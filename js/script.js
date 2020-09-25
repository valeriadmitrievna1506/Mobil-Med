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

// test
$('.header-nav ul:first-of-type li').mouseenter(function(item) {
  item.target.childNodes[3].style.display = 'flex';
});
$('.header-nav ul:first-of-type li ul').mouseleave(function(item) {
  item.currentTarget.style.display = 'none';
});
$('.header-nav ul:first-of-type li').mouseleave(function(item) {
  item.target.childNodes[3].style.display = 'none';
});

