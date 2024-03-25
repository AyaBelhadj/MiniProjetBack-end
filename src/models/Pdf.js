const mongoose = require('mongoose');


const pdfSchema = new mongoose.Schema({
    name: String,
    data: Buffer
  });
  const Pdf = mongoose.model('Pdf', pdfSchema);
  module.exports = Pdf;