const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const path = require("path");
const pdfSample1 = require("./Templates/template-1");
const pdfSample2 = require("./Templates/template-2");
const pdfSample3 = require("./Templates/template-3");

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const puppeteer = require('puppeteer');

app.post("/create-pdf", async (req, res) => {
  const { template, data } = req.body;
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
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(selectedTemplate(data));
    await page.pdf({ path: 'Resume.pdf', format: 'A4' });
    await browser.close();
    console.log("PDF created successfully");
    // Sending response after PDF creation
    res.send("<script>alert('PDF created successfully');</script>");
  } catch (error) {
    console.error("PDF creation error:", error);
    res.status(500).send("Failed to create PDF", error);
  }
});


app.get("/fetch-pdf", (req, res) => {
  res.sendFile(path.join(__dirname, "Resume.pdf"));
});

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
