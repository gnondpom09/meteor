/**
 * envoie du formulaire
 */
Template.postSubmit.onCreated(function() {
  Session.set('postSubmitErrors', {});
});
Template.postSubmit.helpers({
  errorMessage: function(field) {
    return Session.get('postSubmitErrors')[field];
  },
  errorClass: function(field) {
    return !!Session.get('postSubmitErrors')[field] ? 'has error' : '';
  }
});
// evenements du formulaire
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    // champs du post
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    // gestion des erreurs
    var errors = validatePost(post);
    if (errors.title || errors.url) {
      return Session.set('postSubmitErrors', errors);
    }
    // insertion d un post
    Meteor.call('postInsert', post, function(error, result) {
      // display the error to the user and abort
      if (error)
        return throwError(error.reason);

      // show this result but route anyway
      if (result.postExists)
        throwError('Ce lien a déjà été posté!');

      Router.go('postPage', {
        _id: result._id
      });
    });
  }
});
