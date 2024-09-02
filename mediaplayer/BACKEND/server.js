import express, { urlencoded } from "express";
import pg from "pg";
import fs from "fs";
import path from "path";
import { log } from "console";

const app = express();
const port = 3000;

const pg = new pg({
    
})

app.use(express.json);
app.use(urlencoded({extended: true}));

app.post("/upload", async (req, res) => {
    const [title, artist] = req.body;

    const file = req.files?.song;

    if(!file) {
        console.log("Error - No File");
    }

    const fileData = fs.readFileSync(file.path);
    console.log(fileData);
    
})

app.listen(port, (err) => {
    console.log(`Server running on port ${port}`);
})