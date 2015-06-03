var Stat = function() {
  this.defaultTemperature = 20;
  this.minimumTemperature = 10;
  this.powerSavingStatus = true;
  this.currentTemperature = this.defaultTemperature;
};

Stat.prototype.increaseTemperature = function(degreesToChangeBy) {
  this.currentTemperature += degreesToChangeBy;
};

Stat.prototype.decreaseTemperature = function(degreesToChangeBy) {
  if (this.currentTemperature - degreesToChangeBy < this.minimumTemperature) {
    this.currentTemperature = this.minimumTemperature;
  } else {
    this.currentTemperature -= degreesToChangeBy;
  }

};
