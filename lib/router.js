// configuration des routes
Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
      Meteor.subscribe('posts'),
      Meteor.subscribe('notifications')
    ]
  }
});

// home
Router.route('/', {name: 'postsList'});

// vue detail du post
Router.route('/posts/:_id', {
  name: 'postPage',
  waitOn: function() {
    return Meteor.subscribe('comments', this.params._id);
  },
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

// vue editer le post
Router.route('/posts/:_id/edit', {
  name: 'postEdit',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

// vue formulaire
Router.route('/submit', {name: 'postSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {
  only: 'postPage'
});
Router.onBeforeAction(requireLogin, {
  only: 'postSubmit'
});
