const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: { type: String, required: [true, "Please enter a password"] },
  imageProfile: { type: String, default: "https://res.cloudinary.com/dnorytyjz/image/upload/v1654178687/Taskas/food_critic_default_ghd8oh.png" },
  name: { type: String, required: [true, "Please enter a name"] },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  favourites: [{ type: Schema.Types.ObjectId, ref: "Restaurant" }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

const User = model("User", userSchema);

module.exports = User;