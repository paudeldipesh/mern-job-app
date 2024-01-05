import express, { json } from "express";
const app = express();
import morgan from "morgan";
import * as dotenv from "dotenv";
dotenv.config();
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({
    message: "data received",
    data: req.body,
  });
});

// Get all jobs
app.get("/api/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

// Create a job
app.post("/api/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    res.status(400).json({ msg: "please provide company and position" });
    return;
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(201).json({ job });
});

// Get a job
app.get("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});

// Edit a job
app.patch("/api/jobs/:id", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.send(400).json({ msg: "please provide company and position" });
  }

  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
});

// Delete a job
app.delete("/api/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJob = jobs.filter((job) => job.id !== id);
  jobs = newJob;
  res.status(200).json({ msg: "job deleted" });
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
