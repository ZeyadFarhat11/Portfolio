const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const addReactProject = require("./utils/addReactProject");

app.use(express.json());
app.use(cors());

// addReactProject(app, "comfysloth-shop");
// app.use(
//   "/comfysloth-shop/*?",
//   (req, res, next) => {
//     console.log(`test`);
//     next();
//   },
//   express.static(path.join(__dirname, "projects/comfysloth-shop/build"), {})
// );
// app.use("/comfysloth-shop/:path?", (req, res) => {
//   res.sendFile(
//     path.join(__dirname, "projects/comfysloth-shop/build/index.html")
//   );
// });

addReactProject(app, "comfysloth-shop");

app.use(express.static(path.join(__dirname, "dist")));
app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});
app.listen(8000, () => {
  console.log(`SERVER STARTED
    LOCAL: http://localhost:8000`);
});
