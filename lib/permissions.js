/**
 * permissions des utilisateurs
 */
 ownsDocuments = function(userId, doc) {
   return doc && doc.userId === userId;
 }
