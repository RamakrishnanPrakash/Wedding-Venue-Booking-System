const express = require("express");
const env = require("dotenv");
const path = require("path");
const hbs = require("hbs");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());
app.use(express.json());
env.config({ path: "./.env" });
const port = process.env.PORT;
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "./views/partials"));
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
app.use("auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));

app.listen(port, (error) => {
  if (!error) console.log("Server running on http://127.0.0.1:" + port);
  else console.log(error);
});
