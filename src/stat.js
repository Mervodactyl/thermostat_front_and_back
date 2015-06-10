var Stat = function() {
  this.DEFAULT_TEMP = 20;
  this.currentTemperature = this.DEFAULT_TEMP;
  this.MINIMUM_TEMP = 10;
  this.powerSavingStatus = true;
  this.POWER_SAVING_ON_LOW_LIMIT = 18;
  this.MAXIMUM_TEMP = 25;
  this.POWER_SAVING_ON_MAXIMUM_TEMP = 25;
  this.POWER_SAVING_OFF_MAXIMUM_TEMP = 32;
};

Stat.prototype.increaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature + degreesToChangeBy > this.MAXIMUM_TEMP) {
    this.currentTemperature = this.MAXIMUM_TEMP;
  } else {
    this.currentTemperature += degreesToChangeBy;
  }
};

Stat.prototype.decreaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature - degreesToChangeBy < this.MINIMUM_TEMP) {
    this.currentTemperature = this.MINIMUM_TEMP;
  } else {
    this.currentTemperature -= degreesToChangeBy;
  }
};

Stat.prototype.togglePowerSavingMode = function() {
  if (this.powerSavingStatus === true) {
    this.powerSavingStatus = false;
    this.MAXIMUM_TEMP = this.POWER_SAVING_OFF_MAXIMUM_TEMP;
  } else {
    this.powerSavingStatus = true;
    this.MAXIMUM_TEMP = this.POWER_SAVING_ON_MAXIMUM_TEMP;
  }
};

Stat.prototype.activateColourDisplay = function() {
  if (this.currentTemperature < this.POWER_SAVING_ON_LOW_LIMIT) {
    this.energyUsageIndicator = 'low-usage';
  } else if (this.currentTemperature < this.POWER_SAVING_ON_MAXIMUM_TEMP) {
    this.energyUsageIndicator = 'medium-usage';
  } else {
    this.energyUsageIndicator = 'high-usage';
  }
};

Stat.prototype.resetTemperature = function() {
  this.currentTemperature = this.DEFAULT_TEMP;
};
