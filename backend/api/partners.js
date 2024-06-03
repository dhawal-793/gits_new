import express from "express";
const router = express.Router();

import { training_partners } from "../data/training_partners.js";
import { assessment_partners } from "../data/assessment_partners.js";

router.get("/assessment-partners", async (req, res) => {
  try {
    res.status(200).json(assessment_partners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/training-partners", async (req, res) => {
  try {
    res.status(200).json(training_partners);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;
