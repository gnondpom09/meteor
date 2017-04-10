/**
 * Base de donnes de test
 */
 if (Posts.find().count() === 0) {
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
