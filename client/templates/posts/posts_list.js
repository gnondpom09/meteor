// tableau des posts
var postsData = [
  {
    title: 'introduction telescope',
    url: 'http://sachagreif.com/introducing-telescope/'
  },
  {
    title: 'Meteor',
    url: 'http://meteor.com'
  },
  {
    title: 'The Meteor book',
    url: 'http://themeteorbook.com'
  }
]; // fermeture du tableau

// helpers
Template.postsList.helpers({
  posts: postsData
});
