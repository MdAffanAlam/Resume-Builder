const mongoose = require("mongoose");

// Connecting to MongoDB Atlas
mongoose
  .connect(
    "mongodb+srv://MdAffanAlam:Affan91atlas@cluster0.vowj5.mongodb.net/ResumeBuilder?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log(
      `MongoDB Atlas connected Successfully`
    );
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB Atlas: ${err}`);
  });

// Create a schema for the User
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [50, "Name must be less than 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [5, "Password must be at least 5 characters long"],
    maxlength: [30, "Password must be less than 30 characters"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
