import axios from "axios";
import fs from "fs";
import path from "path";

export class PdfDownloader {
  static async download(url: string, outputDir: string) {
    try {
      const response = await axios.get(url, { responseType: "arraybuffer" });

      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      const timestamp = Date.now();
      const fileName = `downloaded_${timestamp}.pdf`;
      const filePath = path.join(outputDir, fileName);

      fs.writeFileSync(filePath, response.data);

      return filePath;
    } catch (error) {
      throw new Error(
        "Error downloading PDF. Check the URL and try again."
      );
    }
  }
}
