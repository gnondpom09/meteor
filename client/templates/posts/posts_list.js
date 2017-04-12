/**
 * Affichage des posts de la collection mongoDB
 */

// helpers
Template.postsList.helpers({
  posts: function() {
    return Posts.find({}, {
      sort: {
        submitted: -1
      }
    }); // retourne les posts de la collection posts
  }
});
