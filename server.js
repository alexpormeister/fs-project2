const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so your React frontend can talk to this API
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("DB Connection Error:", err));

// Snippet Schema
const snippetSchema = new mongoose.Schema({
  title: { type: String, required: true },
  language: { type: String, required: true, lowercase: true },
  code: { type: String, required: true },
  description: String,
  tags: [String],
  created_at: { type: Date, default: Date.now },
});

const Snippet = mongoose.model("Snippet", snippetSchema);

// --- ROUTES ---

// Health Check
app.get("/", (req, res) => {
  res.send("Snippet API is running!");
});

// READ ALL (GET) - Supports filtering by ?lang=
app.get("/api/snippets", async (req, res) => {
  try {
    const filter = {};
    if (req.query.lang) {
      filter.language = req.query.lang.toLowerCase();
    }
    const limit = parseInt(req.query.limit) || 100;
    const snippets = await Snippet.find(filter)
      .sort({ created_at: -1 })
      .limit(limit);
    res.json(snippets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE (POST)
app.post("/api/snippets", async (req, res) => {
  try {
    const newSnippet = new Snippet(req.body);
    const savedSnippet = await newSnippet.save();
    res.status(201).json(savedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ONE BY ID (GET)
app.get("/api/snippets/:id", async (req, res) => {
  try {
    const snippet = await Snippet.findById(req.params.id);
    if (!snippet) return res.status(404).json({ message: "Not found" });
    res.json(snippet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE (PUT)
app.put("/api/snippets/:id", async (req, res) => {
  try {
    const updatedSnippet = await Snippet.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSnippet)
      return res.status(404).json({ message: "Snippet not found" });
    res.json(updatedSnippet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE (DELETE)
app.delete("/api/snippets/:id", async (req, res) => {
  try {
    const deletedSnippet = await Snippet.findByIdAndDelete(req.params.id);
    if (!deletedSnippet)
      return res.status(404).json({ message: "Snippet not found" });
    res.json({ message: "Snippet deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
