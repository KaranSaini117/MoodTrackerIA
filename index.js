const { deserializeStream } = require("bson");
const express = require("express");
const chance = require("chance").Chance();
const shuffleArray = require("shuffle-array");

const app = express();

app.use(express.static("public"));

const data = {
    headers: ["Username", "Password"],
    rows: new Array(10).fill(undefined).map(() => {
        return [
            chance.name(),
            chance.age()
        ]
    })
};
app.get("/data", (req, res) => {
    res.json({
        headers: data.headers,
        rows: data.rows,
        lastUpdated: new Date().toISOString()
    });
});

app.listen(3001, () => console.log("app is running"));