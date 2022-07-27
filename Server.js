const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(cors());

// connect db
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect to DB");
  })
  .catch((err) => console.log(err));

//router
const routers = require("./routers/TodoRouter");
app.use("/v1/todo", routers);

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
