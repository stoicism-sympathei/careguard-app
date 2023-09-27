const mongoose = require('mongoose');

const reportingHistorySchema = new mongoose.Schema({
  id: Number,
  description: String,
  status: String,
});

const ReportingHistory = mongoose.model('ReportingHistory', reportingHistorySchema);

module.exports = ReportingHistory;

