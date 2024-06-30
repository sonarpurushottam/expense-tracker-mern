import * as expenseService from "../services/expenseService";

export const createExpense = async (req, res) => {
  try {
    const newExpense = await expenseService.createExpense(req.body);
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExpenseById = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const expense = await expenseService.getExpenseById(expenseId);
    if (!expense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const updatedExpense = await expenseService.updateExpense(
      expenseId,
      req.body
    );
    if (!updatedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const expenseId = req.params.id;
    const deletedExpense = await expenseService.deleteExpense(expenseId);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
