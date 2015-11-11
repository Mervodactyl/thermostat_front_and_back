console.log("testing, testing, 1, 2, 3, Thunderbirds are go!");
var thermostat = new Thermostat();

var updateTemperature = function() {
  $("#temperature-digits").text(thermostat.currentTemperature);
  $('body, #thermostat-display').attr('class', thermostat.energyUsageIndicator());
};

$(document).ready(function() {
  updateTemperature();

  $("#increase-temperature").on("click", function(event) {
    event.preventDefault();
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

  $("#decrease-temperature").on("click", function(event) {
    event.preventDefault();
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $("#reset-temperature").on("click", function(event) {
    event.preventDefault();
    thermostat.resetTemperature();
    updateTemperature();
  });

  $("#power-saving-mode").on("click", function(event) {
    event.preventDefault();
    thermostat.togglePowerSavingMode();
    updateTemperature();
  });

});
