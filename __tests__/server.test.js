"use strict";

const server = require("../server.js");
const supertest = require("supertest");
const request = supertest(server.app); // use the app from the server (server from the line:3)

describe("express server", () => {
  // "/" (200)
  it("shoud check the (Hello) it works successfully", async () => {
    // arrange
    let path = "/";
    let status = 200;
    let text = "Hello";

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status); // to be  (same same)
    expect(response.text).toBe(text); // to be  (same same)
  });

  // "/data" (200)
  it("shoud check the (data) it works successfully", async () => {
    // arrange
    let path = "/data";
    let status = 200;

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object"); // to Equal  // .body (the body of the page)
  });

  // (500)
  it("should check 500 errors", async () => {
    // arrange
    let path = "/bad";
    let status = 500;

    // act
    const response = await request.get(path);

    // assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual("object");
  });

  // (404)
  it("shoud check 404 errors", async () => {
    // arrange
    let path = "/notfound";
    let status = 404;
    // act
    const response = await request.get(path);
    // assert
    expect(response.status).toBe(status);
  });
});
