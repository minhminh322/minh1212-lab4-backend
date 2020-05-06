//express is the framework we're going to use to handle requests
const express = require("express");

var router = express.Router();

const bodyParser = require("body-parser");
//This allows parsing of the body of POST requests, that are encoded in JSON
router.use(bodyParser.json());

router.get("/", (request, response) => {
  response.send({
    message: "Hello, you sent a GET request",
  });
});
router.post("/", (reqeust, response) => {
  response.send({
    message: "Hello, you sent a POST request",
  });
});

module.exports = router;
