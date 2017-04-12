/**
 * Collections Mongo DB
 */
// nouvelle instance de collection posts disponible dans toute l application
Posts = new Mongo.Collection('posts');

// insertion des posts cote client
Meteor.methods({
  postInsert: function(postAttributes) {
    // verification validite des champs
    check(Meteor.userId(), String);
    check(postAttributes, {
      title: String,
      url: String
    });
    // affectations
    var user = Meteor.user();
    var post = _.extend(postAttributes, {
      user: user._id,
      author: user.username,
      submitted: new date()
    });
    var postId = postInsert(post);
    // result
    return {
      id: postId
    };
  }
});
