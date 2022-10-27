const app = require("./app");
const request = require("supertest");

describe("GET / - simple api endpoint", () => {
  it("Biodata API request", async () => {
    const response = await request(app).get("/api/biodata");
    const body = Object.keys(response.body);
    expect(response.status).toBe(200);
    expect(response.header["content-type"]).toEqual(
      "application/json; charset=utf-8"
    );
    expect(body.length).toBe(4);
  });
});
