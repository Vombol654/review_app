require("dotenv").config({ path: `${__dirname}/.env` });
const express = require("express");
const userRouter = require("./routes/user.route");
const connectDB = require("./db/index");
require("./db");
const app = express();
app.use(express.json());

app.use("/api/user", userRouter);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err);
  });
