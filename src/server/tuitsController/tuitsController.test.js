const Tuit = require("../../database/models/Tuit");
const Tuitero = require("../../database/models/Tuitero");
const {
  getTuits,
  getUsers,
  publishTuit,
  newTuiteroController,
} = require("./tuitsController");

jest.mock("../../database/models/Tuit");
jest.mock("../../database/models/Tuitero");

describe("Given a getTuits controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("When it recieves a GET request ", () => {
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

describe("Given a getUsers controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("When it recieves a GET request ", () => {
    test("Then it should return a 200 status and a tuiteros array", async () => {
      const users = [
        { name: "blablabla", username: "blablabla" },
        { name: "blobloblo", username: "blobloblo" },
      ];
      const next = jest.fn();
      const res = { json: jest.fn() };

      Tuitero.find = jest.fn().mockResolvedValue(users);
      await getUsers(null, res, next);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe("Given a newTuitero controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("When it recieves a POST request ", () => {
    test("Then it should return a 200 status and a tuiteros array", async () => {
      const users = [
        { name: "blablabla", username: "blablabla" },
        { name: "blobloblo", username: "blobloblo" },
      ];
      const next = jest.fn();
      const res = { json: jest.fn() };

      Tuitero.find = jest.fn().mockResolvedValue(users);
      await getUsers(null, res, next);

      expect(res.json).toHaveBeenCalled();
    });
  });
});

describe("Given an publishTuit controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a request with a new text to publish", () => {
    test("Then it should call method json and respond with a 201 status", async () => {
      const req = {
        body: {
          text: "blablabla",
          likes: 0,
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
      };

      const next = jest.fn();
      const newTuit = {
        text: "blablabla",
        likes: 0,
      };

      Tuit.create = jest.fn().mockResolvedValue(newTuit);
      await publishTuit(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});

describe("Given an publishTuit controller", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  describe("When it receives a request with a new text to publish", () => {
    test("Then it should call method json and respond with a 201 status", async () => {
      const req = {
        body: {
          name: "blablabla",
          username: "blablabla",
        },
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
      };

      const next = jest.fn();
      const newTuitero = {
        name: "blablabla",
        username: "blablabla",
      };

      Tuitero.create = jest.fn().mockResolvedValue(newTuitero);
      await newTuiteroController(req, res, next);

      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});
