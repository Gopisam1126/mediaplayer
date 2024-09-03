import express from "express";
import pkg from "pg";
import multer from "multer"; // Import multer
import fs from "fs";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const { Pool } = pkg;
const app = express();
const port = 3000;

// Initialize PostgreSQL client
const pg = new Pool({
    host: "localhost",
    port: process.env.DB_PORT,
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
});

// Use CORS middleware
app.use(cors());

// Setup multer for file handling
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/songs", async (req, res) => {
    try {
        const musics = await pg.query(`SELECT * FROM songs`);
        res.json(musics.rows);
    } catch (err) {
        console.log("Error Retriveing Songs : ", err);
        res.sendStatus(500).send("Error Retriveing Songs!!");
    }
})

app.post("/upload", upload.single('song'), async (req, res) => {
    const { title, artist } = req.body;
    const file = req.file;

    if (!file) {
        console.log("Error - No File");
        return res.status(400).send("No file uploaded");
    }

    try {
        const result = await pg.query(
            `INSERT INTO songs (title, artist, file) VALUES ($1, $2, $3) RETURNING *`,
            [title, artist, file.buffer]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error("Error uploading the song:", err);
        res.status(500).send('Error uploading the song');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
