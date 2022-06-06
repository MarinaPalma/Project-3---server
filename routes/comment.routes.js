const router = require('express').Router();
const { isAuthenticated } = require('../middleware/jwt.middleware');

const User = require('../models/User.model');
const Restaurant = require('../models/Restaurant.model');
const Comment = require("../models/Comment.model")

router.post('/restaurants/comments', isAuthenticated, (req, res, next) => {
  const { restaurant, content, imageUrl} = req.body;
  const {_id} = req.payload;

  let newComment;

  Comment.create({ author: _id, restaurant, content, imageUrl })
    .then((comment) => {
        newComment = comment;
      return Restaurant.findByIdAndUpdate(restaurant, { $push: { comments: newComment._id } }, { new: true });
    })
    .then(() => {
        return User.findByIdAndUpdate(author, { $push: { comments: newComment._id } }, { new: true });
      })
    .then((response) => res.json(response))
    .catch((err) => res.json(err));
});

router.put('/restaurants/comments/:commentId', (req, res, next) => {
    const { commentId } = req.params;
    const {_id} = req.payload;

  Comment.findById(commentId)
  .then((foundComment)=>{
  if(foundComment.author != _id) {
    res.status(403).json({errorMessage: "You don´t have permisson"})
    return
  } else {
    Comment.findByIdAndUpdate(commentId, req.body, { new: true })

    .then((response) => res.json(response))
  }
})
.catch((err) => res.json(err));

});



router.delete('/restaurants/comments/:commentId', (req, res, next) => {
    const { commentId } = req.params;
    const {_id} = req.payload;
   let deletedComment;

Comment.findById(commentId)

.then((foundComment)=>{
  if(foundComment.author != _id) {
    res.status(403).json({errorMessage: "You don´t have permisson"})
    return
  } else {
     Comment.findByIdAndRemove(commentId)
      .then((comment) => {
        deletedComment = comment;
        return Restaurant.findByIdAndUpdate(deletedComment.restaurant, { $pull: { comments: commentId} }, { new: true });
      })
      .then(() => {
        return User.findByIdAndUpdate(deletedComment.author, { $pull: { comments: commentId} }, { new: true });
      })
      .then((response) => res.json(response))  
  }
})
.catch((err) => res.json(err));
  });



module.exports = router;