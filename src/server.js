import dotenv from 'dotenv';
import app from './app.js';
// import connectDB from './config/db.js'; ❌ removed

dotenv.config();

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    // await connectDB(); ❌ disabled MongoDB

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server failed to start:", error.message);
    process.exit(1);
  }
};

startServer();