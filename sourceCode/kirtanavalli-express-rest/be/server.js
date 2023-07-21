const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors({ origin: "*" }));

server.get("/", (req, res) => {
  res.json({ message: "ok" });
});

server.use("/kirtans", require("./routes/kirtans"));
server.use("/categories", require("./routes/categories"));
server.use("/sub-categories", require("./routes/sub-categories"));

const root = express();
const contextPath = "/api";
root.use(contextPath, server);

if (!module.parent) {
  root.listen(3000, () => {
    console.log(`🚀  Server ready at: http://localhost:3000${contextPath}`);
  });
}
