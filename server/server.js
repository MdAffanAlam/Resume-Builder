const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const path = require("path");
const pdfSample1 = require("./Templates/template-1");
const pdfSample2 = require("./Templates/template-2");
const pdfSample3 = require("./Templates/template-3");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/create-pdf", (req, res) => {
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
    // Generate PDF
    pdf.create(selectedTemplate(data), { phantomPath: path.join(__dirname, "/usr/local/bin/phantomjs") }).toFile("Resume.pdf", (err) => {
      if (err) {
        console.error("PDF creation error:", err);
        return res.status(500).send("Failed to create PDF" ,err);
      }
      console.log("PDF created successfully");
      // Sending response after PDF creation
      res.send("<script>alert('PDF created successfully');</script>");
    });
  } catch (error) {
    console.error("Unhandled error:", error);
    res.status(500).send("An unexpected error occurred");
  }
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/Resume.pdf`);
});

app.listen(port, () => {
  console.log(`Server is running on port=${port}`);
});
