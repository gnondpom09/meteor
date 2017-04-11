// configuration des routes
Router.configure({
  layoutTemplate: 'layout'
});

// home
Router.route('/', {name: 'postsList'});
