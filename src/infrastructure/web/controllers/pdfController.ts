import { PdfDownloader } from "../../pdf/PdfDownloader";
import { PdfParser } from "../../pdf/PdfParser";

export const processPdfToOCR = async (req, res) => {
  const { pdfUrl } = req.body;

  try {
    const outputDir = "./downloads";

    const filePath = await PdfDownloader.download(pdfUrl, outputDir);

    const pdfOcr = await PdfParser.parse(filePath);

    res.status(200).json({
      message: "PDF processed successfully!",
      ocr: pdfOcr,
    });
  } catch (error) {
    
    res.status(500).json({
      message: "Error processing PDF.",
      error: error.message,
    });
  }
};
