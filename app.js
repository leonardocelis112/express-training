const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fs = require("fs");
const Sequelize = require("sequelize");

const Todo = require("./models/todo");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/templates/list.html"));
});

app.get("/list", (req, res) => {
  Todo.findAll().then((todos) => {
    res.json({ data: todos });
  });
});

app.get("/new", (req, res) => {
  res.sendFile(path.join(__dirname + "/templates/new.html"));
});

app.post("/create", (req, res) => {
  Todo.create({ name: req.body.todo, done: false }).then(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => {
  console.log("Sever is running");
});
