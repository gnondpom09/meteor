// configuration des routes
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
      Meteor.subscribe('posts'),
      Meteor.subscribe('comments')
    ];
  }
});

// home
Router.route('/', {
  name: 'postsList'
});
// page detail post
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});
// modification des posts
Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});
// soumission de posts
Router.route('/submit', {
  name: 'postSubmit'
});
// interdiction d acces au formulaire si l utilisateur n est pas connecte
var requireLogin = function() {
  if (!Meteor.user()) {
    if (Meteor.logginIn) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
};

// redirection mauvaise url
Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
});
// restriction d acces au formulaireRouteRoute
Router.onBeforeAction(requireLogin, {
  only: 'postSubmit'
});
