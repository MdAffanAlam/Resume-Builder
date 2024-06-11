const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const path = require("path");
const pdfSample1 = require("./Templates/template-1");
const pdfSample2 = require("./Templates/template-2");
const pdfSample3 = require("./Templates/template-3");
const phantomjs = require('phantomjs-prebuilt');

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: ['http://127.0.0.1:5173'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log("PhantomJS Path:", phantomjs.path);
  res.send(`PhantomJS Path: ${phantomjs.path}`);
});

app.post("/create-pdf", (req, res) => {
  const { template, data } = req.body;
  console.log("Received request with template:", template);
  console.log("Data:", data);

  let selectedTemplate;
  switch (template) {
    case "template-1":
      selectedTemplate = pdfSample1;
      break;
    case "template-2":
      selectedTemplate = pdfSample2;
      break;
    case "template-3":
      selectedTemplate = pdfSample3;
      break;
    default:
      console.error("Invalid template name:", template);
      return res.status(400).send("Invalid template name");
  }

  try {
    const htmlContent = selectedTemplate(data);
    console.log("Generated HTML content:", htmlContent);

    const options = { 
      format: 'A4', 
      phantomPath: phantomjs.path // Dynamically setting the path to PhantomJS
    };

    pdf.create(htmlContent, options).toFile(path.join(__dirname, "Resume.pdf"), (err, result) => {
      if (err) {
        console.error("PDF creation error:", err);
        return res.status(500).send("Failed to create PDF");
      }
      console.log("PDF created successfully:", result);
      res.status(200).send("PDF created successfully");
    });
  } catch (error) {
    console.error("Unhandled error:", error);
    res.status(500).send("An unexpected error occurred");
  }
});

app.get("/fetch-pdf", (req, res) => {
  const filePath = path.join(__dirname, "Resume.pdf");
  res.sendFile(filePath, err => {
    if (err) {
      console.error("File sending error:", err);
      res.status(500).send("Failed to fetch PDF");
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log("PhantomJS Path:", phantomjs.path); // Log the path to PhantomJS
});
