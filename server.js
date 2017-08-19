const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(port, function() {
  console.log("Server started on port " + port + "!");
});
