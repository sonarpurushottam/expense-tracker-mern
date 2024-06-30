import * as adminService from '../services/adminService';

export const createAdmin = async (req, res) => {
  try {
    const newAdmin = await adminService.createAdmin(req.body);
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAdminById = async (req, res) => {
  try {
    const adminId = req.params.id;
    const admin = await adminService.getAdminById(adminId);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const updatedAdmin = await adminService.updateAdmin(adminId, req.body);
    if (!updatedAdmin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const adminId = req.params.id;
    const deletedAdmin = await adminService.deleteAdmin(adminId);
    if (!deletedAdmin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAdminByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const admin = await adminService.getAdminByEmail(email);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add other admin-related controller functions as needed
