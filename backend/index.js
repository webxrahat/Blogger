const express = require("express");
const app = express();
const posts = require("./posts.json");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
 res.send("Hello World!");
});

app.get("/posts", (req, res) => {
 res.send(posts);
});

app.get("/posts/:id", (req, res) => {
 const id = parseInt(req.params.id);
 const post = posts.find((post) => post.id === id) || {};
 res.send(post);
});

app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});
