/**
 * collection erreurs cote client non sauvegardes dans mongoDB
 */
 Errors = new Meteor.Collection(null);

throwError = function(message) {
  Errors.insert({
    message: message
  });
};
