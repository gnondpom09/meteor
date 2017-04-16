/**
 * publications dans la collection Mongo db cote serveur
 */

 // publie les posts
 Meteor.publish('posts', function() {
   return Posts.find();
 });

// publie les commentaires
 Meteor.publish('comments', function(postId) {
   check(postId, String);
   return Comments.find({
     postId: postId
   });
 });

// publie les notifications
 Meteor.publish('notifications', function() {
   return Notifications.find();
 })
