$(function() {
  let blueButton = document.querySelector('.blue-button');
  if (blueButton.id == 'basket-button') {
    blueButton.textContent = '3 товара (15344р.)';
  }
  if (blueButton.id == 'appointment-button') {
    blueButton.textContent = 'Запись on-line';
  }
});

$('#menu-burger').click(function() {
  $('#dropdown-burger').slideToggle(1000);
});

$('.menu-burger-point').click(function () {
  $(event.target.childNodes[1]).slideToggle(600);
});

