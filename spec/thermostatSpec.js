describe('Thermostat', function() {

  var thermostat;

  describe('By default, it ', function() {

    it('should start at 20 degrees', function() {
      thermostat = new Thermostat();
      expect(thermostat.temperature).toEqual(thermostat.defaultTemperature);
    });

    it("be on power saving mode at start", function() {
      thermostat = new Thermostat();
      expect(thermostat.powerSavingMode).toBe(true);
    });

  });

});
