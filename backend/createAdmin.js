const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

async function createAdmin() {
  try {
    const userExists = await User.findOne({ username: "admin" });
    if (userExists) {
      console.log("Admin already exists");
      process.exit();
    }

    const admin = new User({
      username: "admin",
      password: "admin123", // You can change this
      role: "admin"
    });

    await admin.save();
    console.log("✅ Admin user created successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

createAdmin();
