import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

var host = process.env.HOST || "0.0.0.0";
var port = process.env.PORT || 8080;

server.on("listening", () => {
  console.log(`Server is running on ${host}:${port}`);
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: true}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get("/check", (request, response) => {
  response.send(200);
});

const onUncaughtException = err => {
  console.log(" UNCAUGHT EXCEPTION ");
  console.log("[Inside 'uncaughtException' event] " + err.stack || err.message);
};

process.on("uncaughtException", onUncaughtException.bind(null));

server.listen(port, host);

export default app;
