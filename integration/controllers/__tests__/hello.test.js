const supertest = require("supertest");
const app = require("../../app");

describe("hello controller", () => {
  test("get", async () => {
    const res = await supertest(app).get("/api/hello");
    expect(res.text).toEqual("hello");
    expect(res.statusCode).toEqual(200);
  });
});
