import express from "express";
import pkg from "pg";
import fs from "fs";
import path from "path";
import { log } from "console";
import dotnev from "dotenv";

dotnev.config();

const { Pool } = pkg
const app = express();
const port = 3000;

const pg = new Pool({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE
})

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.post("/upload", async (req, res) => {
    const [title, artist] = req.body;

    const file = req.filesn?.song;

    if(!file) {
        console.log("Error - No File");
    }

    const fileData = fs.readFileSync(file.path);
    console.log(fileData);

    try {
        const result = pg.query(
            `INSERT INTO songs (title, artist, file) VALUES ($1, $2, $3) RETURNING *`,
            [title, artist, file]
        );
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).send('Error uploading the song');
    } finally {
        pg.end(() => {
            console.log("pg closed");
        });
    }
    
})

app.listen(port, (err) => {
    console.log(`Server running on port ${port}`);
})