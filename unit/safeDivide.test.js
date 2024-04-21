const safeDivide = require("./safeDivide.js");

// test suite - "pudelko" na testy zgrupowanie testow dla np jednej funkcji
// jak wiele testów chcemy przeprowadzić
describe("safeDivide", () => {
  //hook - funkcja ktora wykona sie przed wszystkimi testami
  beforeAll(() => {
    console.log(`before all tests`);
  });

  //hook - funkcja ktora wykona sie po wszystkich testach
  afterAll(() => {
    console.log(`after all tests`);
  });

  //hook - funkcja ktora wykona sie przed kazdym testem
  beforeEach(() => {
    console.log(`before each test`);
  });

  //hook - funkcja ktora wykona sie po kazdym testem
  afterEach(() => {
    console.log(`after each test`);
  });

  // testy
  test("10 / 2 to be 5", () => {
    expect(safeDivide(10, 2)).toBe(5);
  });

  test("10 / 0 to be 0", () => {
    expect(safeDivide(10, 0)).toBe(0);
  });

  test("a / 2 to be error", () => {
    expect(() => safeDivide("a", 2)).toThrow("not a number");
  });
});
