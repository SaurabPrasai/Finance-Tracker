import mongoose from "mongoose";

const financialSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

const FinancialRecordModel=mongoose.model("FinancialRecord",financialSchema)

export default FinancialRecordModel