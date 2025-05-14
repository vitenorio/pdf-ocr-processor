import { Mistral } from "@mistralai/mistralai";
import fs from "fs";

const apiKey = process.env.MISTRAL_API_KEY;
const client = new Mistral({ apiKey: apiKey });

export class PdfParser {
  static async parse(pdfPath: any): Promise<any> {
    try {
      const base64Pdf = await this.encodePdf(pdfPath);
      const ocrResponse = await client.ocr.process({
        model: "mistral-ocr-latest",
        document: {
          type: "document_url",
          documentUrl: "data:application/pdf;base64," + base64Pdf,
        },
        includeImageBase64: true,
      });
console.log("OCR Response: ", ocrResponse);
      return ocrResponse;
    } catch (error) {
      console.error("Error processing OCR: ", error);
    }
  }

  static async encodePdf(pdfPath: string) {
    try {
      const pdfBuffer = fs.readFileSync(pdfPath);

      const base64Pdf = pdfBuffer.toString("base64");
      return base64Pdf;
    } catch (error) {
      console.error(`Error: ${error}`);
      return null;
    }
  }
}
