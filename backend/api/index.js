import express from "express";
import cors from "cors";
import { config } from "dotenv";

// import connectToDB from '../db.js';
import managementsMessageRoute from "./management-teams-message.js";
import partnerRoute from "./partners.js";
import admissionRoute from "./admissions.js";
import rndRoute from "./rnd.js";
import blogsRoute from "./blogs.js";

config();
// connectToDB()

const app = express();

app.use(express.json());
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

app.get("/", (req, res) => res.redirect(process.env.FRONTEND));

// app.listen(5000, (req, res) => {
//   console.log("api server running");
// })
export default app;
