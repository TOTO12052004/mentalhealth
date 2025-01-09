const app = require("./src/app");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const createChats = require("./src/services/chats/create");
const findOneChat = require("./src/services/chats/find");
const sequelize = require("./src/config/database");
const port = 3001;

const server = createServer(app);
const io = new Server(server, {
  path: "/socket-io",
  cors: {
    origin: (origin, callback) => {
      if (origin === "http://localhost:3000") {
        callback(null, true); // Izinkan origin
      } else {
        callback(new Error("Not allowed by CORS")); // Tolak origin
      }
    },
  },
});

io.on("connection", (socket) => {
  console.log("a user connected boy");
  socket.on("consultation-chatting", async (body) => {
    try {
      await createChats(body);
      const chatData = await findOneChat(body);
      io.emit("consultation-chatting", chatData);
    } catch (err) {
      io.emit("consultation-chat-error", err);
    }
  });
});


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
