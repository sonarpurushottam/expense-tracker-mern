import express from 'express';
import * as incomeController from '../controllers/incomeController';

const router = express.Router();

router.post('/incomes', incomeController.createIncome);
router.get('/incomes/:id', incomeController.getIncomeById);
router.put('/incomes/:id', incomeController.updateIncome);
router.delete('/incomes/:id', incomeController.deleteIncome);

// Add other income-related routes as needed

export default router;
