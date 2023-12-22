$(document).ready(function () {
  // Function to update the loan amount, duration, and interest labels
  function updateLabels(slider, labelId) {
    $(labelId).text(slider.slider("value"));
  }

  // Initialize sliders
  $("#loan-amount").slider({
    range: "min",
    value: 5,
    min: 1,
    max: 10,
    step: 1,
    slide: function (event, ui) {
      updateLabels($(this), "#selected-amount");
      updateTotal();
    },
  });

  $("#loan-duration").slider({
    range: "min",
    value: 1,
    min: 1,
    max: 30,
    step: 1,
    slide: function (event, ui) {
      updateLabels($(this), "#selected-duration");
      updateTotal();
    },
  });

  $("#interest-rate").slider({
    range: "min",
    value: 5,
    min: 1,
    max: 20,
    step: 0.1,
    slide: function (event, ui) {
      updateLabels($(this), "#selected-interest");
      updateTotal();
    },
  });

  // Update total amount and EMI on slider change
  function updateTotal() {
    var loanAmount = $("#loan-amount").slider("value");
    var loanDuration = $("#loan-duration").slider("value");
    var interestRate = $("#interest-rate").slider("value") / 100;

    var principal = loanAmount * 100000; // Convert Lakhs to Rupees
    var interest = (principal * interestRate * loanDuration) / 12;
    var totalAmount = principal + interest;
    var emi = totalAmount / (loanDuration * 12);

    $(".totalValue").text(totalAmount.toFixed(2));
    $(".emiValue").text(emi.toFixed(2));
  }

  // Initial update
  updateLabels($("#loan-amount"), "#selected-amount");
  updateLabels($("#loan-duration"), "#selected-duration");
  updateLabels($("#interest-rate"), "#selected-interest");
  updateTotal();
});
