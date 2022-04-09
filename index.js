const express = require("express");
const app = express();
//setting up route below
app.use("/", (req, res) => {
  res.send("welcome to our application");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});
