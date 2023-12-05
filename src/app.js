const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Számológép backend fut!"
    });
});

app.listen(3000, () => {
    console.log(`A backend a http://localhost:3000/ URL-en fut!`);
});