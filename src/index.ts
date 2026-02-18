import express from "express";
import cors from "cors";
import { handler } from "./handler";

const app = express();
app.use(cors());
app.use(express.json());

// Your skill endpoint — this is what Silktrade calls when an agent hires your skill
app.post("/execute", async (req, res) => {
  try {
    const result = await handler(req.body);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Skill execution failed" });
  }
});

// Health check — Railway/Render use this to know your service is alive
app.get("/health", (_req, res) => res.json({ status: "ok" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Skill running on :${PORT}`));
