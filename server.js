

const express = require("express");
const connectDB = require("./db");  

const app = express();
const port = 3001;

app.use(express.json());  


app.get("/users", async (req, res) => {
    const db = await connectDB();
    const users = await db.collection("users").find().toArray();
    res.json(users);
});


app.post("/users", async (req, res) => {
    const db = await connectDB();
    const newUser = req.body;

    const result = await db.collection("users").insertOne(newUser);
    res.json({ message: "User added successfully!", userId: result.insertedId });
});


app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
