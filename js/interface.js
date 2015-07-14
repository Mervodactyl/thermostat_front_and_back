console.log("testing, testing, 1, 2, 3, Thunderbirds are go!");
var stat = new Stat();

var updateTemperature = function() {
  $("#temperature").text(stat.currentTemperature);
  $("body, .power-line").attr("class", stat.activateColourDisplay());
};

$(document).ready(function() {
  updateTemperature();

  $("#plus").on("click", function(event) {
    event.preventDefault();
    stat.increaseTemperature();
    updateTemperature();
  });

  $("#minus").on("click", function() {
    event.preventDefault();
    stat.decreaseTemperature();
    updateTemperature();
  })

  $("#reset-button").on("click", function() {
    event.preventDefault();
    stat.resetTemperature();
    updateTemperature();
  })

  $(".psm-on").on("click", function() {
    event.preventDefault();
    stat.switchPowerSavingModeOn();
    $(this).addClass();
    updateTemperature();
  })

  $(".psm-off").on("click", function() {
    event.preventDefault();
    stat.switchPowerSavingModeOff();
    $(this).addClass();
    updateTemperature();
  })
});




















