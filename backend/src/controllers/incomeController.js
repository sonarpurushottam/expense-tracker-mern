import * as incomeService from '../services/incomeService';

export const createIncome = async (req, res) => {
  try {
    const newIncome = await incomeService.createIncome(req.body);
    res.status(201).json(newIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getIncomeById = async (req, res) => {
  try {
    const incomeId = req.params.id;
    const income = await incomeService.getIncomeById(incomeId);
    if (!income) {
      return res.status(404).json({ message: 'Income not found' });
    }
    res.status(200).json(income);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateIncome = async (req, res) => {
  try {
    const incomeId = req.params.id;
    const updatedIncome = await incomeService.updateIncome(incomeId, req.body);
    if (!updatedIncome) {
      return res.status(404).json({ message: 'Income not found' });
    }
    res.status(200).json(updatedIncome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteIncome = async (req, res) => {
  try {
    const incomeId = req.params.id;
    const deletedIncome = await incomeService.deleteIncome(incomeId);
    if (!deletedIncome) {
      return res.status(404).json({ message: 'Income not found' });
    }
    res.status(200).json({ message: 'Income deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add other income-related controller functions as needed
