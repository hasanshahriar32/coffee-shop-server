import mongoose, { Schema, model } from "mongoose";

const userSchema = mongoose.Schema({
  userName: String, // String is shorthand for {type: String}
  email: String,
});

module.exports = mongoose.model("user", userSchema);
