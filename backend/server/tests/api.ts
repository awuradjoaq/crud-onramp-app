import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import "mocha";
import assert from "assert";
import { testUser } from "../config";
import { retrieveMessages } from "../controllers/messages";

let address = "http://localhost:3001";

chai.use(chaiHttp);

describe("API calls", () => {
  describe("get all blog posts", function () {
    it("gets all messages from database", (done) => {
      chai
        .request(address)
        .get("/blog")
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res).to.have.status(200);
          expect(res).to.be.an("object");
          done();
        });
    });
  });

  describe("post blog posts", () => {
    it("should not post message to database", (done) => {
      chai
        .request(address)
        .post("/blog")
        .send({
          title: "testing",
          post: "shouldnt post",
          username_id: testUser,
          auth_id: "",
        })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res).to.have.status(400);
          done();
        });
    });
  });
  describe("update blog posts", () => {
    it("should not update message to database", (done) => {
      chai
        .request(address)
        .post("/blog")
        .send({
          title: "testing",
          post: "shouldnt post",
          username_id: testUser,
          auth_id: "",
        })
        .end((err, res) => {
          if (err) {
            done(err);
          }
          expect(res).to.have.status(400);
          done();
        });
    });
  });
});
