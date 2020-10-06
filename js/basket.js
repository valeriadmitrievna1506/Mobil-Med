$(document).ready(function () {
  calculatePrice();
  document.querySelector('.servicesCount').innerHTML = items + ' шт.'
});

function calculatePrice() {
  let prices = document.querySelectorAll(".price-up > p:first-of-type");
  var totalPrice = 0;
  prices.forEach((price) => {
    totalPrice += parseInt(price.innerHTML.replace(/\s+/g, ""));
  });
  document.querySelector(".totalCost").innerHTML =
    prettify(totalPrice) + " руб.";

  document.querySelector(".totalCostFinal").innerHTML = prettify(
    totalPrice -
      parseInt(
        document
          .querySelector(".discount")
          .innerHTML.replace("/руб.", "")
          .replace(/\s+/g, "")
      )
  );
  if (parseInt(document.querySelector(".totalCostFinal").innerHTML) < 0) {
    document.querySelector(".totalCostFinal").innerHTML = 0;
  }
}

let items = document.querySelectorAll('.table .tr').length;
console.log(items);

function prettify(num) {
  let n = String(num);
  return n.replace(/(\d{1,3}(?=(\d\d\d)+(?!\d)))/g, "$1" + " ");
}

$(".close").click(function () {
  items -= 1;
  document.querySelector('.servicesCount').innerHTML = items + ' шт.'
  event.target.parentNode.parentNode.remove();
  calculatePrice();
});
