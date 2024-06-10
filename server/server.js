const express = require("express");
const cors = require("cors");
const pdf = require("html-pdf");
const path = require("path");
const pdfSample1 = require("./Templates/template-1");
const pdfSample2 = require("./Templates/template-2");
const pdfSample3 = require("./Templates/template-3");
const phantomjs = require("phantomjs-prebuilt");

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-pdf', (req, res) => {
  const { template, data } = req.body;

  console.log('Received request:', req.body);

  if (!template || !data) {
    return res.status(400).send('Invalid request: template and data are required');
  }

  let selectedTemplate;
  switch (template) {
    case 'template-1':
      selectedTemplate = pdfSample1;
      break;
    case 'template-2':
      selectedTemplate = pdfSample2;
      break;
    case 'template-3':
      selectedTemplate = pdfSample3;
      break;
    default:
      console.error('Invalid template name:', template);
      return res.status(400).send('Invalid template name');
  }

  const options = {
    height: '100000px',
    width: '800px', // Adjust width as needed
    orientation: 'portrait',
    type: 'png',
    quality: '20',
    timeout: 3000,
    phantomPath: './node_modules/phantomjs-prebuilt/bin/phantomjs'
  };
  const pdfFilePath = path.join(__dirname, 'Resume.pdf');

  try {
    pdf.create(selectedTemplate(data), options).toFile(pdfFilePath, (err) => {
      if (err) {
        console.error('PDF creation error:', err);
        return res.status(500).send('Failed to create PDF');
      }
      console.log('PDF created successfully');
      res.sendFile(pdfFilePath);
    });
  } catch (error) {
    console.error('Unhandled error:', error);
    res.status(500).send('An unexpected error occurred');
  }
});


app.get("/fetch-pdf", (req, res) => {
  const pdfFilePath = path.join(__dirname, "Resume.pdf");
  res.sendFile(pdfFilePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
