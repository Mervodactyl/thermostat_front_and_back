console.log("testing, testing, 1, 2, 3, Thunderbirds are go!");
var stat = new Stat();

var updateTemperature = function() {
  $("#temperature-digits").text(stat.currentTemperature);
  $('body, #thermostat-display').attr('class', stat.activateColourDisplay());
};

$(document).ready(function() {
  updateTemperature();

  $("#increase-temperature").on("click", function(event) {
    event.preventDefault();
    stat.increaseTemperature(1);
    updateTemperature();
  });

  $("#decrease-temperature").on("click", function(event) {
    event.preventDefault();
    stat.decreaseTemperature(1);
    updateTemperature();
  });

  $("#reset-temperature").on("click", function(event) {
    event.preventDefault();
    stat.resetTemperature();
    updateTemperature();
  });

  $("#power-saving-mode").on("click", function(event) {
    event.preventDefault();
    stat.togglePowerSavingMode();
    updateTemperature();
  });

});
