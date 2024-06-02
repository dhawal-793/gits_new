import express from "express";
const router = express.Router();

import { managements_message } from "../data/mangements_message.js";

router.get("/:management", async (req, res) => {
  const param = req.params.management;
  const management = param.split("-").join("_");
  try {
    if (management in managements_message) {
      res.status(200).json(managements_message[management]);
    } else res.status(404).json({ Error: "Page Not Found" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a post
// router.post("/", async (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     content: req.body.content,
//   });

//   try {
//     const savedPost = await post.save();
//     res.json(savedPost);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

export default router;
