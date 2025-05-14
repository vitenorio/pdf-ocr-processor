# PDF OCR Processor

Este repositório disponibiliza uma aplicação para download de arquivos PDF a partir de uma URL e conversão de seu conteúdo em texto por meio de OCR, utilizando a API do Mistral.

## O que é OCR?

OCR (Reconhecimento Óptico de Caracteres) é uma tecnologia que converte documentos digitalizados, como PDFs e imagens, em texto pesquisável e editável, facilitando a extração de informações e imagens.

## O que é Mistral?

Mistral é uma plataforma de inteligência artificial que fornece APIs para diversas funcionalidades, incluindo OCR. A API do Mistral permite processar documentos e extrair texto de maneira eficiente, utilizando modelos avançados de aprendizado de máquina.

## Funcionalidades

- **Download de PDFs**: A aplicação baixa arquivos PDF a partir de uma URL fornecida.
- **Conversão para OCR**: O conteúdo dos PDFs é processado e convertido em texto utilizando a API do Mistral.


## Como Executar

### Pré-requisitos

- Node.js
- [API Key do Mistral](https://console.mistral.ai/api-keys) (adicione no arquivo `.env`)


### Endpoints
**POST** `/api/process-pdf-to-ocr`   
Envia uma URL de PDF para ser processada.

**Body:**
```
{
  "pdfUrl": "https://example.com/document.pdf"
}
```

**Resposta:**
```
{
  "message": "PDF processed successfully!",
  "ocr": { ...conteúdo extraído... }
}
```
