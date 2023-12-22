$(function () {
  function e(e) {
    if ((e = e.toString()).length > 9) return "overflow";
    if (
      ((n = ("000000000" + e)
        .substr(-9)
        .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)),
      n)
    ) {
      var t = "";
      return (
        (t +=
          0 != n[1]
            ? (l[Number(n[1])] || o[n[1][0]] + " " + l[n[1][1]]) + "crore "
            : ""),
        (t +=
          0 != n[2]
            ? (l[Number(n[2])] || o[n[2][0]] + " " + l[n[2][1]]) + "lakh "
            : ""),
        (t +=
          0 != n[3]
            ? (l[Number(n[3])] || o[n[3][0]] + " " + l[n[3][1]]) + "thousand "
            : ""),
        (t +=
          0 != n[4]
            ? (l[Number(n[4])] || o[n[4][0]] + " " + l[n[4][1]]) + "hundred "
            : ""),
        (t +=
          0 != n[5]
            ? ("" != t ? "and " : "") +
              (l[Number(n[5])] || o[n[5][0]] + " " + l[n[5][1]]) +
              "only "
            : "")
      );
    }
  }
  function t() {
    var n = Math.round((r * i) / (1 - Math.pow(1 / (1 + i), a))),
      t = (r * i) / (1 - Math.pow(1 / (1 + i), a)),
      l = t * a - r;
    $(".emiValue").text(n.toLocaleString("en-IN")),
      $(".interestValue").text(Math.round(l).toLocaleString("en-IN")),
      $(".TotalValue").text(Math.round(t * a).toLocaleString("en-IN"));
  }
  var r,
    a,
    i,
    l = [
      "",
      "one ",
      "two ",
      "three ",
      "four ",
      "five ",
      "six ",
      "seven ",
      "eight ",
      "nine ",
      "ten ",
      "eleven ",
      "twelve ",
      "thirteen ",
      "fourteen ",
      "fifteen ",
      "sixteen ",
      "seventeen ",
      "eighteen ",
      "nineteen ",
    ],
    o = [
      "",
      "",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
  $("#loan-amount").slider({
    range: "min",
    value: 75e5,
    min: 0x186a0,
    max: 0x989680,
    step: 1e5,
    slide: function (n, a) {
      $("#selected-amount").text(a.value / 100000), (r = a.value), t();
    },
  }),
    $("#selected-amount").text($("#loan-amount").slider("value") / 100000);
  var r = $("#loan-amount").slider("value");
  $("#interest-rate").slider({
    range: "min",
    value: 12.5,
    min: 10,
    max: 36,
    step: 0.05,
    slide: function (e, n) {
      $("#selected-interest").text(n.value), (i = n.value / 1200), t();
    },
  }),
    $("#selected-interest").text($("#interest-rate").slider("value")),
    (i = $("#interest-rate").slider("value") / 1200),
    $("#loan-duration").slider({
      range: "min",
      value: 7,
      min: 1,
      max: 7,
      step: 0.5,
      slide: function (e, n) {
        $("#selected-duration").text(n.value), (a = 12 * n.value), t();
      },
    }),
    $("#selected-duration").text($("#loan-duration").slider("value")),
    (a = 12 * $("#loan-duration").slider("value")),
    t();
});
