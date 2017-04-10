/**
 * Affichage des posts de la collection mongoDB
 */

// helpers
Template.postsList.helpers({
  posts: function() {
    return Posts.find(); 
  }
});
