import express from 'express';
import * as categoryController from '../controllers/categoryController';

const router = express.Router();

router.post('/categories', categoryController.createCategory);
router.get('/categories/:id', categoryController.getCategoryById);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

// Add other category-related routes as needed

export default router;
