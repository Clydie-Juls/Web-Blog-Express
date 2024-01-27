import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import { blogPosts, sortBlogPosts } from "./data.js";

const app = express();
const port = process.env.PORT || 3000;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  sortBlogPosts();
  res.render("index.ejs", {
    bPosts: blogPosts,
  });
  res.statusCode = 200;
});

app.get("/write", (req, res) => {
  res.render("write-blog.ejs");
  res.statusCode = 200;
});

app.get("/view/:id", (req, res) => {
  const index = blogPosts.findIndex((x) => x.id == req.params.id);
  blogPosts[index].views++;
  res.render("view-blog.ejs", {
    bPost: blogPosts[index],
  });
  sortBlogPosts();
  res.statusCode = 200;
});

app.post("/submit", upload.single("image"), (req, res) => {
  blogPosts.push({
    id: blogPosts.length,
    title: req.body.title,
    date: formatDate(new Date()),
    views: 0,
    image: "data:image/*;base64," + req.file.buffer.toString("base64"),
    description: req.body.description,
  });
  sortBlogPosts();
  res.statusCode = 201;
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function formatDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return months[monthIndex] + " " + day + ", " + year;
}
