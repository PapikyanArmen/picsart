// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonServer = require("json-server");

const server = jsonServer.create();

// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs");

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const filePath = path.join("db/db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(router);
server.listen(3500, () => {
  console.log("JSON Server is running");
});

// Export the Server API
// eslint-disable-next-line no-undef
module.exports = server;
