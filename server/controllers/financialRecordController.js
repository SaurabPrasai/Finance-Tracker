import FinancialRecordModel from "../models/financialRecord.js";

export const getAllRecord = async (req, res) => {
  const userId = req.params.userId;
  try {
    const record = await FinancialRecordModel.find({ userId });
    return res.status(200).json(record);
  } catch (error) {
    console.log(error);
  }
};

export const postRecord = async (req, res) => {
  try {
    const newRecord = await FinancialRecordModel.create(req.body);
    const saverecord = await newRecord.save();
    return res.status(201).json(saverecord);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecord = async (req, res) => {
  const id = req.params.id;
  try {
    const updateRecord = await FinancialRecordModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    );
    res.status(201).json(updateRecord);
  } catch (error) {
    console.log(error);
  }
};

export const deleteRecord = async (req, res) => {
  const id = req.params.id;
  try {
    const record = await FinancialRecordModel.findByIdAndDelete(id);
    return res.status(200).json(record);
  } catch (error) {
    console.log(error);
  }
};
