const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String },
  city: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  averagePrice: { type: Number, required: true},
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
