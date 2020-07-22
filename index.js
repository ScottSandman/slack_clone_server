require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// const { userRoutes } = require("./controllers/userController");

const app = express();
const PORT = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// const server = http.createServer(app);
// const io = socketIO(server);

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("db is connected"))
//   .catch((err) => console.error(err));

// userRoutes(app);
// adRoutes(app);
// businessRoutes(app);
// categoryRoutes(app);

// io.on("connection", (socket) => {
//   console.log("user connected");

//   socket.on("createAd", (data) => {
//     console.log("created ad");
//     socket.broadcast.emit("createdAd");
//   });

//   socket.on("deleteAd", (data) => {
//     console.log("deleted ad");
//     socket.broadcast.emit("deleteAd");
//   });

//   socket.on("updateBusinessSubscription", () => {
//     console.log("updatedBusinessSubscription");
//     socket.broadcast.emit("updateSubscription");
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// module.exports = { io };
