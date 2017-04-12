// envoie du formulaire
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    // valeur des posts
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    // appel methode postInsert avec callback
    Meteor.call('postInsert', post, function(error, result) {
      if (error) {
        return alert(error.reason); // affiche l erreur utilisateur
      }
      // routage
      Router.go('postPage', {
        _id: result._id
      }); // fermeture router
    }) // fermeture method call
  } // fermeture submit form
}); // fermeture template
