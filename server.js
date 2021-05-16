const fs = require("fs");
const path = require("path");
const express = require("express");

const PORT = 8000;
const app = express();

const index = fs.readFileSync("index.html");

app.listen(PORT, () => {
    console.log(`Server started at: http://localhost:${PORT}/`);
});

function sendFile(location, req, res) {
    fs.readFile(location, function (err, data) {
        if (err) {
            res.send("Oops! Couldn't find that file.");
        } else {
            res.contentType(req.params.file);
            res.send(data);
        }
        res.end();
    });
}

app.get("/src/:location/:file", function (req, res) {
    sendFile(`./src/${req.params.location}/${req.params.file}`, req, res);
});

app.get("/:location/:file", function (req, res) {
    sendFile(`./${req.params.location}/${req.params.file}`, req, res);
});

app.get("/", (req, res) => {
    res.write(index);
    res.end();
});
