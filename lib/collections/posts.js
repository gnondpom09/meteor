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

// insertion des posts cote client
Meteor.methods({
    postInsert: function(postAttributes) {
        check(this.userId, String);
        check(postAttributes, {
            title: String,
            url: String
        });

        var postWithSameLink = Posts.findOne({
          url: postAttributes.url
        });
        if (postWithSameLink) {
            return {
                postExists: true,
                _id: postWithSameLink._id
            }
        }

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
