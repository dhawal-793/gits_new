import express from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const blogsDirectory = path.join(__dirname, "../data/blogs");

if (!fs.existsSync(blogsDirectory)) {
  fs.mkdirSync(blogsDirectory);
}

router.get("/", (req, res) => {
  fs.readdir(blogsDirectory, (err, files) => {
    if (err) {
      return res.status(500).send("Unable to read blogs directory");
    }

    const blogs = files
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const filePath = path.join(blogsDirectory, file);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data: frontmatter } = matter(fileContents);
        const url=file.split('.')[0]
        return {
          title: frontmatter.title,
          image: frontmatter.image,
          meta_description: frontmatter.meta_description,
          url,
        };
      });

    res.send(blogs);
  });
});

router.get("/:blog", (req, res) => {
  const { blog } = req.params;
  const filePath = path.join(blogsDirectory, `${blog}.mdx`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // console.log(err);
      return res.status(404).send("File not found");
    }
    const { data: frontmatter, content } = matter(data);
    res.send({
      title: frontmatter.title,
      image: frontmatter.image,
      content: content,
    });
  });
});

export default router;
