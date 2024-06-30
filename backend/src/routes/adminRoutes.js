import express from 'express';
import * as adminController from '../controllers/adminController';

const router = express.Router();

router.post('/admins', adminController.createAdmin);
router.get('/admins/:id', adminController.getAdminById);
router.put('/admins/:id', adminController.updateAdmin);
router.delete('/admins/:id', adminController.deleteAdmin);
router.get('/admins/email/:email', adminController.getAdminByEmail);

// Add other admin-related routes as needed

export default router;
