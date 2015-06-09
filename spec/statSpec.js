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
    it("will increase by 2 when you press the 'UP' button", function() {
      stat.increaseTemperature(2);
      expect(stat.currentTemperature).toEqual(22);
    });

    it("will decrease by 2 when you press the 'DOWN' button", function() {
      stat.decreaseTemperature(2);
      expect(stat.currentTemperature).toEqual(18);
    });
  });

  describe("has a power saving mode(psm)", function() {
    it("which by default, is set to 'ON'", function() {
      expect(stat.powerSavingStatus).toBe(true);
    });

    it("which can be set to 'OFF'", function() {
      stat.togglePowerSavingMode();
      expect(stat.powerSavingStatus).toBe(false);
      stat.togglePowerSavingMode();
      expect(stat.powerSavingStatus).toBe(true);
    });

    it("which when 'OFF', limits the temperature to 32 degrees", function() {
      stat.togglePowerSavingMode();
      stat.increaseTemperature(13);
      expect(stat.currentTemperature).toEqual(32);
    });
  });

  describe("changes colour depending on energy usage, ", function() {
    it("turns 'GREEN' when set to 17 degrees or lower", function() {
      stat.decreaseTemperature(3);
      expect(stat.currentTemperature).toEqual(17);
      stat.activateColourDisplay();
      expect(stat.energyUsageIndicator).toEqual('low-usage');
    });

    it("turns 'YELLOW' when set to 24 degrees or lower", function() {
      stat.increaseTemperature(4);
      expect(stat.currentTemperature).toEqual(24);
      stat.activateColourDisplay();
      expect(stat.energyUsageIndicator).toEqual('medium-usage');
    });

    it("turns 'RED' when set to 25 degrees or higher", function() {
      stat.togglePowerSavingMode();
      stat.increaseTemperature(6);
      expect(stat.currentTemperature).toEqual(26);
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
