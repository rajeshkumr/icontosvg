var convertor = require('../convertor');

describe("Translate module", () => {
  test("convert dummy image into sg", async () => {
    try {
      const result = await convertor("./uploads/dummy.jpeg");
      console.log("Dummy image output",result);
      expect(result).toBeTruthy();
    } catch (err) {
      throw err;
    }
  });
});
