/**
 * Collections Mongo DB
 */
// nouvelle instance de collection posts disponible dans toute l application
Posts = new Mongo.Collection('posts');

// definir les autorisations d acces
Posts.allow({
  update: function(userId, post) {
    return ownsDocuments(userId, post);
  },
  remove: function(userId, post) {
    return ownsDocuments(userId, post);
  }
});
// restreindre les champs modifiables
Posts.deny({
  update: function(userId, post, fieldNames) {
    return (_.without(fieldNames, 'ulr', 'title').length > 0);
  }
});

// validation des posts
validatePost = function(post) {
  var errors = {};
  if (!post.title) {
    errors.title = "Renseignez le titre de l'article";
  }
  if (!post.url) {
    errors.url = "remplissez l url";
  }
  return errors;
}

// insertion des posts cote client
Meteor.methods({
    postInsert: function(postAttributes) {
        check(this.userId, String);
        check(postAttributes, {
            title: String,
            url: String
        });

        // gestion des erreurs
        var errors = validatePost(postAttributes);
        if (errors.title || errors.url) {
          throw new Meteor.Error('Invalid post', 'Vous devez renseigner un titre et une url');
        }

        // verifier les doublons
        var postWithSameLink = Posts.findOne({
          url: postAttributes.url
        });
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }

        // definir la date du post
        var user = Meteor.user();
        var post = _.extend(postAttributes, {
            userId: user._id,
            author: user.username,
            submitted: new Date()
        });

        var postId = Posts.insert(post);

        return {
            _id: postId
        };
    }
});
