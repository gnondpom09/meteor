/**
 * publications dans la collection Mongo db cote serveur
 */
Meteor.publish('posts', function() {
  return Posts.find(); // retourne les posts a afficher cote client avec subscribe
});
