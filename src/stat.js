var Stat = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 32;
  this.powerSavingStatus = true;
  this.currentTemperature = this.defaultTemperature;
};

Stat.prototype.increaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature + degreesToChangeBy > this.maximumTemperature) {
    this.currentTemperature = this.maximumTemperature;
  } else {
    this.currentTemperature += degreesToChangeBy;
  }
};

Stat.prototype.decreaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature - degreesToChangeBy < this.minimumTemperature) {
    this.currentTemperature = this.minimumTemperature;
  } else {
    this.currentTemperature -= degreesToChangeBy;
  }
};

Stat.prototype.togglePowerSavingMode = function() {
  this.powerSavingStatus = false;
};
//
// Stat.prototype.changePowerSavingStatus = function() {
//   if (this.powerSavingStatus = true) {
//     this.maximumTemperature = 25;
//   } else {
//     this.maximumTemperature = this.maximumTemperature;
//   }
// };
