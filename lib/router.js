// configuration des routes
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
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
// redirection mauvaise url
Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
});
