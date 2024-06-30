import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['expense', 'income'] },
});

const Category = mongoose.model('Category', CategorySchema);

export default Category;
