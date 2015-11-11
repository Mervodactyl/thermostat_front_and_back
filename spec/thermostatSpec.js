describe("Thermotat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("By default, ", function() {
    it("starts at 20 degrees", function() {
      expect(thermostat.currentTemperature).toEqual(20);
    });

    it("has a minimum temperature of 10 degrees", function() {
      thermostat.decreaseTemperature(12);
      expect(thermostat.currentTemperature).toEqual(10);
    });

    it("has a maximum temperature of 25 degrees", function() {
      thermostat.increaseTemperature(6);
      expect(thermostat.currentTemperature).toEqual(25);
    });
  });

  describe("current temperature ", function() {
    it("will increase by 1 when you press the 'UP' button", function() {
      thermostat.increaseTemperature(2);
      expect(thermostat.currentTemperature).toEqual(22);
    });

    it("will decrease by 1 when you press the 'DOWN' button", function() {
      thermostat.decreaseTemperature(2);
      expect(thermostat.currentTemperature).toEqual(18);
    });
  });

  describe("has a power saving mode(psm)", function() {
    it("which by default, is set to 'ON'", function() {
      expect(thermostat.isPowerSavingOn).toBe(true);
    });

    describe("which when  set to 'ON'", function() {
      it("and the temperature is above 25, returns the current temperature to 25 degrees", function() {
        thermostat.togglePowerSavingMode();
        thermostat.increaseTemperature(10);
        thermostat.togglePowerSavingMode();
        expect(thermostat.isPowerSavingOn).toBe(true);
        expect(thermostat.currentTemperature).toEqual(25);
      });

      it("and the temperature is below 25, does not affect the current temperature", function() {
        thermostat.togglePowerSavingMode();
        thermostat.togglePowerSavingMode();
        expect(thermostat.isPowerSavingOn).toBe(true);
        expect(thermostat.currentTemperature).toEqual(20);
      });

      it("can be set to 'OFF'", function() {
        thermostat.togglePowerSavingMode();
        expect(thermostat.isPowerSavingOn).toBe(false);
        thermostat.togglePowerSavingMode();
        expect(thermostat.isPowerSavingOn).toBe(true);
      });
    });

    describe("which when set to 'OFF'", function() {
      it("limits the temperature to 32 degrees", function() {
        thermostat.togglePowerSavingMode();
        thermostat.increaseTemperature(13);
        expect(thermostat.currentTemperature).toEqual(32);
      });
    });
  });

  describe("changes colour depending on energy usage, ", function() {
    it("turns 'low-usage' when set to 17 degrees or lower", function() {
      thermostat.decreaseTemperature(3);
      expect(thermostat.currentTemperature).toEqual(17);
      thermostat.energyUsageIndicator();
      expect(thermostat.energyUsageIndicator).toEqual("low-usage");
    });

    it("reflects 'medium-usage' when set to 24 degrees or lower", function() {
      thermostat.increaseTemperature(4);
      expect(thermostat.currentTemperature).toEqual(24);
      thermostat.energyUsageIndicator();
      expect(thermostat.energyUsageIndicator).toEqual("medium-usage");
    });

    it("turns 'high-usage' when set to 25 degrees or higher", function() {
      thermostat.togglePowerSavingMode();
      thermostat.increaseTemperature(5);
      expect(thermostat.currentTemperature).toEqual(25);
      thermostat.energyUsageIndicator();
      expect(thermostat.energyUsageIndicator).toEqual("high-usage");
    });
  });

  describe("has a reset button ", function() {
    it("which when activated, resets the temperature to 20 degrees", function() {
      thermostat.increaseTemperature(2);
      thermostat.resetTemperature();
      expect(thermostat.currentTemperature).toEqual(20);
    });
  });

});
