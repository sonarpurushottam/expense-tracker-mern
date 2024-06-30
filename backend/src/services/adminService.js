import Admin from "../models/adminModel"; // Assuming Admin model is defined in models/Admin.js

export const createAdmin = async (adminData) => {
  try {
    const newAdmin = new Admin(adminData);
    return await newAdmin.save();
  } catch (error) {
    throw Error("Error creating admin");
  }
};

export const getAdminById = async (adminId) => {
  try {
    return await Admin.findById(adminId);
  } catch (error) {
    throw Error("Admin not found");
  }
};

export const updateAdmin = async (adminId, adminData) => {
  try {
    return await Admin.findByIdAndUpdate(adminId, adminData, { new: true });
  } catch (error) {
    throw Error("Error updating admin");
  }
};

export const deleteAdmin = async (adminId) => {
  try {
    return await Admin.findByIdAndDelete(adminId);
  } catch (error) {
    throw Error("Error deleting admin");
  }
};

export const getAdminByEmail = async (email) => {
  try {
    return await Admin.findOne({ email });
  } catch (error) {
    throw Error("Admin not found");
  }
};

// Add other admin-related services as needed
