const Tuit = require("../../database/models/Tuit");
const { getTuits } = require("./tuitsController");

describe("Given a getTuits controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("When it recieves a GET arequest ", () => {
    test("Then it should return a 200 status and a tuits array", async () => {
      const tuits = [{ text: "blablabla" }, { text: "blobloblo" }];
      const next = jest.fn();
      const res = { json: jest.fn() };
      Tuit.find = jest.fn().mockResolvedValue(tuits);
      await getTuits(null, res, next);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
