
var User = require('mongoose').model('User');
var Post = require('mongoose').model('Post');

exports.create = function(req, res, next) {
  var user = new User();
  user.save();

  var post = new Post();
  post.author = user;
  post.save();
};


exports.findOneByPostID = function(req, res, next, id) {
  //Post.find().populate('author')
  //  .exec(function(err, posts) {
  //  
  //  });
};
