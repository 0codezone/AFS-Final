$(document).ready(function () {
  var loanAmountSlider = $("#loan-amount"),
    durationSlider = $("#loan-duration"),
    interestRateSlider = $("#interest-rate");

  function updateLabels(slider, labelId) {
    var value = slider.slider("value");
    $(labelId).text(value);
  }

  function calculateEMI() {
    var loanAmount = loanAmountSlider.slider("value") * 100000;
    var loanDuration = durationSlider.slider("value");
    var interestRate = interestRateSlider.slider("value") / 100;

    var monthlyInterestRate = interestRate / 12;
    var numberOfPayments = loanDuration * 12;

    if (interestRate !== 0) {
      var emi =
        (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

      var totalAmount = emi * numberOfPayments;

      $(".emiValue").text(emi.toFixed(0));
      $(".interestValue").text((totalAmount - loanAmount).toFixed(0));
      $(".totalValue").text(totalAmount.toFixed(0));
    } else {
      var totalAmount = loanAmount * numberOfPayments;
      $(".emiValue").text((totalAmount / numberOfPayments).toFixed(0));
      $(".interestValue").text("0");
      $(".totalValue").text(totalAmount.toFixed(0));
    }
  }

  function setupSlider(slider, labelId, defaultValue, min, max, step) {
    slider.slider({
      range: "min",
      value: defaultValue,
      min: min,
      max: max,
      step: step,
      change: function (event, ui) {
        updateLabels(slider, labelId);
        calculateEMI();
      },
    });
  }

  setupSlider(loanAmountSlider, "#selected-amount", 1, 1, 10, 1);
  setupSlider(durationSlider, "#selected-duration", 1, 1, 20, 1);
  setupSlider(interestRateSlider, "#selected-interest", 1, 1, 20, 1);

  // Initial update
  updateLabels(loanAmountSlider, "#selected-amount");
  updateLabels(durationSlider, "#selected-duration");
  updateLabels(interestRateSlider, "#selected-interest");
  calculateEMI(); // Calculate EMI initially
});
