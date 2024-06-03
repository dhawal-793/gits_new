import express from "express";
import cors from "cors";
import { config } from "dotenv";

// import connectToDB from '../db.js';
import managementsMessageRoute from "./management-teams-message.js";
import partnerRoute from "./partners.js";

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

app.get("/", (req, res) => res.redirect(process.env.FRONTEND));

export default app;
