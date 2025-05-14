import { Router } from "express";
import { processPdfToOCR } from "../controllers/pdfController";

export const router = Router();

router.post("/process-pdf-to-ocr", processPdfToOCR); 

