import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  url: String,
  title: String,
  description: String,
  image: String,

  isFavorite: {
    type: Boolean,
    default: false
  },

  // 🔥 ADD THIS
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

export default mongoose.model('Link', linkSchema);