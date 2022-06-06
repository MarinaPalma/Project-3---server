const router = require("express").Router();
const User = require("../models/User.model");
const Comment = require("../models/Comment.model");
const Restaurant = require("../models/Restaurant.model");

//If user.role === "admin"
router.post("/restaurants", (req, res, next) => {
  const {
    name,
    imageCover,
    city,
    contact,
    address,
    // comments,?
    averagePrice,
  } = req.body;

  Restaurant.create({
    name,
    imageCover,
    city,
    contact,
    address,
    // comments,? ou []?
    averagePrice,
  })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//req.body tem de ter os mm nomes

router.put("/restaurants/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;

  Restaurant.findByIdAndUpdate(restaurantId, req.body, { new: true })

    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.delete("/restaurants/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;

  Restaurant.findByIdAndRemove(restaurantId)

    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

//If user.role === "user" and admin
router.get("/restaurants", (req, res, next) => {
  Restaurant.find()
    .populate("comments")

    .then((allRestaurants) => res.json(allRestaurants))
    .catch((err) => res.json(err));
});

router.get("/restaurants/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;

  Restaurant.findById(restaurantId)
    .populate("comments")
    .populate({
      path:"comments",
      populate:{
        path:"author",
        model:"User"
      }
    })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

module.exports = router;


// .populate({
//   path:"author",
//   populate:{
//     path:"comments"}
//   })