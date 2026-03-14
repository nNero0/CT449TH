const express = require("express");
const cors = require("cors");

const app = express();
const contactsRouter = require("./app/routes/contact.routes");
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

app.use("/api/contacts", contactsRouter);
module.exports = app;

// const express = require("express");
// const cors = require("cors");
// const ApiError = require("./app/api-errors");

// const app = express();
// const contactsRouter = require("./app/routes/contact.routes");
// app.use(cors());
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to contact book application." });
// });

// app.use("/api/contacts", contactsRouter);

// app.use((req, res, next) => {
//   return next(new ApiError(404, "Resource not found"));
// });

// app.use((error, req, res, next) => {
//   return res.status(error.statusCode || 500).json({
//     message: error.message || "Internal Server Error",
//   });
// });

// module.exports = app;
