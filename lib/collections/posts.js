/**
 * Collections Mongo DB
 */
// nouvelle instance de collection posts disponible dans toute l application
Posts = new Mongo.Collection('posts');

// insertion des posts cote client
Posts.allow({
  insert: function(userId, doc) {
    // autoriser si l utilisateur est connecte
    return !! userId;
  }
});
