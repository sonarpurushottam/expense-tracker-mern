import express from 'express';
import * as expenseController from '../controllers/expenseController';

const router = express.Router();

router.post('/expenses', expenseController.createExpense);
router.get('/expenses/:id', expenseController.getExpenseById);
router.put('/expenses/:id', expenseController.updateExpense);
router.delete('/expenses/:id', expenseController.deleteExpense);


export default router;
