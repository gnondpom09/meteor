/**
 * modification des posts
 */
 Template.postEdit.onCreated(function() {
   Session.set('postEditErrors', {});
 });
 Template.postEdit.helpers({
   errorMessage: function(field) {
     return Session.get('postEditErrors')[field];
   },
   errorClass: function(field) {
     return !!Session.get('postEditErrors')[field] ? 'has error' : '';
   }
 })

 Template.postEdit.events({
   'submit form': function(e) {
     e.preventDefault();

     var currentPostId = this._id;

     var postProperties = {
       url: $(e.target).find('[name=url]').val(),
       title: $(e.target).find('[name=title]').val()
     }

     // gestion des erreurs 
     var errors = validatePost(postProperties);
     if (errors.title || errors.url) {
       return Session.set('postEditErrors', errors);
     }

     // mis a jour des posts
     Posts.update(currentPostId, {$set: postProperties}, function(error) {
       if (error) {
         // affiche l'erreur à l'utilisateur
         throwError(error.reason);
       } else {
         Router.go('postPage', {_id: currentPostId});
       }
     });
   },
   // suppression ds posts
   'click .delete': function(e) {
     e.preventDefault();

     if (confirm("Delete this post?")) {
       var currentPostId = this._id;
       Posts.remove(currentPostId);
       Router.go('postsList');
     }
   }
 });
