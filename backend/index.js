import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import managementsMessageRoute from "./api/management-teams-message.js";
import partnerRoute from "./api/partners.js";
import admissionRoute from "./api/admissions.js";
import rndRoute from "./api/rnd.js";
import blogsRoute from "./api/blogs.js";

// import connectToDB from './db.js'
// connectToDB()

const PORT = process.env.PORT ? process.env.PORT : 5000;
const app = express();

app.use(
  cors({
    origin: [process.env.FRONTEND],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  })
);

app.use("/api/managements-message", managementsMessageRoute);
app.use("/api/partners", partnerRoute);
app.use("/api/admissions", admissionRoute);
app.use("/api/rnd", rndRoute);
app.use("/api/blogs", blogsRoute);

app.get("/", (req, res) => {
  res.status(200).json({ data: "data from server" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
