describe('Thermostat', function() {

  var thermostat;

  describe('By default, ', function() {

    it('should start at 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(defaultTemperature);
    });

  });

});
