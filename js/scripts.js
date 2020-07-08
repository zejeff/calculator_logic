//Business logic
function add(number1, number2) {
  return number1 + number2;
};

function subtract(number1, number2) {
  return number1 - number2;
};

function divide(number1, number2) {
  return number1 / number2;
};

function multiply(number1, number2) {
  return number1 * number2;
};

//User Interface
$(document).ready(function() {
  $("#calculatorFormAdd").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("input#number1").val());
    const number2 = parseInt($("input#number2").val());
    console.log(add(number1, number2))
  });
});