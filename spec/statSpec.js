describe("Stat", function() {

  var stat;

  beforeEach(function() {
    stat = new Stat();
  });

  describe("By default, ", function() {
    it("has a temperature of 20 degrees", function() {
      expect(stat.currentTemperature).toBe(20);
    });

    it("has a minimum temperature of 10 degrees", function() {
      stat.decreaseTemperature(12);
      expect(stat.currentTemperature).toBe(10);
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

    xit("which when activated, limits the temperature to 25 degrees", function() {
    });

  });
});
