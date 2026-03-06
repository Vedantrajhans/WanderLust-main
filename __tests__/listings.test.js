const request = require("supertest");
const app = require("../app");

describe("GET /listings", () => {
  it("should return 200 or redirect", async () => {
    const res = await request(app).get("/listings");
    expect([200, 302]).toContain(res.statusCode);
  });
});

describe("GET /nonexistent-route", () => {
  it("should return 404", async () => {
    const res = await request(app).get("/this-does-not-exist");
    expect(res.statusCode).toBe(404);
  });
});
