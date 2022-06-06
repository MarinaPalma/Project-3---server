const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  imageCover: { type: String },
  city: { type: String, required: true },
  contact: { type: Number },
  address: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  averagePrice: { type: Number },
  location: {
    address: String,
    geo: {
      lat: Number,
      lng: Number,
    },
  },
});

const Restaurant = model("Restaurant", restaurantSchema);

module.exports = Restaurant;
