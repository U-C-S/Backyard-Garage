const express = require("express");
const path = require("path");

const app = express();
const port = 7000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"./index.html"))
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.all("*", (req, res, next) => {
  let reqPath = req.url;
  let stringx = reqPath.slice(1).split("/");
  let info;
  for (let i = 0; i < stringx.length; i++) {
    const word = stringx[i];
    if (i == 0) {
      info = randomInfo[word];
    } else {
      info = info[word];
    }
  }
  res.send(info);
});

let randomInfo = {
  animal: [
    { name: "dog", legs: 4 },
    { name: "cow", legs: 4 },
    { name: "godzilla", legs: 4 },
  ],
  where: "Earth",
};
