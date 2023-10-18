import express from "express";
import cors from "cors";
import mainRouters from "./src/routers/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", mainRouters);

app.listen(8000, () =>
  console.log("Server is running at http://localhost:8000")
);
