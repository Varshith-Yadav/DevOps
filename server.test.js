const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./server");

chai.use(chaiHttp);
const expect = chai.expect;

describe("Server API Tests", () => {
  it("should return Hello, World! on GET /", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello, World!");
        done();
      });
  });
});
