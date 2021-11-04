import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
import cors from "cors";
import route from "./routes/index.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors());

//////////////////

app.use(express.json());

route(app);

// handel err message
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    // process.env : truy cận đến biến env
    `Server running in ${process.env.NODE_ENV} on mode ${PORT}`.brightYellow
      .underline
  );
});
