import Expense from "../models/expenseModel"; // Assuming Expense model is defined in models/Expense.js

export const createExpense = async (expenseData) => {
  try {
    const newExpense = new Expense(expenseData);
    return await newExpense.save();
  } catch (error) {
    throw Error("Error creating expense");
  }
};

export const getExpenseById = async (expenseId) => {
  try {
    return await Expense.findById(expenseId);
  } catch (error) {
    throw Error("Expense not found");
  }
};

export const updateExpense = async (expenseId, expenseData) => {
  try {
    return await Expense.findByIdAndUpdate(expenseId, expenseData, {
      new: true,
    });
  } catch (error) {
    throw Error("Error updating expense");
  }
};

export const deleteExpense = async (expenseId) => {
  try {
    return await Expense.findByIdAndDelete(expenseId);
  } catch (error) {
    throw Error("Error deleting expense");
  }
};

// Add other expense-related services as needed
