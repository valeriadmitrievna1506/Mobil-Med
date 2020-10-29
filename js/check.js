var form = document.querySelector("#check-form");
var submitButton = form.querySelector('input[type="submit"');
var phone = form.querySelector("#phone");
var code = form.querySelector("#code");
var fields = form.querySelectorAll(".field");

var errorMessage = form.querySelectorAll(".error-message");
var formError = form.querySelector(".form-error");

form.addEventListener("submit", function () {
  for (let i = 0; i < fields.length; i++) {
    errorMessage[i].style.opacity = 0;
  }
  formError.style.opacity = 0;

  event.preventDefault();

  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      errorMessage[i].style.opacity = 1;
    }
  }

  if (!/^[0-9]+$/.test(code.value) || code.value.length != 10) {
    errorMessage[1].style.opacity = 1;
  }

  if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value)) {
    errorMessage[0].style.opacity = 1;
  }

  if (true) {
    formError.style.opacity = 1;
  }

  if (errorMessage[0].style.opacity == 0 && errorMessage[1].style.opacity == 0 && formError.style.opacity == 0) {
    form.submit();
  }

});

