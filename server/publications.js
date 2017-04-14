/**
 * publications dans la collection Mongo db cote serveur
 */
 // affiche les posts
 Meteor.publish('posts', function() {
   return Posts.find();
 });

 Meteor.publish('comments', function(postId) {
   check(postId, String);
   return Comments.find({
     postId: postId
   });
 });
