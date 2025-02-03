import mongoose, { models } from 'mongoose';

const pdfSchema = new mongoose.Schema({
  pdf: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
});

const PdfS = models.PdfS || mongoose.model('PdfS', pdfSchema);
export default PdfS;
