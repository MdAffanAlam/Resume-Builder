const express = require("express");
const cors = require("cors");
const path = require("path");
const pdfSample1 = require("./Templates/template-1");
const pdfSample2 = require("./Templates/template-2");
const pdfSample3 = require("./Templates/template-3");
const puppeteer = require("puppeteer");

const app = express();
const port = process.env.PORT || 4000;

const corsOptions = {
  origin: '', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/create-pdf', async (req, res) => {
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

  const htmlContent = selectedTemplate(data);
  const pdfFilePath = path.join(__dirname, 'Resume.pdf');

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent);
    await page.pdf({ path: pdfFilePath, format: 'A4' });

    await browser.close();
    console.log('PDF created successfully');
    res.sendFile(pdfFilePath);
  } catch (error) {
    console.error('PDF creation error:', error);
    res.status(500).send('Failed to create PDF');
  }
});

app.get("/fetch-pdf", (req, res) => {
  const pdfFilePath = path.join(__dirname, "Resume.pdf");
  res.sendFile(pdfFilePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
