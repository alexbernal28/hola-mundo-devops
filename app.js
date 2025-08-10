import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    res.send("¡Hola Mundo desde DevOps! Ahora haciendo deploy con Render!! 🚀");
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
})