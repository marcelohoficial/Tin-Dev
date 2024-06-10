const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose.connect(
  "mongodb+srv://dev:0aEPCQarHcTCLMcy@cluster0-tindev.kzdk4pq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0-tindev",
  {
    useNewUrlParser: true,
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
