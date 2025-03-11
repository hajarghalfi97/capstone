const { MongoClient } = require("mongodb");

// MongoDB connection URI
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected to MongoDB");

        // Select the database
        const db = client.db("fitnessApp");

        return db;
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
    }
}

module.exports = connectDB;