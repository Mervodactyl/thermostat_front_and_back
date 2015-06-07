var Stat = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
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
  if (this.powerSavingStatus === true) {
    this.powerSavingStatus = false;
    this.maximumTemperature = 32;
  } else {
    this.powerSavingStatus = true;
    this.maximumTemperature = 25;
  }
};

Stat.prototype.resetTemperature = function() {
  this.currentTemperature = this.defaultTemperature;
};
