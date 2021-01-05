const express = require("express");
const bodyParser = require("body-parser");
// const usersRouter = require("./routers/users");
const authRouter = require("./routers/auth");
const { logger } = require("./middleware");
const app = express();
const port = process.env.PORT || 4000;

// FIGURE OUT THE CORS ERROR
// TypeError: NetworkError when attempting to fetch resource.


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Content-Type", "application/json");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "*");
  next();
});


app.use(bodyParser.json());
app.use(logger);
// app.use("/users", usersRouter);
app.use("/auth", authRouter);

//  app.get("/", (req, res) => {
//    res.send("Welcome to our server!");
//  });

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
