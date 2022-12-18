const express = require("express");
const setAssociation = require("./models/db");
const authRouter = require("./routers/auth.router");
const app = express();
const PORT = 8080;
const cors = require('cors');
const movieRouter = require("./routers/movies.router");
const resourceRouter = require("./routers/resource.router");
const userRouter = require("./routers/users.router");
const sendMailRouter = require("./routers/mail.router");

// use middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// register authRouter for our server
app.use("/auth", authRouter);
app.use("/movies", movieRouter);
app.use("/resource", resourceRouter);
app.use("/user", userRouter);
app.use("/email", sendMailRouter);

// execute creating association
setAssociation();

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});