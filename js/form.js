$(function () {
  $("#phone").mask("+7 (999)-999-99-99");
});

let disabledDays = [0];
$("#my_datepicker").datepicker({
  minDate: new Date(),
  onRenderCell: function (date, cellType) {
    if (cellType == "day") {
      var day = date.getDay(),
        isDisabled = disabledDays.indexOf(day) != -1;

      return {
        disabled: isDisabled,
      };
    }
  },
  dateFormat: "dd.mm.yyyy",
  clearButton: true,
  datePicker: false,
});

$("#timepicker").timepicker({
  timeFormat: "HH:mm",
  interval: 30,
  minTime: "8",
  maxTime: "20:00",
  defaultTime: new Date(),
  startTime: "08:00",
  dynamic: false,
  dropdown: true,
  scrollbar: true,
});

// $("form").submit(function(){
//   if ($('input[type="radio"]:checked').length < 1){
//     alert("Please select at least one option from above!");
//     return false;
//   }
//   else {

//   }
// });