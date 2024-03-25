const mongoose = require('mongoose');


const pdfSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    description: String,
  });
  const Pdf = mongoose.model('Pdf', pdfSchema);
  module.exports = Pdf;