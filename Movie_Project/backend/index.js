const express = require("express");
const setAssociation = require("./models/db");
const authRouter = require("./routers/auth.router");
const app = express();
const PORT = 8080;
const cors = require('cors');

// execute creating association
setAssociation();

// use middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// register authRouter for our server
app.use("/auth", authRouter);


app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});