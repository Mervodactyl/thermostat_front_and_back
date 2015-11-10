describe("Stat", function() {

  var stat;

  beforeEach(function() {
    stat = new Stat();
  });

  describe("By default, ", function() {
    it("starts at 20 degrees", function() {
      expect(stat.currentTemperature).toEqual(20);
    });

    it("has a minimum temperature of 10 degrees", function() {
      stat.decreaseTemperature(12);
      expect(stat.currentTemperature).toEqual(10);
    });

    it("has a maximum temperature of 25 degrees", function() {
      stat.increaseTemperature(6);
      expect(stat.currentTemperature).toEqual(25);
    });
  });

  describe("current temperature ", function() {
    it("will increase by 1 when you press the 'UP' button", function() {
      stat.increaseTemperature(2);
      expect(stat.currentTemperature).toEqual(22);
    });

    it("will decrease by 1 when you press the 'DOWN' button", function() {
      stat.decreaseTemperature(2);
      expect(stat.currentTemperature).toEqual(18);
    });
  });

  describe("has a power saving mode(psm)", function() {
    it("which by default, is set to 'ON'", function() {
      expect(stat.isPowerSavingOn).toBe(true);
    });

    describe("which when  set to 'ON'", function() {
      it("and the temperature is above 25, returns the current temperature to 25 degrees", function() {
        stat.togglePowerSavingMode();
        stat.increaseTemperature(10);
        stat.togglePowerSavingMode();
        expect(stat.isPowerSavingOn).toBe(true);
        expect(stat.currentTemperature).toEqual(25);
      });

      it("and the temperature is below 25, does not affect the current temperature", function() {
        stat.togglePowerSavingMode();
        stat.togglePowerSavingMode();
        expect(stat.isPowerSavingOn).toBe(true);
        expect(stat.currentTemperature).toEqual(20);
      });

      it("can be set to 'OFF'", function() {
        stat.togglePowerSavingMode();
        expect(stat.isPowerSavingOn).toBe(false);
        stat.togglePowerSavingMode();
        expect(stat.isPowerSavingOn).toBe(true);
      });
    });

    describe("which when set to 'OFF'", function() {
      it("limits the temperature to 32 degrees", function() {
        stat.togglePowerSavingMode();
        stat.increaseTemperature(13);
        expect(stat.currentTemperature).toEqual(32);
      });
    });
  });

  describe("changes colour depending on energy usage, ", function() {
    it("turns 'low-usage' when set to 17 degrees or lower", function() {
      stat.decreaseTemperature(3);
      expect(stat.currentTemperature).toEqual(17);
      stat.activateColourDisplay();
      expect(stat.energyUsageIndicator).toEqual('low-usage');
    });

    it("reflects 'medium-usage' when set to 24 degrees or lower", function() {
      stat.increaseTemperature(4);
      expect(stat.currentTemperature).toEqual(24);
      stat.activateColourDisplay();
      expect(stat.energyUsageIndicator).toEqual('medium-usage');
    });

    it("turns 'high-usage' when set to 25 degrees or higher", function() {
      stat.togglePowerSavingMode();
      stat.increaseTemperature(5);
      expect(stat.currentTemperature).toEqual(25);
      stat.activateColourDisplay();
      expect(stat.energyUsageIndicator).toEqual('high-usage');
    });
  });

  describe("has a reset button ", function() {
    it("which when activated, resets the temperature to 20 degrees", function() {
      stat.increaseTemperature(2);
      stat.resetTemperature();
      expect(stat.currentTemperature).toEqual(20);
    });
  });

});
