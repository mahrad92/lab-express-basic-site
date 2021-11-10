const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/work1", (req, res, next) => {
  res.sendFile(__dirname + "/views/work1.html");
});
app.get("/work2", (req, res, next) => {
  res.sendFile(__dirname + "/views/work2.html");
});
app.get("/work3", (req, res, next) => {
  res.sendFile(__dirname + "/views/work3.html");
});
app.get("/persons", (req, res, next) => {
  res.sendFile(__dirname + "/views/persons.html");
});

app.get("/u", (request, response, next) => {
  response.send(`
      <!doctype html>
      <html>
        <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Cat</title>
          <link rel="stylesheet" href="stylesheets/style.css" />
        </head>
        <body>
          <h1>Cat</h1>
          <p>This is my second route</p>
          <img src="images/dd.png" />
        </body>
      </html>
    `);
});

app.listen(3000, () => console.log("My first app listening on port 3000! "));
