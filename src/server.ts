import * as express from "express";

const app = express();

app.listen(9876, ()=> console.log("Server running on 9876!"));

app.get("/", (req, res) => {
    res.send("Awesom! We're live debugging this!");
});