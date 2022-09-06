const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connectMongoDB =  require("./configs/mongodb");

//connectDB
connectMongoDB();

//middleware
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    return res.send(healthcheck);
});

//import routes
const todoRoute = require("./routes/todoRoute");

//routes
app.use("/api/todos/", todoRoute);

app.listen(port, () => {
    console.log(`Server is listen on port ${port}`);
})

