/**
 * Base de donnes de test
 */
 if (Posts.find().count() === 0) {
   // si la base de donnees est vide on insert les posts
   Posts.insert({
     title: 'Artiste',
     url: 'http://laurentbotella-artist.com'
   });
   Posts.insert({
     title: 'designer',
     url: 'http://laurentbotella-designer.com'
   });
   Posts.insert({
     title: 'Meteor',
     url: 'http://meteor.com'
   });
 }
