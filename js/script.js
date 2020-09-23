// for all pages

$('.medbook-title').mouseenter(function () {
  $('.medbook-dropdown').css("display", "flex");
});
$('.medbook').mouseleave(function () {
  $('.medbook-dropdown').css("display", "none");
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

