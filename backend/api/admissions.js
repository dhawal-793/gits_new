import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const admissionsDirectory = path.join(__dirname, "../data/admissions");

if (!fs.existsSync(admissionsDirectory)) {
  fs.mkdirSync(admissionsDirectory);
}

router.get("/:admission", (req, res) => {
  const { admission } = req.params;
  // console.log(admission);
  const filePath = path.join(admissionsDirectory, `${admission}.mdx`);
  // console.log(filePath);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // console.log(err);
      return res.status(404).send("File not found");
    }
    const { data: frontmatter, content } = matter(data);
    res.send({
      title: frontmatter.title,
      content: content,
    });
  });
});

export default router;

// router.get("/", (req, res) => {
//   fs.readdir(adissionsDirectory, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: "Failed to load posts" });
//     }
//     const posts = files.map((file) => {
//       const content = fs.readFileSync(path.join(adissionsDirectory, file), "utf-8");
//       const [title, ...body] = content.split("\n");
//       return {
//         id: file.replace(".mdx", ""),
//         title: title.replace("# ", ""),
//         content: body.join("\n"),
//       };
//     });
//     res.json(posts);
//   });
// });

// router.post("/", (req, res) => {
//   const { title, content } = req.body;
//   const id = Date.now().toString();
//   const markdownContent = `# ${title}\n\n${content}`;
//   fs.writeFile(
//     path.join(adissionsDirectory, `${id}.md`),
//     markdownContent,
//     (err) => {
//       if (err) {
//         return res.status(500).json({ error: "Failed to save post" });
//       }
//       res.json({ id, title, content });
//     }
//   );
// });

// export default router;
