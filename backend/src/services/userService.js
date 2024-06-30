import User from "../models/userModel"; // Assuming User model is defined in models/User.js

export const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    return await newUser.save();
  } catch (error) {
    throw Error("Error creating user");
  }
};

export const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw Error("User not found");
  }
};

export const updateUser = async (userId, userData) => {
  try {
    return await User.findByIdAndUpdate(userId, userData, { new: true });
  } catch (error) {
    throw Error("Error updating user");
  }
};

export const deleteUser = async (userId) => {
  try {
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    throw Error("Error deleting user");
  }
};

export const getUserByEmail = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (error) {
    throw Error("User not found");
  }
};

// Add other user-related services as needed
