import express from "express";
import path from "path";

const app = express();
const port = 7000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"./index.html"))
// });
app.listen(process.env.PORT || 7000, () => {
  console.log(`listening at http://localhost:${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

app.all("*", (req, res, next) => {
  let reqPath = req.url;
  let stringx = reqPath.slice(1).split("/");
  let info;

  if (stringx[0]) {
    for (let i = 0; i < stringx.length; i++) {
      const word = stringx[i];
      if (i == 0) {
        info = randomInfo[word];
      } else {
        info = info[word];
      }
    }
  } else {
    info = randomInfo;
  }

  res.json(info);
  next();
});

let randomInfo = {
  animal: [
    { name: "doggy", legs: 4 },
    { name: "cow", legs: 4 },
    { name: "godzilla", legs: 4 },
  ],
  where: "Earthling",
};
