const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const port = process.env.PORT || 5001;

//MY ROUTES IMPORT
const testRoutes = require("./routes/testRoute");

const app = express();

//INITIALLIZING KNEX CONNECTION
const knex = require("knex")(require("./config/keys"));
app.knexConnection = knex;

//USE OF MIDDLEWARES
app.use(cors());
app.use(bodyParser.json({ limit: "500mb" })); //STUDY BOTH LINE 16 &  17
app.use(bodyParser.urlencoded({ extended: false, limit: "500mb" }));
app.use(cookieParser());

app.use(morgan(":method :url :status - :response-time ms")); //OPTIONAL___________

//TEST ROUTE
app.get("/", (req, res) => {
  res.json({ message: "Server running" });
});

//MY ROUTES
app.use("/api", testRoutes);

//STARTING A SERVER
app.listen(port, () => console.log(`Server is running at port ${port}`));
