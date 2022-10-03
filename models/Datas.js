const mongoose = require("mongoose");

const DatasSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Datas", DatasSchema);
