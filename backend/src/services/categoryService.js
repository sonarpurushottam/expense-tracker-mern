import Category from "../models/categoryModel"; // Assuming Category model is defined in models/Category.js

export const createCategory = async (categoryData) => {
  try {
    const newCategory = new Category(categoryData);
    return await newCategory.save();
  } catch (error) {
    throw Error("Error creating category");
  }
};

export const getCategoryById = async (categoryId) => {
  try {
    return await Category.findById(categoryId);
  } catch (error) {
    throw Error("Category not found");
  }
};

export const updateCategory = async (categoryId, categoryData) => {
  try {
    return await Category.findByIdAndUpdate(categoryId, categoryData, {
      new: true,
    });
  } catch (error) {
    throw Error("Error updating category");
  }
};

export const deleteCategory = async (categoryId) => {
  try {
    return await Category.findByIdAndDelete(categoryId);
  } catch (error) {
    throw Error("Error deleting category");
  }
};

// Add other category-related services as needed
