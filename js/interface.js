console.log("testing, testing, 1, 2, 3, Thunderbirds are go!");
var stat = new Stat(); // works

var updateTemperature = function() {
  $("#temperature").text(stat.currentTemperature);
  $("body, .power-line").attr("class", stat.activateColourDisplay());
}; // power-line not starting on correct colour

$(document).ready(function() {
  updateTemperature();

  $("#plus").on("click", function(event) {
    event.preventDefault();
    stat.increaseTemperature(1);
    updateTemperature();
  });

  $("#minus").on("click", function(event) {
    event.preventDefault();
    stat.decreaseTemperature(1);
    updateTemperature();
  })

  $("#reset-button").on("click", function(event) {
    event.preventDefault();
    stat.resetTemperature();
    updateTemperature();
  })

  $(".power-line").on("click", function(event) {
    event.preventDefault();
    stat.togglePowerSavingMode();
    $(this).toggleClass();
    updateTemperature();
  }) // powerline not changing colour
});




















