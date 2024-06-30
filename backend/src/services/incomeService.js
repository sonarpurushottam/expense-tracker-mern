import Income from "../models/incomeModel"; // Assuming Income model is defined in models/Income.js

export const createIncome = async (incomeData) => {
  try {
    const newIncome = new Income(incomeData);
    return await newIncome.save();
  } catch (error) {
    throw Error("Error creating income");
  }
};

export const getIncomeById = async (incomeId) => {
  try {
    return await Income.findById(incomeId);
  } catch (error) {
    throw Error("Income not found");
  }
};

export const updateIncome = async (incomeId, incomeData) => {
  try {
    return await Income.findByIdAndUpdate(incomeId, incomeData, { new: true });
  } catch (error) {
    throw Error("Error updating income");
  }
};

export const deleteIncome = async (incomeId) => {
  try {
    return await Income.findByIdAndDelete(incomeId);
  } catch (error) {
    throw Error("Error deleting income");
  }
};

// Add other income-related services as needed
