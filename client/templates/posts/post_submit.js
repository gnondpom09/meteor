// envoie du formulaire
Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    // valeur des posts
    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    // routage
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});
